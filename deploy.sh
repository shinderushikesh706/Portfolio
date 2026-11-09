#!/usr/bin/env bash
set -e

echo "========================================================"
echo "🚀 Deploying Rushikesh Shinde Portfolio to OCI Instance"
echo "========================================================"

# Detect OS
OS_FAMILY="unknown"
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS_FAMILY=$ID
fi

echo "🔍 Detected OS: $OS_FAMILY"

# 1. Install Docker & Docker Compose if missing
if ! command -v docker &> /dev/null; then
    echo "📦 Docker not found. Installing Docker engine..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker "$USER" || true
    sudo systemctl enable --now docker || true
    rm -f get-docker.sh
    echo "✅ Docker installed successfully."
fi

# Ensure docker service is running
sudo systemctl start docker || true

# 2. Open OS-level firewall ports (Port 80 & 443) - Essential for OCI!
echo "🛡️ Configuring host firewall for ports 80 & 443..."
if command -v firewall-cmd &> /dev/null; then
    # Oracle Linux / RHEL / CentOS (firewalld)
    sudo firewall-cmd --permanent --add-service=http || true
    sudo firewall-cmd --permanent --add-service=https || true
    sudo firewall-cmd --permanent --add-port=80/tcp || true
    sudo firewall-cmd --permanent --add-port=443/tcp || true
    sudo firewall-cmd --reload || true
    echo "✅ firewalld rules updated."
elif command -v iptables &> /dev/null; then
    # Ubuntu / Debian on OCI has strict iptables rules by default
    sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT || true
    sudo iptables -I INPUT 1 -p tcp --dport 443 -j ACCEPT || true
    if command -v netfilter-persistent &> /dev/null; then
        sudo netfilter-persistent save || true
    fi
    echo "✅ iptables rules updated."
fi

# 3. Build and launch container in detached mode
echo "🔨 Building and launching Next.js standalone container..."

# Try docker compose with current user, fallback to sudo docker compose if needed
DOCKER_CMD="docker compose"
if ! docker compose version &> /dev/null; then
    if sudo docker compose version &> /dev/null; then
        DOCKER_CMD="sudo docker compose"
    elif command -v docker-compose &> /dev/null; then
        DOCKER_CMD="docker-compose"
    else
        echo "📦 Installing docker-compose-plugin..."
        if [ "$OS_FAMILY" = "ubuntu" ] || [ "$OS_FAMILY" = "debian" ]; then
            sudo apt-get update && sudo apt-get install -y docker-compose-plugin
        else
            sudo dnf install -y docker-compose-plugin || sudo yum install -y docker-compose-plugin
        fi
        DOCKER_CMD="sudo docker compose"
    fi
fi

$DOCKER_CMD down || true
$DOCKER_CMD up -d --build

# 4. Wait for container to initialize
echo "⏳ Waiting for application to initialize..."
sleep 6

# 5. Check container status
CONTAINER_NAME="rushikesh_portfolio"
if sudo docker ps | grep -q "$CONTAINER_NAME"; then
    PUBLIC_IP=$(curl -s ifconfig.me || curl -s icanhazip.com || echo "<YOUR_OCI_PUBLIC_IP>")
    echo "========================================================"
    echo "🎉 Deployment Successful on OCI!"
    echo "🌐 Access your live portfolio at: http://$PUBLIC_IP"
    echo ""
    echo "⚠️ NOTE FOR OCI: Ensure you have added an Ingress Rule"
    echo "for Port 80 (TCP) in your OCI VCN Security List!"
    echo "========================================================"
else
    echo "❌ Container failed to start. Logs:"
    sudo docker logs "$CONTAINER_NAME"
    exit 1
fi

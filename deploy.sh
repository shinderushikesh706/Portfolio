#!/usr/bin/env bash
set -e

echo "=========================================="
echo "🚀 Deploying Rushikesh Shinde Portfolio to Vultr"
echo "=========================================="

# 1. Check if Docker is installed, install if missing (Ubuntu/Debian)
if ! command -v docker &> /dev/null; then
    echo "📦 Docker not found. Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm -f get-docker.sh
    echo "✅ Docker installed successfully."
fi

# 2. Check if Docker Compose plugin is available
if ! docker compose version &> /dev/null; then
    echo "📦 Docker Compose plugin not found. Installing..."
    sudo apt-get update && sudo apt-get install -y docker-compose-plugin
fi

# 3. Build and launch container in detached mode
echo "🔨 Building and launching container..."
docker compose down || true
docker compose up -d --build

# 4. Wait for container healthcheck
echo "⏳ Waiting for application to initialize..."
sleep 5

# 5. Check container status
if docker ps | grep -q rushikesh_portfolio; then
    echo "=========================================="
    echo "🎉 Deployment Successful!"
    echo "🌐 Your portfolio is running live on port 80!"
    echo "Visit: http://$(curl -s ifconfig.me 2>/dev/null || echo '<YOUR_VULTR_IP>')"
    echo "=========================================="
else
    echo "❌ Deployment failed. Checking container logs:"
    docker logs rushikesh_portfolio
    exit 1
fi

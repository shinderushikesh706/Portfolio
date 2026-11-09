import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-slate-800 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 mx-auto flex items-center justify-center">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Error 404
          </span>
          <h1 className="text-3xl font-bold text-slate-100 mt-1">
            Node Disconnected
          </h1>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            The requested trajectory or resource vector could not be resolved in the current state graph.
          </p>
        </div>

        <div className="pt-2">
          <Link href="/">
            <Button
              variant="glow"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Return to System Root
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

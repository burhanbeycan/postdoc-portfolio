import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-bold text-accent/20">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>
        </div>
        <Link href="/">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

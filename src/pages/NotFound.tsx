import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Sidan hittades inte:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-sm font-medium text-primary mb-2">404</p>
        <h1 className="text-3xl font-heading font-bold mb-3">Sidan hittades inte</h1>
        <p className="text-muted-foreground mb-6">Sidan du letar efter finns inte eller har flyttats.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          ← Tillbaka till designsystemet
        </a>
      </div>
    </div>
  );
};

export default NotFound;

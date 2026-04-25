export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted-foreground">
        <span className="font-display text-gold tracking-wider text-base">
          Zoomify
        </span>
        <span className="mx-2">·</span>© {new Date().getFullYear()}
      </div>
    </footer>
  );
}
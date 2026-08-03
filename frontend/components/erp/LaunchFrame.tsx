export function LaunchFrame({ children }: { children: React.ReactNode }) {
  return (
    // Mobile: below the fixed h-16 top bar, full width (no sidebar at this
    // breakpoint). Desktop (md+): no top bar, but the persistent w-72 sidebar
    // is also `fixed`, so it takes up screen space this fixed div must be
    // pushed clear of too — matching the shell layout's own md:pl-72 offset —
    // otherwise this renders full-width and sits underneath the sidebar.
    <div className="fixed inset-x-0 top-16 bottom-0 z-30 flex flex-col bg-surface md:top-0 md:left-72">
      {children}
    </div>
  );
}

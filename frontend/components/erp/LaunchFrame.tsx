export function LaunchFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-x-0 top-16 bottom-0 z-30 bg-surface">{children}</div>
  );
}

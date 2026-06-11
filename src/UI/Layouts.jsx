export function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#050505]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      <div className="relative z-10 w-full max-w-[2560px] mx-auto">
        {children}
      </div>
    </div>
  );
}

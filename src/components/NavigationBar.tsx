export default function NavigationBar() {
  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 w-full text-white z-10 bg-linear-to-br from-black/30 via-slate-900/25 to-black/30 backdrop-blur-xl shadow-[inset_0_2px_1px_rgba(255,255,255,0.15),inset_0_-2px_1px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.2),inset_0_-2px_1px_rgba(0,0,0,0.25),0_12px_40px_rgba(0,0,0,0.5)] before:absolute before:inset-0 before:rounded-b-[3rem] before:bg-linear-to-br before:from-white/10 before:via-transparent before:to-purple-500/5 before:opacity-60 before:pointer-events-none after:absolute after:inset-0 after:rounded-b-[3rem] after:bg-linear-to-tl after:from-blue-500/10 after:via-transparent after:to-transparent after:opacity-40 after:pointer-events-none antialiased rounded-b-[3rem] border-b border-white/10">
      <div>
        <h1 className="font-oswald text-2xl font-bold ml-10 bg-clip-text! text-transparent animate-gradient-background">
          Serverless
        </h1>
      </div>
      <ul className="hidden gap-3 text-md font-medium mr-12 text-gray-400 *:hover:text-white transition-colors md:flex">
        <li className="hover:underline">
          <a href="/">Home</a>
        </li>
        <li className="hover:underline">
          <a href="/about">About</a>
        </li>
        <li className="hover:underline">
          <a href="/contact">Contact</a>
        </li>

        <li className="hover:underline">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

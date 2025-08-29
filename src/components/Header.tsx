import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white/50 text-black justify-between backdrop-blur-md">
      <div className="flex flex-row text-4xl flex-auto *:font-mono">
        <div className="px-2 font-[spacemono]">
          <Link to="/">Home</Link>
        </div>
        <nav className='flex flex-row  grow text-center *:flex-auto'>
          <div>
            <Link to="/brand">Brand</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

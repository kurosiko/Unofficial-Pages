import { createFileRoute, Link } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center h-screen w-screen">
      <div className='logo text-4xl fixed text-white mx-auto w-full p-5'>
        <h1>Welcome!</h1>
        <Link to='/brand'>Brand TOP</Link>
        <div className='animate-pulse'>
          <p>If you have any problems, please contace me</p>
          <p>eroge@kurosiko.com</p>
        </div>
      </div>
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>brain/porn.cfg</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline hover:animate-pulse"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline hover:animate-pulse"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
        <a
          className='text-[#61dafb] hover:underline hover:animate-pulse'
          href='https://vndb.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Visual Novel
        </a>
        <Link
          className='text-[#61dafb] hover:underline hover:animate-pulse'
          to='/profile'          
          rel='noopener noreferrer'
        >
          Learn Kurosiko
        </Link>
      </header>
    </div>
  )
}

import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent() {
      return(
        <>
          <h1>404</h1>
            <div className="flex flex-col items-center mt-8 animate-fade-in">
            <h1 className="text-6xl font-bold text-red-500 mb-4 animate-bounce">404</h1>
            <p className="text-xl text-gray-600 mb-2">ページが見つかりません</p>
            <svg className="w-24 h-24 text-gray-400 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
              <title>Loading spinner</title>
              <circle cx="24" cy="24" r="20" strokeOpacity="0.3" />
              <path d="M44 24c0-11-9-20-20-20" strokeLinecap="round" />
            </svg>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">ホームに戻る</a>
            </div>
            <style>
            {`
              @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
              }
              .animate-fade-in {
              animation: fade-in 0.8s ease;
              }
              @keyframes spin-slow {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
              }
              .animate-spin-slow {
              animation: spin-slow 3s linear infinite;
              }
            `}
            </style>
        </>
      )
  },
})

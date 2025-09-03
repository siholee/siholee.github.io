import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="flex items-center justify-center py-4">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            💪 FitGym
          </h1>
        </Link>
      </div>
    </header>
  )
}

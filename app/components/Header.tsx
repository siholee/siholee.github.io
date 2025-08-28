export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="flex items-center justify-center py-4">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          💪 FitGym
        </h1>
      </div>
    </header>
  )
}

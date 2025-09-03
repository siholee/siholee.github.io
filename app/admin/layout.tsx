import Link from 'next/link'
import AdminSidebar from '../components/AdminSideBar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        {/* 사이드바 */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <AdminSidebar />
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="lg:pl-72 flex-1">
          {/* 관리자 헤더 */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center lg:hidden">
                  <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    💪 FitGym Admin
                  </h1>
                </div>
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    관리자 대시보드
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">관리자 모드</span>
                  <Link
                    href="/app"
                    className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
                  >
                    앱으로 돌아가기
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* 메인 콘텐츠 */}
          <main className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

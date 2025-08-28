'use client'

export default function SettingsPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">설정</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            앱 설정을 관리하세요
          </p>
        </div>

        <div className="space-y-4">
          {/* 프로필 섹션 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">프로필</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-semibold">김</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">김헬스</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">kim@example.com</p>
              </div>
            </div>
          </div>

          {/* 알림 설정 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">알림 설정</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900 dark:text-white">운동 알림</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900 dark:text-white">예약 확인</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-900 dark:text-white">마케팅 정보</span>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </div>

          {/* 앱 설정 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">앱 설정</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-sm text-gray-900 dark:text-white">다크 모드</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">시스템 설정</span>
              </button>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-sm text-gray-900 dark:text-white">언어</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">한국어</span>
              </button>
            </div>
          </div>

          {/* 계정 관리 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">계정 관리</h3>
            <div className="space-y-3">
              <button className="w-full text-left py-2">
                <span className="text-sm text-gray-900 dark:text-white">비밀번호 변경</span>
              </button>
              <button className="w-full text-left py-2">
                <span className="text-sm text-gray-900 dark:text-white">개인정보 처리방침</span>
              </button>
              <button className="w-full text-left py-2">
                <span className="text-sm text-red-600 dark:text-red-400">로그아웃</span>
              </button>
            </div>
          </div>

          {/* 앱 정보 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">앱 정보</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">버전</span>
                <span className="text-sm text-gray-900 dark:text-white">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">개발사</span>
                <span className="text-sm text-gray-900 dark:text-white">FitGym Corp.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

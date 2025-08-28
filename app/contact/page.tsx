export default function ContactPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">문의하기</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            궁금한 점이 있으시면 언제든 문의해주세요
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">전화 문의</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">02-1234-5678</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">이메일 문의</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">info@fitgym.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">방문 문의</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  서울시 강남구 테헤란로 123<br />
                  FitGym 본점 1층 안내데스크
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">운영 시간</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  평일: 06:00 - 24:00<br />
                  주말: 08:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

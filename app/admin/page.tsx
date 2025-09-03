import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { 
  UserGroupIcon, 
  CalendarDaysIcon, 
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
  HeartIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const stats = [
  { 
    id: 1, 
    name: '총 회원 수', 
    stat: '2,847', 
    icon: UserGroupIcon, 
    change: '124', 
    changeType: 'increase',
    period: '지난 30일'
  },
  { 
    id: 2, 
    name: '이번 달 예약', 
    stat: '1,532', 
    icon: CalendarDaysIcon, 
    change: '8.2%', 
    changeType: 'increase',
    period: '이번 달'
  },
  { 
    id: 3, 
    name: '이번 달 수익', 
    stat: '₩12,847,000', 
    icon: CurrencyDollarIcon, 
    change: '3.4%', 
    changeType: 'decrease',
    period: '이번 달'
  },
  { 
    id: 4, 
    name: '평균 이용 시간', 
    stat: '1시간 42분', 
    icon: ClockIcon, 
    change: '12분', 
    changeType: 'increase',
    period: '주간 평균'
  },
  { 
    id: 5, 
    name: 'GX 참여율', 
    stat: '78.3%', 
    icon: ChartBarIcon, 
    change: '5.1%', 
    changeType: 'increase',
    period: '이번 주'
  },
  { 
    id: 6, 
    name: '회원 만족도', 
    stat: '4.8/5.0', 
    icon: HeartIcon, 
    change: '0.2', 
    changeType: 'increase',
    period: '이번 달'
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6">
        {/* 헤더 */}
        <div className="sm:flex sm:items-center mb-8">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FitGym 관리자 대시보드</h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              헬스장 운영 현황을 한눈에 확인하고 관리하세요
            </p>
          </div>
        </div>

        {/* 통계 카드 */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-5">운영 현황</h3>
          
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 dark:bg-gray-800 dark:ring-1 dark:ring-inset dark:ring-white/10"
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{item.stat}</p>
                  <p
                    className={classNames(
                      item.changeType === 'increase'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400',
                      'ml-2 flex items-baseline text-sm font-semibold',
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowUpIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 self-center text-green-500 dark:text-green-400"
                      />
                    ) : (
                      <ArrowDownIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 self-center text-red-500 dark:text-red-400"
                      />
                    )}

                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6 dark:bg-gray-700/20">
                    <div className="text-sm">
                      <button
                        className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        자세히 보기<span className="sr-only"> {item.name} 통계</span>
                      </button>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 빠른 액션 */}
        <div className="mt-8">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-5">빠른 관리</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/admin/user" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <UserGroupIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">회원 관리</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">신규/기존 회원</p>
                </div>
              </div>
            </Link>

            <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <CalendarDaysIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">예약 관리</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GX 프로그램</p>
                </div>
              </div>
            </button>

            <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <ChartBarIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">매출 분석</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">수익 리포트</p>
                </div>
              </div>
            </button>

            <button className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">피드백</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">회원 의견</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

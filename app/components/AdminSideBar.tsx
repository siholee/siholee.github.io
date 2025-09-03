'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  HeartIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: '대시보드', href: '/admin', icon: HomeIcon, current: false },
  { name: '회원 관리', href: '/admin/user', icon: UserGroupIcon, current: false },
  { name: '예약 관리', href: '/admin/booking', icon: CalendarDaysIcon, current: false },
  { name: '매출 분석', href: '/admin/revenue', icon: CurrencyDollarIcon, current: false },
  { name: '운동 통계', href: '/admin/analytics', icon: ChartBarIcon, current: false },
  { name: '피드백', href: '/admin/feedback', icon: HeartIcon, count: '23', current: false },
]

const quickActions = [
  { id: 1, name: 'GX 프로그램', href: '/admin/gx', initial: 'G', current: false },
  { id: 2, name: '회원 등록', href: '/admin/user/new', initial: 'U', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminSidebar() {
  const pathname = usePathname()

  // 현재 경로에 따라 active 상태 설정
  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: pathname === item.href
  }))

  const updatedQuickActions = quickActions.map(item => ({
    ...item,
    current: pathname === item.href
  }))

  return (
    <div className="relative flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 dark:border-white/10 dark:bg-gray-900">
      {/* 로고 영역 */}
      <div className="relative flex h-16 shrink-0 items-center">
        <Link href="/admin" className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">💪</span>
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              FitGym Admin
            </span>
          </div>
        </Link>
      </div>

      {/* 네비게이션 */}
      <nav className="relative flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {/* 메인 메뉴 */}
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {updatedNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition-colors',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white',
                        'size-6 shrink-0',
                      )}
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        aria-hidden="true"
                        className="ml-auto w-auto min-w-max whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-center text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* 빠른 액션 */}
          <li>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              빠른 관리
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {updatedQuickActions.map((action) => (
                <li key={action.name}>
                  <Link
                    href={action.href}
                    className={classNames(
                      action.current
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold transition-colors',
                    )}
                  >
                    <span
                      className={classNames(
                        action.current
                          ? 'border-primary-200 bg-primary-50 text-primary-600 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-400'
                          : 'border-gray-200 bg-white text-gray-400 group-hover:border-primary-200 group-hover:bg-primary-50 group-hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:group-hover:border-primary-500/30 dark:group-hover:bg-primary-500/10 dark:group-hover:text-primary-400',
                        'flex size-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium',
                      )}
                    >
                      {action.initial}
                    </span>
                    <span className="truncate">{action.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* 설정 및 프로필 */}
          <li className="-mx-6 mt-auto">
            <Link
              href="/admin/settings"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5 transition-colors"
            >
              <div className="size-8 rounded-full bg-primary-600 flex items-center justify-center">
                <Cog6ToothIcon className="size-5 text-white" />
              </div>
              <span className="sr-only">관리자 설정</span>
              <span aria-hidden="true">관리자 설정</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

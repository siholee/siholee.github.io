'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  CalendarDaysIcon, 
  ChatBubbleLeftEllipsisIcon, 
  Cog6ToothIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  ChatBubbleLeftEllipsisIcon as ChatBubbleLeftEllipsisIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  UserGroupIcon as UserGroupIconSolid
} from '@heroicons/react/24/solid'

const tabs = [
  {
    name: 'GX',
    href: '/app/GX',
    icon: UserGroupIcon,
    iconSolid: UserGroupIconSolid,
  },
  {
    name: '캘린더',
    href: '/app/calendar',
    icon: CalendarDaysIcon,
    iconSolid: CalendarDaysIconSolid,
  },
  {
    name: '홈',
    href: '/app',
    icon: HomeIcon,
    iconSolid: HomeIconSolid,
  },
  {
    name: '문의',
    href: '/app/contact',
    icon: ChatBubbleLeftEllipsisIcon,
    iconSolid: ChatBubbleLeftEllipsisIconSolid,
  },
  {
    name: '설정',
    href: '/app/settings',
    icon: Cog6ToothIcon,
    iconSolid: Cog6ToothIconSolid,
  },
]

export default function BottomTabBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          const Icon = isActive ? tab.iconSolid : tab.icon
          
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex flex-col items-center py-2 px-1 text-xs font-medium transition-colors ${
                isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400'
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{tab.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

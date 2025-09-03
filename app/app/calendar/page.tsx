'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

// 헬스장 GX 예약 일정
const gxSchedules = [
  {
    id: 1,
    name: 'HIIT Training',
    instructor: '김현우 트레이너',
    start: '07:00',
    startDatetime: '2025-08-28T07:00',
    end: '08:00',
    endDatetime: '2025-08-28T08:00',
    type: 'HIIT',
    color: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Yoga Flow',
    instructor: '박지연 요가마스터',
    start: '18:30',
    startDatetime: '2025-08-28T18:30',
    end: '19:30',
    endDatetime: '2025-08-28T19:30',
    type: 'Yoga',
    color: 'bg-green-500',
  },
  {
    id: 3,
    name: 'CrossFit Training',
    instructor: '이준호 코치',
    start: '19:00',
    startDatetime: '2025-08-28T19:00',
    end: '20:00',
    endDatetime: '2025-08-28T20:00',
    type: 'CrossFit',
    color: 'bg-orange-500',
  },
  {
    id: 4,
    name: 'Pilates',
    instructor: '최은정 필라테스 마스터',
    start: '10:00',
    startDatetime: '2025-08-29T10:00',
    end: '11:00',
    endDatetime: '2025-08-29T11:00',
    type: 'Pilates',
    color: 'bg-purple-500',
  },
  {
    id: 5,
    name: 'Spinning',
    instructor: '정민수 사이클 코치',
    start: '06:30',
    startDatetime: '2025-08-30T06:30',
    end: '07:30',
    endDatetime: '2025-08-30T07:30',
    type: 'Cycling',
    color: 'bg-blue-500',
  },
]

// 2025년 8월 달력 데이터
const generateCalendarDays = () => {
  const today = new Date(2025, 7, 28) // 2025년 8월 28일
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  
  // 이번 달 첫날과 마지막날
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  
  // 달력에 표시할 첫 번째 날 (이전 달 포함)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  // 달력에 표시할 마지막 날 (다음 달 포함)
  const endDate = new Date(lastDay)
  endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()))
  
  const days = []
  const current = new Date(startDate)
  
  while (current <= endDate) {
    const isCurrentMonth = current.getMonth() === currentMonth
    const isToday = current.toDateString() === today.toDateString()
    const dateString = current.toISOString().split('T')[0]
    const hasEvents = gxSchedules.some(schedule => 
      schedule.startDatetime.split('T')[0] === dateString
    )
    
    days.push({
      date: dateString,
      isCurrentMonth,
      isToday,
      hasEvents,
    })
    
    current.setDate(current.getDate() + 1)
  }
  
  return days
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 28)) // 2025년 8월
  const [selectedDate, setSelectedDate] = useState('2025-08-28')
  
  const days = generateCalendarDays()
  const selectedSchedules = gxSchedules.filter(schedule => 
    schedule.startDatetime.split('T')[0] === selectedDate
  )
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const formatSelectedDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    })
  }

  const handleCancelReservation = (scheduleId: number) => {
    alert(`예약이 취소되었습니다.`)
  }

  const handleViewDetails = (scheduleId: number) => {
    const schedule = gxSchedules.find(s => s.id === scheduleId)
    alert(`${schedule?.name} 상세 정보를 확인합니다.`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">운동 캘린더</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            예약된 GX 프로그램 일정을 확인하세요
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
          {/* 캘린더 헤더 */}
          <div className="flex items-center mb-4">
            <h3 className="flex-auto text-lg font-semibold text-gray-900 dark:text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              type="button"
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </button>
          </div>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 text-center text-xs/6 text-gray-500 dark:text-gray-400 mb-2">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>

          {/* 캘린더 그리드 */}
          <div className="grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.date}
                data-first-line={dayIdx <= 6 ? '' : undefined}
                className="py-2 [&:not([data-first-line])]:border-t [&:not([data-first-line])]:border-gray-200 dark:[&:not([data-first-line])]:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setSelectedDate(day.date)}
                  data-is-today={day.isToday ? '' : undefined}
                  data-is-selected={day.date === selectedDate ? '' : undefined}
                  data-is-current-month={day.isCurrentMonth ? '' : undefined}
                  className="mx-auto flex size-8 items-center justify-center rounded-full relative data-[is-selected]:data-[is-today]:bg-indigo-600 data-[is-selected]:font-semibold data-[is-today]:font-semibold data-[is-selected]:text-white dark:data-[is-selected]:data-[is-today]:bg-indigo-500 [&:not([data-is-selected])]:hover:bg-gray-200 [&:not([data-is-selected])]:data-[is-today]:text-indigo-600 dark:[&:not([data-is-selected])]:hover:bg-white/10 dark:[&:not([data-is-selected])]:data-[is-today]:text-indigo-400 data-[is-selected]:[&:not([data-is-today])]:bg-indigo-600 dark:data-[is-selected]:[&:not([data-is-today])]:bg-indigo-500 dark:data-[is-selected]:[&:not([data-is-today])]:text-white [&:not([data-is-selected])]:[&:not([data-is-today])]:data-[is-current-month]:text-gray-900 dark:[&:not([data-is-selected])]:[&:not([data-is-today])]:data-[is-current-month]:text-white [&:not([data-is-selected])]:[&:not([data-is-today])]:[&:not([data-is-current-month])]:text-gray-400 dark:[&:not([data-is-selected])]:[&:not([data-is-today])]:[&:not([data-is-current-month])]:text-gray-500"
                >
                  <time dateTime={day.date}>{day.date.split('-').pop()?.replace(/^0/, '')}</time>
                  {day.hasEvents && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 선택된 날짜의 일정 */}
        <section>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
            {formatSelectedDate(selectedDate)} 일정
          </h3>
          
          {selectedSchedules.length > 0 ? (
            <div className="space-y-3">
              {selectedSchedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="group flex items-center gap-x-4 rounded-lg bg-white dark:bg-gray-800 px-4 py-3 shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-3 h-12 ${schedule.color} rounded-full`}></div>
                  <div className="flex-auto">
                    <p className="font-medium text-gray-900 dark:text-white">{schedule.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{schedule.instructor}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {schedule.start} - {schedule.end}
                    </p>
                  </div>
                  <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                    <MenuButton className="relative flex items-center rounded-full text-gray-500 outline-offset-[6px] hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
                      <span className="absolute -inset-2" />
                      <span className="sr-only">Open options</span>
                      <EllipsisVerticalIcon aria-hidden="true" className="size-6" />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <button
                            onClick={() => handleViewDetails(schedule.id)}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none dark:text-gray-300 dark:data-[focus]:bg-white/5 dark:data-[focus]:text-white w-full text-left"
                          >
                            상세보기
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button
                            onClick={() => handleCancelReservation(schedule.id)}
                            className="block px-4 py-2 text-sm text-red-600 data-[focus]:bg-gray-100 data-[focus]:text-red-700 data-[focus]:outline-none dark:text-red-400 dark:data-[focus]:bg-white/5 dark:data-[focus]:text-red-300 w-full text-left"
                          >
                            예약 취소
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">📅</div>
              <p className="text-gray-500 dark:text-gray-400">이 날에는 예약된 운동이 없습니다.</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                다른 날짜를 선택해보세요
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

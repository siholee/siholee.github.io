'use client'

import { CalendarIcon, ClockIcon, UserGroupIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const gxEvents = [
  {
    id: 1,
    name: 'High-Intensity Interval Training',
    instructor: '김현우 트레이너',
    category: 'HIIT',
    schedule: '월, 수, 금 07:00 - 08:00',
    duration: '60분',
    capacity: 20,
    currentBookings: 15,
    difficulty: 'Advanced',
    description: '고강도 인터벌 운동으로 체력 향상과 지방 연소에 효과적입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Yoga Flow',
    instructor: '박지연 요가마스터',
    category: 'Yoga',
    schedule: '화, 목 18:30 - 19:30',
    duration: '60분',
    capacity: 25,
    currentBookings: 22,
    difficulty: 'Beginner',
    description: '몸과 마음의 균형을 찾는 힐링 요가 클래스입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'CrossFit Training',
    instructor: '이준호 코치',
    category: 'CrossFit',
    schedule: '월~금 19:00 - 20:00',
    duration: '60분',
    capacity: 15,
    currentBookings: 12,
    difficulty: 'Advanced',
    description: '기능적 움직임을 통한 전신 근력 강화 프로그램입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Pilates',
    instructor: '최은정 필라테스 마스터',
    category: 'Pilates',
    schedule: '월, 수, 금 10:00 - 11:00',
    duration: '60분',
    capacity: 18,
    currentBookings: 16,
    difficulty: 'Intermediate',
    description: '코어 강화와 자세 교정에 효과적인 필라테스 클래스입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Spinning',
    instructor: '정민수 사이클 코치',
    category: 'Cycling',
    schedule: '화, 목, 토 06:30 - 07:30',
    duration: '60분',
    capacity: 30,
    currentBookings: 28,
    difficulty: 'Intermediate',
    description: '음악과 함께하는 고강도 실내 사이클링 운동입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Zumba',
    instructor: '송미래 댄스 강사',
    category: 'Dance',
    schedule: '화, 목 20:00 - 21:00',
    duration: '60분',
    capacity: 35,
    currentBookings: 30,
    difficulty: 'Beginner',
    description: '라틴 음악과 함께하는 재미있는 댄스 피트니스입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
]

const difficultyColors = {
  'Beginner': 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/10',
  'Intermediate': 'bg-yellow-50 text-yellow-700 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-500 dark:ring-yellow-500/10',
  'Advanced': 'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-500/10 dark:text-red-500 dark:ring-red-500/10',
}

export default function GXPage() {
  const [selectedEvent, setSelectedEvent] = useState<typeof gxEvents[0] | null>(null)

  const handleBooking = (eventId: number) => {
    alert(`${gxEvents.find(e => e.id === eventId)?.name} 예약이 완료되었습니다!`)
  }

  const handleInquiry = (eventId: number) => {
    alert(`${gxEvents.find(e => e.id === eventId)?.name}에 대한 문의가 전송되었습니다!`)
  }

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Group Exercise</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            다양한 그룹 운동 프로그램을 확인하고 예약하세요
          </p>
        </div>

        <div className="space-y-4">
          {gxEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {event.name}
                    </h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${difficultyColors[event.difficulty as keyof typeof difficultyColors]}`}>
                      {event.difficulty}
                    </span>
                  </div>
                </div>
                
                <img
                  alt={event.name}
                  src={event.imageUrl}
                  className="h-32 w-full rounded-md object-cover mb-3"
                />
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    강사: {event.instructor}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-3 w-3" />
                    <span>{event.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-3 w-3" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-3 w-3" />
                    <span>
                      {event.currentBookings}/{event.capacity} 명 
                      <span className={`ml-1 ${event.currentBookings >= event.capacity ? 'text-red-500' : 'text-green-500'}`}>
                        {event.currentBookings >= event.capacity ? '(대기중)' : '(예약가능)'}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBooking(event.id)}
                    disabled={event.currentBookings >= event.capacity}
                    className={`flex-1 flex items-center justify-center gap-x-2 py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                      event.currentBookings >= event.capacity
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {event.currentBookings >= event.capacity ? '대기 예약' : '예약하기'}
                  </button>
                  <button
                    onClick={() => handleInquiry(event.id)}
                    className="flex-1 flex items-center justify-center gap-x-2 py-2 px-3 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    문의하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

// 현재 예약된 GX 스케줄 (예시 데이터)
const todaySchedules = [
  {
    id: 1,
    name: 'HIIT Training',
    time: '07:00',
    status: '완료',
    color: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Yoga Flow',
    time: '18:30',
    status: '예정',
    color: 'bg-indigo-500',
  },
  {
    id: 3,
    name: 'CrossFit Training',
    time: '19:00',
    status: '예정',
    color: 'bg-orange-500',
  },
]

export default function Home() {
  const [qrCode, setQrCode] = useState('FG-2025-082801')
  const [isRefreshing, setIsRefreshing] = useState(false)

  // QR/바코드 재발급 함수
  const refreshCode = () => {
    setIsRefreshing(true)
    
    // 새로운 코드 생성 (실제로는 서버에서 받아올 것)
    const newCode = `FG-${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`
    
    setTimeout(() => {
      setQrCode(newCode)
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="px-6 py-8">
        
        {/* QR/바코드 섹션 */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            회원 인증 코드
          </h2>
          
          {/* QR Code 영역 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 dark:border-gray-700">
            {/* QR 코드 플레이스홀더 */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center border-2 border-dashed border-indigo-300 dark:border-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">QR CODE</div>
                </div>
              </div>
            </div>
            
            {/* 바코드 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <div className="flex justify-center items-center space-x-1 mb-2">
                {/* 바코드 스타일 선들 */}
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className={`bg-gray-900 dark:bg-white ${
                      Math.random() > 0.5 ? 'w-1' : 'w-0.5'
                    } ${
                      Math.random() > 0.3 ? 'h-8' : 'h-6'
                    }`}
                  />
                ))}
              </div>
              <div className="text-center text-sm font-mono text-gray-700 dark:text-gray-300">
                {qrCode}
              </div>
            </div>
            
            {/* 재발급 버튼 */}
            <button
              onClick={refreshCode}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              <ArrowPathIcon className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? '재발급 중...' : '코드 재발급'}
            </button>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              출입 시 스캔하거나 코드를 제시해주세요
            </p>
          </div>
        </div>

        {/* 오늘의 운동 일정 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            오늘의 운동 일정
          </h3>
          
          {todaySchedules.length > 0 ? (
            <div className="space-y-3">
              {todaySchedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${schedule.color}`}></div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {schedule.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {schedule.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.status === '완료'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                    }`}
                  >
                    {schedule.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-2">🎯</div>
              <p className="text-gray-500 dark:text-gray-400">
                오늘 예약된 운동이 없습니다
              </p>
            </div>
          )}
        </div>

        {/* 빠른 통계 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              3
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              오늘 운동
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              12
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              이번 주
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

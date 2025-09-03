'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const members = [
  { 
    id: 1,
    name: '김민수', 
    membershipType: '프리미엄', 
    email: 'minsu.kim@example.com', 
    phone: '010-1234-5678',
    joinDate: '2025-01-15',
    status: 'Active',
    gxCount: 12,
    lastVisit: '2025-09-02'
  },
  { 
    id: 2,
    name: '이지은', 
    membershipType: '스탠다드', 
    email: 'jieun.lee@example.com', 
    phone: '010-2345-6789',
    joinDate: '2024-11-20',
    status: 'Active',
    gxCount: 28,
    lastVisit: '2025-09-03'
  },
  { 
    id: 3,
    name: '박준형', 
    membershipType: '베이직', 
    email: 'junhyung.park@example.com', 
    phone: '010-3456-7890',
    joinDate: '2025-03-08',
    status: 'Inactive',
    gxCount: 5,
    lastVisit: '2025-08-25'
  },
  { 
    id: 4,
    name: '최소영', 
    membershipType: '프리미엄', 
    email: 'soyoung.choi@example.com', 
    phone: '010-4567-8901',
    joinDate: '2024-12-03',
    status: 'Active',
    gxCount: 45,
    lastVisit: '2025-09-03'
  },
  { 
    id: 5,
    name: '정우진', 
    membershipType: '스탠다드', 
    email: 'woojin.jung@example.com', 
    phone: '010-5678-9012',
    joinDate: '2025-02-14',
    status: 'Suspended',
    gxCount: 8,
    lastVisit: '2025-08-30'
  },
  { 
    id: 6,
    name: '한예린', 
    membershipType: '프리미엄', 
    email: 'yerin.han@example.com', 
    phone: '010-6789-0123',
    joinDate: '2024-10-22',
    status: 'Active',
    gxCount: 67,
    lastVisit: '2025-09-03'
  },
]

const statusStyles = {
  Active: 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20',
  Inactive: 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20',
  Suspended: 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
}

export default function AdminUserPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || member.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">회원 관리</h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              헬스장 회원들의 정보를 확인하고 관리하세요. 총 {members.length}명의 회원이 등록되어 있습니다.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400"
            >
              신규 회원 등록
            </button>
          </div>
        </div>

        {/* 필터 및 검색 */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="회원명 또는 이메일로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500"
            />
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
            >
              <option value="All">전체 상태</option>
              <option value="Active">활성</option>
              <option value="Inactive">비활성</option>
              <option value="Suspended">정지</option>
            </select>
          </div>
        </div>

        {/* 테이블 */}
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200/60 md:rounded-lg dark:border-gray-700/50">
                <table className="min-w-full divide-y divide-gray-200/60 dark:divide-gray-700/50">
                  <thead className="bg-gray-50/50 dark:bg-gray-800/50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                        회원명
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        연락처
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        GX 참여
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        상태
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                        최근 방문
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">관리</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/60 bg-white/50 dark:divide-gray-700/50 dark:bg-gray-900/50">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
                                <span className="text-sm font-medium text-white">
                                  {member.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {member.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {member.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          <div>{member.phone}</div>
                          <div className="text-xs text-gray-400">가입: {member.joinDate}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {member.gxCount}회
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[member.status as keyof typeof statusStyles]}`}>
                            {member.status === 'Active' ? '활성' : member.status === 'Inactive' ? '비활성' : '정지'}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {member.lastVisit}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4">
                            수정
                          </button>
                          <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:border-white/10 dark:bg-transparent">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">
              이전
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">
              다음
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">1</span>에서 <span className="font-medium">6</span>까지 표시 중{' '}
                (총 <span className="font-medium">{members.length}</span>명)
              </p>
            </div>
            <div>
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-sm dark:shadow-none"
              >
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-white/5">
                  <span className="sr-only">이전</span>
                  <ChevronLeftIcon aria-hidden="true" className="size-5" />
                </button>
                <button
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:focus-visible:outline-indigo-500"
                >
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5">
                  2
                </button>
                <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5">
                  3
                </button>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 dark:text-gray-400 dark:ring-gray-700">
                  ...
                </span>
                <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5">
                  8
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5">
                  9
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-white/5">
                  10
                </button>
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-white/5">
                  <span className="sr-only">다음</span>
                  <ChevronRightIcon aria-hidden="true" className="size-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

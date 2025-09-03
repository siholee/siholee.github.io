'use client'

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">메인 페이지</h1>
      <div className="flex gap-6">
        <Link href="/app" className="px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition">앱으로 이동</Link>
        <Link href="/admin" className="px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition">관리자(Admin)로 이동</Link>
      </div>
    </div>
  );
}
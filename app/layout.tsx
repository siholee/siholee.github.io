import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BottomTabBar from "./components/BottomTabBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitGym - 헬스장 관리 앱",
  description: "헬스장 그룹 운동 관리 및 예약 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900`}
      >
        {/* 모바일 뷰 컨테이너 */}
        <div className="relative min-h-screen mx-auto max-w-sm bg-white dark:bg-gray-800 shadow-xl">
          <Header />
          
          {/* 메인 콘텐츠 영역 (헤더와 탭바 사이) */}
          <main className="pt-20 pb-20 min-h-screen">
            {children}
          </main>
          
          <BottomTabBar />
        </div>
      </body>
    </html>
  );
}

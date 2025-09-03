import Header from "../components/Header";
import BottomTabBar from "../components/BottomTabBar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen mx-auto max-w-sm bg-white dark:bg-gray-800 shadow-xl">
      <Header />
      <main className="pt-20 pb-20 min-h-screen">{children}</main>
      <BottomTabBar />
    </div>
  );
}

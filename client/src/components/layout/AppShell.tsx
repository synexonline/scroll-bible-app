import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export function AppShell() {
  return (
    <div className="min-h-screen bg-scroll-bg">
      <Header />
      <main className="pt-14 pb-16 max-w-2xl mx-auto px-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

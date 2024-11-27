import { Outlet } from 'react-router-dom';

import { GoBack } from '@/components/goback';
import { Footer } from '@/components/footer';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-neutral-900 font-nunito antialiased text-neutral-100">
      <GoBack />
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

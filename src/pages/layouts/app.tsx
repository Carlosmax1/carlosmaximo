import { Outlet } from 'react-router-dom';

import { GoBack } from '@/components/goback';
import { Footer } from '@/components/footer';

export function AppLayout() {
  return (
    <div className="min-h-svh bg-neutral-900 relative font-nunito antialiased text-neutral-100 bg-grid-small-white/[0.1]">
      <GoBack />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto max-w-2xl px-4 py-8 relative">
        <Outlet />
        <Footer className="mt-10" />
      </div>
    </div>
  );
}

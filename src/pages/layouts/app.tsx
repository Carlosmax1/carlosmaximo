import { Outlet } from 'react-router-dom';

import { GoBack } from '@/components/goback';
import { Footer } from '@/components/footer';
import { SparklesCore } from '@/components/ui/sparkles';

export function AppLayout() {
  return (
    <div className="min-h-svh bg-neutral-900 font-nunito antialiased text-neutral-100">
      <GoBack />
      <SparklesCore speed={1} id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={15} className="w-full h-full" particleColor="#FFFFFF" />
      <div className="container mx-auto max-w-2xl px-4 py-8 absolute inset-0">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

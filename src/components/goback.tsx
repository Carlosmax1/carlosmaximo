import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/icon';

export function GoBack() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  return (
    <Link to="/">
      <div className="cursor-pointer flex items-center justify-center gap-2 rounded-lg hover:bg-neutral-800/30 absolute p-2 top-3 left-3 z-10">
        <Icon name="ChevronLeft" size={14} color="#f9f9f9" />
        <span className="text-neutral-300 text-sm font-bold">Voltar</span>
      </div>
    </Link>
  );
}

import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { Icon } from './icon';

type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer {...rest} className={cn('flex items-center gap-4 border-t border-neutral-400 pt-4', className)}>
      <span className="text-xs font-medium text-neutral-400">Siga-me</span>
      <Link to="#">
        <Icon name="Github" size={14} color="#a3a3a3" />
      </Link>
      <Link to="#">
        <Icon name="Linkedin" size={14} color="#a3a3a3" />
      </Link>
      <Link to="#">
        <Icon name="Instagram" size={14} color="#a3a3a3" />
      </Link>
      <Link to="#">
        <Icon name="Mail" size={14} color="#a3a3a3" />
      </Link>
    </footer>
  );
}

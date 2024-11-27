import { useEffect, useState } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';

import { Icon } from '@/components/icon';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

function useAccordionAnimate(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  const staggerItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate('#accordion-icon', isOpen ? { rotate: -90 } : { rotate: 0 }, { duration: 0.3, ease: [0.25, 0.8, 0.5, 1] });
    animate('li', isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.3, filter: 'blur(20px)' }, {
      duration: 0.2,
      delay: isOpen ? staggerItems : 0,
    });
  }, [isOpen, animate, staggerItems]);

  return scope;
}

export type Roles = {
  startAt: number;
  endAt: number;
  title: string;
  description: string;
  enterprise: string;
  enterpriseUrl?: string;
  local: 'Remoto' | 'Presencial';
  techs: string[];
};

export type AccordionProps = {
  roles: Roles[];
};

export function Accordion({ roles }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useAccordionAnimate(isOpen);

  return (
    <div className="mt-6" ref={scope}>
      <motion.button whileTap={{ scale: 0.97 }} className="flex items-center gap-2" onClick={() => setIsOpen((prevState) => !prevState)}>
        <Icon name="ChevronLeft" size={14} color="#a3a3a3" id="accordion-icon" />
        <span className="text-xs font-medium text-neutral-400">Cargos anteriores</span>
      </motion.button>
      <ul className={cn('p-4 space-y-3', isOpen ? 'pointer-events-auto' : 'pointer-events-auto')}>
        {roles.map((role, index) => (
          <li key={index}>
            <div className="flex justify-between items-start mb-1">
              <div className="mb-2">
                <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-transparent">{role.title}</h3>
                <p className="text-xs font-light uppercase tracking-wider text-black-400">
                  {role.startAt} - {role.endAt}
                </p>
                <p className="text-xs font-light mt-2 text-neutral-400">{role.description}</p>
              </div>
              <div>
                <Link target="_blank" className="flex items-center gap-1 mb-1" to={role.enterpriseUrl ?? '#'}>
                  <span className="font-semibold text-xs text-neutral-300">{role.enterprise}</span>
                </Link>
                <div className="flex items-center gap-1 ml-1">
                  <Icon name="MapPin" size={10} color="#a3a3a3" />
                  <span className="text-[0.6rem] font-thin">{role.local}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

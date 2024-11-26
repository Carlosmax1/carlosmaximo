import { icons } from 'lucide-react';

const Icon = ({ name, color, size, id }: { name: keyof typeof icons; color: string; size: number; id?: string }) => {
  const LucideIcon = icons[name];

  return <LucideIcon id={id} color={color} size={size} />;
};

export { Icon };

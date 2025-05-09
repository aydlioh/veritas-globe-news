'use client';

import {
  Bold,
  Heading1,
  Italic,
  Link,
  Eye,
  EyeOff,
  ListOrdered,
  List,
} from 'lucide-react';

const icons = {
  Bold: Bold,
  Header: Heading1,
  Italic: Italic,
  Link: Link,
  Eye: Eye,
  EyeOff: EyeOff,
  OrderList: ListOrdered,
  UnorderedList: List,
};

const iconTooltips = {
  Bold: 'Жирный',
  Header: 'Заголовок',
  Italic: 'Курсив',
  Link: 'Ссылка',
  Eye: 'Показать/скрыть предпросмотр',
  EyeOff: 'Показать/скрыть предпросмотр',
  OrderList: 'Нумерованный список',
  UnorderedList: 'Маркированный список',
};

interface IconButtonProps {
  iconName: keyof typeof icons;
  onClick: () => void;
  isActive?: boolean;
}

export const MarkdownActionBtn = ({
  iconName,
  onClick,
  isActive,
}: IconButtonProps) => {
  const resolvedIconName =
    iconName === 'Eye' ? (!isActive ? 'EyeOff' : 'Eye') : iconName;

  const IconComponent = icons[resolvedIconName] || Bold;

  return (
    <div className="relative">
      <button
        className={`cursor-pointer animation group relative h-6 w-6 rounded-[4px] p-[4px] ${
          isActive ? 'bg-graphite/8' : 'hover:bg-graphite/4'
        }`}
        onClick={onClick}
        aria-label={iconTooltips[resolvedIconName] || 'Не найдено'}
      >
        <IconComponent className="h-4 w-4" />
        <p className="absolute bottom-[35px] left-1/2 z-50 hidden w-auto -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-graphite p-2 text-[14px] leading-[20px] text-white group-hover:block">
          {iconTooltips[resolvedIconName] || 'Не найдено'}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-graphite"></span>
        </p>
      </button>
    </div>
  );
};

import { useDraggable } from '@dnd-kit/core';

import Finances from '@/svg/finances.svg';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CSSProperties } from 'react';

const variants: {
  [key: string]: CSSProperties;
} = {
  small: {
    aspectRatio: 1 / 1,
    width: '1fr',
  },
  big: {
    aspectRatio: 1 / 1,
    gridRow: 'span 2',
    gridColumn: 'span 2',
  },
  doubleWide: {
    aspectRatio: 2 / 1,
    gridColumn: 'span 2',
  },
  doubleTall: {
    aspectRatio: 1 / 2,
    gridRow: 'span 2',
  },
  tripleWide: {
    aspectRatio: 3 / 1,
    gridColumn: 'span 3',
  },
};

const BaseWidget = (props: any) => {
  const { className, size, children, id, imageSrc, bgColor } = props;
  const { listeners, attributes, transform, isDragging, setNodeRef } =
    useDraggable({
      id,
    });

  return (
    <div
      ref={setNodeRef}
      className={`p-2 ${!isDragging ? 'transition-transform' : ''} ${
        className ?? ''
      }`}
      style={{
        transform: CSS.Translate.toString(transform),
        ...variants[size],
      }}
      {...attributes}
      {...listeners}
    >
      <div
        className="rounded-3xl w-full h-full"
        style={{
          backgroundColor: bgColor,
          border: '3px solid var(--color-primary)',
        }}
      >
        <Finances />
        {children}
      </div>
    </div>
  );
};

export default BaseWidget;

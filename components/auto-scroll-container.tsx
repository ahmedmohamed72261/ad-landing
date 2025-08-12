'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface AutoScrollContainerProps {
  children: React.ReactNode;
  interval?: number; // in ms, default 3000
  className?: string;
  itemClassName?: string; // Class to apply to each direct child for width calculation
}

export function AutoScrollContainer({ children, interval = 3000, className, itemClassName }: AutoScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const scrollToItem = useCallback((index: number) => {
    if (containerRef.current) {
      const item = containerRef.current.children[index] as HTMLElement;
      if (item) {
        containerRef.current.scrollTo({
          left: item.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  useEffect(() => {
    if (childrenArray.length === 0) return;

    let scrollInterval: NodeJS.Timeout;

    if (!isHovered) {
      scrollInterval = setInterval(() => {
        setCurrentItemIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % childrenArray.length;
          scrollToItem(nextIndex);
          return nextIndex;
        });
      }, interval);
    }

    return () => clearInterval(scrollInterval);
  }, [interval, isHovered, childrenArray.length, scrollToItem]);

  // Reset currentItemIndex if children change (e.g., filtering)
  useEffect(() => {
    setCurrentItemIndex(0);
    scrollToItem(0);
  }, [childrenArray.length, scrollToItem]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-nowrap overflow-x-auto scrollbar-hide ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
}

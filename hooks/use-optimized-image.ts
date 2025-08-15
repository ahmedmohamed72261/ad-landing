'use client';

import { useState, useEffect } from 'react';

interface OptimizedImageOptions {
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  sizes?: string;
}

/**
 * Custom hook for optimizing images without changing existing code
 * This hook provides optimized image props that can be spread into Next.js Image components
 */
export function useOptimizedImage(src: string, options: OptimizedImageOptions = {}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurDataURL, setBlurDataURL] = useState('');

  // Default options
  const {
    quality = 90,
    priority = false,
    placeholder = 'empty',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  } = options;

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    
    // Generate blur placeholder if needed
    if (placeholder === 'blur' && !blurDataURL) {
      // Simple base64 blur placeholder (could be improved with actual image data)
      setBlurDataURL(
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2NjY2NjYyIvPjwvc3ZnPg=='
      );
    }
  }, [src, placeholder, blurDataURL]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Return optimized image props
  return {
    src,
    quality,
    priority,
    sizes,
    loading: priority ? undefined : 'lazy',
    blurDataURL: placeholder === 'blur' ? blurDataURL : undefined,
    placeholder: placeholder === 'blur' ? 'blur' : undefined,
    onLoad: handleLoad,
    isLoaded,
  };
}
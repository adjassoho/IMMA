import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface VerticalCarouselProps {
  items: React.ReactNode[];
  visibleCount?: number;
  className?: string;
}

const HorizontalCarousel: React.FC<VerticalCarouselProps> = ({
  items,
  visibleCount = 3,
  className = '',
}) => {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, items.length - visibleCount);

  const handlePrev = () => setCurrent((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrent((prev) => Math.min(maxIndex, prev + 1));

  // Pour la molette horizontale
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 0) handleNext();
    else if (e.deltaX < 0) handlePrev();
  };

  return (
    <div
      className={`relative w-full flex flex-col items-center ${className}`}
      onWheel={handleWheel}
    >
      <div className="flex items-center w-full max-w-3xl justify-center">
        {/* Flèche gauche */}
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="mr-2 p-2 rounded-full bg-white shadow transition hover:bg-primary/10 disabled:opacity-30 z-10"
          aria-label="Précédent"
        >
          <FaChevronLeft className="text-primary text-xl" />
        </button>
        {/* Carousel */}
        <div className="relative w-full flex flex-row items-center overflow-hidden" style={{ minHeight: 420, minWidth: 320 }}>
          <AnimatePresence initial={false}>
            {items.slice(current, current + visibleCount).map((item, idx) => {
              // Mise en avant de la carte centrale
              const isCenter = idx === Math.floor(visibleCount / 2);
              return (
                <motion.div
                  key={current + idx}
                  initial={{ opacity: 0, x: 60, scale: 0.96, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, scale: isCenter ? 1.04 : 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -60, scale: 0.96, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6 }}
                  className={`w-full max-w-xs mx-[-24px] last:mr-0 first:ml-0 z-[$
                    {isCenter ? 20 : 10}
                  ] transition-all duration-500 ${
                    isCenter
                      ? 'shadow-2xl scale-105 border-2 border-primary/20'
                      : 'shadow-lg opacity-80'
                  } bg-white rounded-3xl p-8 flex flex-col items-center`}
                  style={{
                    position: 'relative',
                    left: idx * 0,
                    marginLeft: idx > 0 ? -24 : 0,
                    marginRight: idx < visibleCount - 1 ? -24 : 0,
                    zIndex: isCenter ? 20 : 10,
                  }}
                >
                  {item}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {/* Flèche droite */}
        <button
          onClick={handleNext}
          disabled={current === maxIndex}
          className="ml-2 p-2 rounded-full bg-white shadow transition hover:bg-primary/10 disabled:opacity-30 z-10"
          aria-label="Suivant"
        >
          <FaChevronRight className="text-primary text-xl" />
        </button>
      </div>
      {/* Pagination */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === current ? 'bg-primary' : 'bg-primary/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel; 
import React, { useRef } from 'react';

const SwiperSlide = ({ tag: Tag = 'div', children, swiper, zoom, virtualIndex, ...rest } = {}) => {
  const slideElRef = useRef(null);

  const renderChildren = () => {
    return typeof children === 'function' ? children() : children;
  };

  return (
    <Tag ref={slideElRef} data-swiper-slide-index={virtualIndex} {...rest}>
      {zoom ? (
        <div
          className="swiper-zoom-container"
          data-swiper-zoom={typeof zoom === 'number' ? zoom : undefined}
        >
          {renderChildren()}
        </div>
      ) : (
        renderChildren()
      )}
    </Tag>
  );
};

SwiperSlide.displayName = 'SwiperSlide';

export { SwiperSlide };

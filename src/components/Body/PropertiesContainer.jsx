import React, { useState, useRef, useEffect } from 'react';
import "./Body.css";
import { property } from './DataArray';

const PropertiesContainer = () => {
    const propLocs = property;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const clientWidth = container.clientWidth;
    const scrollOffset = container.scrollLeft;

    if (direction === 'left') {
      container.scrollLeft = scrollOffset - clientWidth;
    } else {
      container.scrollLeft = scrollOffset + clientWidth;
    }
  };

  // Function to update the active index based on scroll position
  const updateActiveIndex = () => {
    const container = containerRef.current;
    const scrollOffset = container.scrollLeft;
    const clientWidth = container.clientWidth;

    // Calculate the index based on scroll position
    const newIndex = Math.round(scrollOffset / clientWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setActiveIndex(0); // Reset active index on window resize
    };

    window.addEventListener('resize', handleResize);

    // Listen to scroll events to update the activeIndex
    const container = containerRef.current;
    container.addEventListener('scroll', updateActiveIndex);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('scroll', updateActiveIndex);
    };
  }, []);

  return (
    <div className="properties-label-content">
      <div className="label-header-image">
        {/* Display the image for the current active property */}
        <img src='' alt="Property" />
      </div>
      <div className="label-container" ref={containerRef}>
        {propLocs.map((propLoc, index) => (
          <div className="container-prop-type" key={index}>
            {propLoc.type}
            {index === activeIndex && (
              <>
                <div className="container-prop-rate">
                  {propLoc.price} <span>{propLoc.divider}</span> {propLoc.prop_area}
                </div>
                <div className="container-prop-local">{propLoc.location}</div>
                <div className="container-prop-state">{propLoc.status}</div>
              </>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => handleScroll('left')}>Left</button>
      <button onClick={() => handleScroll('right')}>Right</button>
    </div>
  );
};

export default PropertiesContainer;

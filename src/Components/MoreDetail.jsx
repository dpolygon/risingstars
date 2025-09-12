import React, { useState, useRef, useEffect } from 'react'
import './MoreDetail.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function MoreDetail({ title, insideText }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const toggleOpen = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    if (isOpen) {
      // Expand
      content.style.display = 'block';
      const height = content.scrollHeight;
      wrapper.style.maxHeight = '0px'; // reset to 0
      requestAnimationFrame(() => {
        wrapper.style.maxHeight = height + 'px'; // animate to full height
      });
    } else {
      // Collapse
      const height = content.scrollHeight; // current height
      wrapper.style.maxHeight = height + 'px'; // set start height
      requestAnimationFrame(() => {
        wrapper.style.maxHeight = '0px'; // animate down
      });

      const handleTransitionEnd = () => {
        content.style.display = 'none';
        wrapper.removeEventListener('transitionend', handleTransitionEnd);
      };
      wrapper.addEventListener('transitionend', handleTransitionEnd);
    }
  }, [isOpen, insideText]);

  if (!title) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', borderRadius: '32px', background: '#e5e5ea', overflow: 'hidden', cursor: 'pointer' }}>
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={toggleOpen}>
        <h3>{title}</h3>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      <div ref={wrapperRef} style={{ maxHeight: '0px', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
        <p ref={contentRef} className="more-detail-info" style={{ display: 'block', padding: '0 2rem 2rem 2rem' }}>
          {insideText}
        </p>
      </div>
    </div>
  );
}

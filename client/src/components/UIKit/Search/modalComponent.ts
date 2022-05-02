import { useEffect, useRef, useState } from 'react';

export default function ModalComponent(initialValue) {
  const [clickedOutside, setClickedOutside] = useState(initialValue);
  const myRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
    }
  };

  const handleClickInside = () => setClickedOutside(true);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return {
    clickedOutside, myRef, handleClickInside,
  };
}

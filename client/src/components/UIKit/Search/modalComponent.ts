import { useEffect, useRef, useState } from "react";

export default function ModalComponent() {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef(null);
  const [clickItem, setClickItem] = useState(false);

  const handleClickInside = () => {
    if (!clickItem) setClickedOutside(true);
  };

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return {
    clickedOutside,
    myRef,
    handleClickInside,
    setClickedOutside,
    setClickItem,
    clickItem,
  };
}

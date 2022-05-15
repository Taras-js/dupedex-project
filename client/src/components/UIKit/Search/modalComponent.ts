import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setSearchBarBlurred } from "../../ToolbarContainer/toolbarSlice";

export default function ModalComponent() {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef(null);
  const [clickItem, setClickItem] = useState(false);

  const dispatch = useAppDispatch();

  const handleClickInside = () => {
    setClickedOutside(true);
  };

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
    }
  };

  const handleFocus = (e: any) => {
    if (myRef.current === e.target) dispatch(setSearchBarBlurred());
    setClickedOutside(true);
    handleClickInside();
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
    handleFocus,
  };
}

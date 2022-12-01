import { useRef, useEffect } from "react";

export function useScroll(width) {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        if(width<768){
          el.scrollTo({
            left: el.scrollLeft + e.deltaY*3,
            behavior: "smooth"
          });
        }
        else{
          el.scrollTo({
            top: el.scrollTop + e.deltaY*4,
            behavior: "smooth"
          })
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, [width]);
  return elRef;
}
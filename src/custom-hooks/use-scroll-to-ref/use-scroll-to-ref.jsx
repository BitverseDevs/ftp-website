import { useRef, useEffect } from "react";

export const useScrollToRef = (offsetY) => {
  const ref = useRef(null);

  const scrollToRef = () => {
    const finalOffsetY = offsetY || 0;
    window.scrollTo({
        top: ref.current.offsetTop + finalOffsetY,
        behavior: "smooth",
      });
    // if(ref.current){
    //     const top = ref.current.offsetTop + offset;
    //     window.scrollTo({top, behavior: 'smooth'});
    // }
    // ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (offsetY && ref.current) {
        setTimeout(()=>{
            scrollToRef();
        }, 100)
        // scrollToRef();
    }
  }, [offsetY, ref.current]);

  return [ref, scrollToRef];
};

export default useScrollToRef;
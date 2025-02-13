import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["JungIm.",
        "CSS Magician.",
        "Future Builder.",
        "Code Dreamer.",
        "Lifelong Learner.",
        "Full Stack Developer.",
        "Chinese Language Master."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={textRef} />;
};

export default TypingEffect;
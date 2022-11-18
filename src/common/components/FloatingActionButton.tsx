import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
  text: string;
  className?: string;
  onFABClicked?: Function;
  btnType?: string;
};

function FloatingActionButton({
  text,
  className,
  onFABClicked,
  btnType,
}: Props) {
  return (
    <button
      onClick={() => onFABClicked && onFABClicked()}
      //@ts-ignore
      type={btnType || "button"}
      className={`btn-primary shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all  inset-x-0 fixed bottom-24 z-10 max-w-xs sm:max-w-sm  mx-auto ${className}`}
    >
      {text}
    </button>
    // <motion.button
    //   initial={{ y: '100vh' }}
    //   animate={{ y: 0 }}
    //   className={`btn-accent drop-shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all ${className}`}>
    //   Add a new goal
    // </motion.button>
  );
}

export default FloatingActionButton;

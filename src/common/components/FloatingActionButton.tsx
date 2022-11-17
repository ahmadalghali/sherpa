import React from "react";

type Props = {
  text: string;
  className?: string;
};

function FloatingActionButton({ text, className }: Props) {
  return (
    <button
      className={`btn-primary drop-shadow-2xl hover:scale-110 hover:-translate-y-1 duration-200 transition-all  inset-x-0 fixed bottom-24 z-20 max-w-xs sm:max-w-sm  mx-auto ${className}`}
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

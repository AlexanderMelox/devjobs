import React, { useEffect } from 'react';

type Parameters = {
  ref: React.RefObject<HTMLElement>;
  condition?: boolean;
};

const useClickOutside = (
  { ref, condition }: Parameters,
  callback: Function
) => {
  const handleClick = (e: MouseEvent): void => {
    if (
      ref.current &&
      !ref.current.contains(e.target as HTMLElement) &&
      condition
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;

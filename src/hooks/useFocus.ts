import { useRef, useEffect } from 'react';

function useFocus() {
  const focusRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(focusRef);
    focusRef.current?.focus();
  });
  return focusRef;
}

export default useFocus;

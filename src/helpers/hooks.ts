"use client"

import { useEffect, useState } from "react";

export function useOutsideAlerter(ref: any, onClickOutside: () => void) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }
  
  export const useDebounce = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler: NodeJS.Timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // Cancel the timeout if value changes (also on delay change or unmount)
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };
import {useEffect, useState} from "react";

export default function useLocalStorage(initialValue, storageName) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(storageName)) ?? initialValue;
  });
  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(state));
  }, [initialValue, state]);
  return [state, setState];
}

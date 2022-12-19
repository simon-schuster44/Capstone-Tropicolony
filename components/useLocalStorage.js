//import {useEffect, useState} from "react";

// export default function useLocalStorage(initialValue, storageName) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(localStorage.getItem(storageName)) ?? initialValue;
//   });
//   useEffect(() => {
//     localStorage.setItem(storageName, JSON.stringify(state));
//   }, [initialValue, state]);
//   return [state, setState];
// }

import {useCallback, useEffect, useState} from "react";

export function useLocalStorage(initialState, storageName) {
  const [state, setState] = useState(initialState);
  const setStateAndLocalStorage = useCallback(
    callbackOrValue => {
      setState(previousValue => {
        const nextValue =
          typeof callbackOrValue === "function"
            ? callbackOrValue(previousValue)
            : callbackOrValue;
        window.localStorage.setItem(storageName, JSON.stringify(nextValue));
        return nextValue;
      });
    },
    [key]
  );
  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored !== null) {
      setState(JSON.parse(stored));
    }
  }, [key]);
  return [state, setStateAndLocalStorage];
}

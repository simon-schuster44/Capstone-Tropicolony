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

export default function useLocalStorage(initialState, storageName) {
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
    [initialState]
  );
  useEffect(() => {
    const stored = window.localStorage.getItem(initialState);
    if (stored !== null) {
      setState(JSON.parse(stored));
    }
  }, [initialState]);
  return [state, setStateAndLocalStorage];
}

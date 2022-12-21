import {useCallback, useEffect, useState} from "react";

export default function useLocalStorage(storageName, initialState) {
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
    [storageName]
  );
  useEffect(() => {
    const stored = window.localStorage.getItem(storageName);
    if (stored !== null) {
      setState(JSON.parse(stored));
    }
  }, [storageName]);
  return [state, setStateAndLocalStorage];
}

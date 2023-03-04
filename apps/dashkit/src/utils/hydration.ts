import { useEffect, useState } from "react";

const useDefaultOnHydration = <T>(value: T, onHydrate: T) => {
    const [state, setState] = useState<T>();
    useEffect(() => {
        setState(value);
    }, [value]);
    return state ?? onHydrate;
}

export { useDefaultOnHydration };
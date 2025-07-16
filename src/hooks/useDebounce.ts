import { useRef, useState } from 'react';

export const useDebounce = <T>(delay: number) => {
    const [value, setValue] = useState<T | null>(null);
    const debounceRef = useRef<NodeJS.Timeout>(null);

    const debounce = (callback: (value: T | null) => void) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            callback(value);
        }, delay);
    };

    return {
        debounce,
        value,
        setValue
    };
}
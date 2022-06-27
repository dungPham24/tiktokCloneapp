/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [useDebounce, setUseDebounce] = useState(value);

    useEffect(() => {
        const hanlderTimeout = setTimeout(() => setUseDebounce(value), delay);

        return () => clearTimeout(hanlderTimeout);
    }, [value]);

    return useDebounce;
};

export default useDebounce;

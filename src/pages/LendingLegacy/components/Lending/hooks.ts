import { useEffect, useRef, useState } from 'react';

export default function useVisibility(offset = 0) {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef(null);

    const onScroll = () => {
        const cur = element.current;
        if (cur) {
            const { top } = (cur as any).getBoundingClientRect();
            setIsVisible(
                top + offset >= 0 && top - offset <= window.innerHeight,
            );
        } else setIsVisible(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    });

    return { isVisible, element };
}

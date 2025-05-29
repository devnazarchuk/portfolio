'use client';
import { useEffect, useRef } from 'react';

export function Cursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX: x, clientY: y } = event;
            if (cursorRef.current) {
                cursorRef.current.style.left = x - 192 + 'px';
                cursorRef.current.style.top = y - 192 + 'px';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className='w-96 h-96 bg-fuchsia-400 opacity-20 rounded-full fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'
        >
            CustomCursor
        </div>
    );
}

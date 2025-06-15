'use client';

interface LinkProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export function Link({ children, isActive, onClick }: LinkProps) {
    return (
        <div
            className={`flex items-center gap-2 cursor-pointer group transition-all duration-200 ${isActive ? 'w-36 text-accent' : 'w-24 text-slate-700 hover:text-text-primary'}`}
            onClick={onClick}
        >
            <div className='w-full'>
                <p className={`border-b-2 transition-all duration-300 ${isActive ? 'border-accent' : 'border-transparent group-hover:border-text-primary'}`}></p>
            </div>
            <button className='uppercase font-semibold text-xs tracking-widest w-10'>{children}</button>
        </div>
    );
}

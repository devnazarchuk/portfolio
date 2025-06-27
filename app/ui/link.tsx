'use client';

interface LinkProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export function Link({ children, isActive, onClick }: LinkProps) {
    return (
        <div
            className={`flex items-center gap-2 cursor-pointer group transition-all duration-200 ${isActive ? 'w-36 text-[#723bf3] dark:text-[#a855f7]' : 'w-24 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
            onClick={onClick}
        >
            <div className='w-full'>
                <p className={`border-b-2 transition-all duration-300 ${isActive ? 'border-[#723bf3] dark:border-[#a855f7]' : 'border-transparent group-hover:border-slate-900 dark:group-hover:border-white'}`}></p>
            </div>
            <button className='uppercase font-semibold text-xs tracking-widest w-10'>{children}</button>
        </div>
    );
}

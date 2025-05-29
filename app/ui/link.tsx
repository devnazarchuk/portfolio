interface LinkProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const blockBaseClasses =
    'flex items-center gap-2 cursor-pointer hover:w-36 hover:text-slate-100 transition-all duration-200 group';
const borderBaseClasses = 'border group-hover:border-slate-100';
const buttonBaseClasses = 'uppercase font-semibold text-xs tracking-widest w-10';

export function Link({ children, isActive, onClick }: LinkProps) {
    return (
        <div
            className={`${blockBaseClasses} ${isActive ? 'w-36 text-slate-100' : 'w-24 text-slate-400'}`}
            onClick={onClick}
        >
            <div className='w-full'>
                <p className={`${borderBaseClasses} ${isActive ? 'border-slate-100' : 'border-slate-400'}`}></p>
            </div>
            <button className={buttonBaseClasses}>{children}</button>
        </div>
    );
}

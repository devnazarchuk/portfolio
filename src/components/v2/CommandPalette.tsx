'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
    Search, Home, Folder, Download, Terminal,
    User, Cpu, GraduationCap, Languages, Mail,
    Calendar, ExternalLink, Command as CommandIcon,
    ChevronRight, Sparkles, Globe, LucideIcon, X,
    Sun, Moon, Monitor
} from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface CommandItem {
    icon: LucideIcon;
    label: { en: string; de: string; ua: string };
    action: () => void;
    shortcut?: string;
    description: { en: string; de: string; ua: string };
    color?: string;
    isTerminal?: boolean;
    keywords?: string; // Keywords can remain a single string of mixed languages for broader search
}

interface CommandCategory {
    label: { en: string; de: string; ua: string };
    items: CommandItem[];
}

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'EN' | 'DE' | 'UA';
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, lang }) => {
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemsContainerRef = useRef<HTMLDivElement>(null);
    const interactionSource = useRef<'keyboard' | 'mouse'>('keyboard');
    const { theme, setTheme, toggleTheme } = useTheme();

    const navigateTo = (id: string) => {
        onClose();
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openLink = (url: string) => {
        onClose();
        window.open(url, '_blank');
    };

    const runTerminalCommand = (cmd: string) => {
        onClose();
        // Scroll to the terminal console specifically, centering it for better mobile visibility
        document.getElementById('terminal-console')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            (window as any).executeTerminalCommand?.(cmd);
        }, 800); // Increased delay slightly to allow scroll to finish
    };

    const categories: CommandCategory[] = useMemo(() => [
        {
            label: { en: "Professional Protocol (CV)", de: "Professionelles Protokoll (CV)", ua: "Професійний Протокол (CV)" },
            items: [
                {
                    icon: Sparkles,
                    label: { en: "Open Interactive Resume", de: "Interaktiven Lebenslauf öffnen", ua: "Відкрити інтерактивне резюме" },
                    action: () => { onClose(); router.push('/resume'); },
                    shortcut: 'G R',
                    description: { en: "Full digital portfolio & roadmap", de: "Vollständiges digitales Portfolio", ua: "Повне цифрове портфоліо" },
                    keywords: "resume cv portfolio skills lebenslauf резюме портфоліо"
                },
                {
                    icon: Calendar,
                    label: { en: "Schedule Sync (Cal.com)", de: "Termin vereinbaren (Cal.com)", ua: "Запланувати зустріч (Cal.com)" },
                    action: () => { onClose(); (window as any).showBookingModal?.(); },
                    shortcut: 'G S',
                    description: { en: "Book a direct meeting", de: "Buchen Sie ein direktes Treffen", ua: "Забронювати пряму зустріч" },
                    keywords: "booking call meeting schedule termin anruf зустріч дзвінок"
                },
                {
                    icon: Download,
                    label: { en: "Download Resume (EN)", de: "Lebenslauf herunterladen (EN)", ua: "Завантажити резюме (EN)" },
                    action: () => openLink('/artem_nazarchuk_resume_eng.pdf'),
                    color: "text-blue-400",
                    description: { en: "PDF Version", de: "PDF-Version", ua: "PDF Версія" },
                    keywords: "pdf download resume cv herunterladen завантажити"
                },
                {
                    icon: Download,
                    label: { en: "Download Resume (DE)", de: "Lebenslauf herunterladen (DE)", ua: "Завантажити резюме (DE)" },
                    action: () => openLink('/artem_nazarchuk_resume_de.pdf'),
                    color: "text-orange-400",
                    description: { en: "PDF Version", de: "PDF-Version", ua: "PDF Версія" },
                    keywords: "pdf download resume cv herunterladen завантажити"
                },
            ]
        },
        {
            label: { en: "Navigation Nodes", de: "Navigationsknoten", ua: "Навігаційні Вузли" },
            items: [
                { icon: Home, label: { en: "System Core (Top)", de: "Systemkern (Top)", ua: "Ядро Системи (Вгору)" }, action: () => navigateTo('top'), shortcut: 'G T', description: { en: "Go to top", de: "Nach oben", ua: "Вгору" }, keywords: "home start top hauptseite головна" },
                { icon: User, label: { en: "Neural Context (About)", de: "Neuraler Kontext (Über mich)", ua: "Нейронний Контекст (Про мене)" }, action: () => navigateTo('about'), shortcut: 'G A', description: { en: "About me", de: "Über mich", ua: "Про мене" }, keywords: "about info über про info" },
                { icon: Folder, label: { en: "Production Nodes (Projects)", de: "Produktionsknoten (Projekte)", ua: "Виробничі Вузли (Проєкти)" }, action: () => navigateTo('projects'), shortcut: 'G P', description: { en: "View projects", de: "Projekte ansehen", ua: "Переглянути проєкти" }, keywords: "projects work portfolio projekte роботи" },
                { icon: Mail, label: { en: "Contact Protocol", de: "Kontaktprotokoll", ua: "Протокол Зв'язку" }, action: () => navigateTo('contact'), shortcut: 'G C', description: { en: "Contact me", de: "Kontaktieren Sie mich", ua: "Зв'язатися" }, keywords: "contact email mail kontakt пошта" },
            ]
        },
        {
            label: { en: "System Configuration", de: "Systemkonfiguration", ua: "Конфігурація Системи" },
            items: [
                {
                    icon: theme === 'dark' ? Sun : Moon,
                    label: { en: "Toggle Theme", de: "Thema umschalten", ua: "Змінити Тему" },
                    action: () => { toggleTheme(); onClose(); },
                    description: { en: `Current: ${theme.toUpperCase()}`, de: `Aktuell: ${theme.toUpperCase()}`, ua: `Поточна: ${theme.toUpperCase()}` },
                    keywords: "theme dark light mode thema колір тема"
                },
                {
                    icon: Sun,
                    label: { en: "Set Light Mode", de: "Hellen Modus aktivieren", ua: "Встановити Світлу Тему" },
                    action: () => { setTheme('light'); onClose(); },
                    description: { en: "Switch to light theme", de: "Zum hellen Design wechseln", ua: "Переключити на світлу тему" },
                    keywords: "light white day hell tag світла день біла"
                },
                {
                    icon: Moon,
                    label: { en: "Set Dark Mode", de: "Dunklen Modus aktivieren", ua: "Встановити Темну Тему" },
                    action: () => { setTheme('dark'); onClose(); },
                    description: { en: "Switch to dark theme", de: "Zum dunklen Design wechseln", ua: "Переключити на темну тему" },
                    keywords: "dark black night dunkel nacht темна ніч чорна"
                }
            ]
        },
        {
            label: { en: "Terminal Executables", de: "Terminal-Befehle", ua: "Команди Терміналу" },
            items: [
                { icon: Terminal, label: { en: "Help Manifest", de: "Hilfemanifest", ua: "Маніфест Допомоги" }, action: () => runTerminalCommand('help'), description: { en: "Run 'help'", de: "Führe 'help' aus", ua: "Запустити 'help'" }, isTerminal: true, keywords: "help hilfe допомога" },
                { icon: Cpu, label: { en: "Run Neofetch", de: "Neofetch ausführen", ua: "Запустити Neofetch" }, action: () => runTerminalCommand('neofetch'), description: { en: "System info", de: "Systeminformationen", ua: "Інфо системи" }, isTerminal: true, keywords: "neofetch info" },
                { icon: GraduationCap, label: { en: "Fetch Education", de: "Bildung abrufen", ua: "Отримати Освіту" }, action: () => runTerminalCommand('education'), description: { en: "View education", de: "Ausbildung ansehen", ua: "Переглянути освіту" }, isTerminal: true, keywords: "education ausbildung освіта" },
                { icon: Languages, label: { en: "Language Translation", de: "Sprachübersetzung", ua: "Переклад Мови" }, action: () => runTerminalCommand('language'), description: { en: "View languages", de: "Sprachen ansehen", ua: "Переглянути мови" }, isTerminal: true, keywords: "languages sprachen мови" },
                { icon: Terminal, label: { en: "List Files", de: "Dateien auflisten", ua: "Список Файлів" }, action: () => runTerminalCommand('ls -la'), description: { en: "List directory", de: "Verzeichnis auflisten", ua: "Список директорії" }, isTerminal: true, keywords: "ls list files dateien файли" },
            ]
        }
    ], [theme]);

    const filteredItems = useMemo(() => {
        const flat: CommandItem[] = [];
        const langKey = lang === 'DE' ? 'de' : lang === 'UA' ? 'ua' : 'en';

        categories.forEach(cat => {
            cat.items.forEach(item => {
                const labelText = item.label[langKey];
                const descText = item.description[langKey];
                // Search in all languages for keywords + current visible label
                const searchStr = `${labelText} ${item.keywords || ''} ${Object.values(item.label).join(' ')}`.toLowerCase();

                if (searchStr.includes(search.toLowerCase())) {
                    flat.push(item);
                }
            });
        });
        return flat;
    }, [search, categories, lang]);

    useEffect(() => {
        setSelectedIndex(0);
        interactionSource.current = 'keyboard';
    }, [search]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                interactionSource.current = 'keyboard';
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                interactionSource.current = 'keyboard';
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    filteredItems[selectedIndex].action();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredItems]);

    // Handle scrolling of selected item into view
    useEffect(() => {
        if (itemsContainerRef.current && interactionSource.current === 'keyboard') {
            const selectedElement = itemsContainerRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
    }, [selectedIndex]);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] animate-in fade-in duration-300" onClick={onClose}></div>
            <div className="fixed top-0 sm:top-[15%] left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-2xl h-full sm:h-auto bg-[#ffffff]/90 dark:bg-[#09090b]/90 border-b sm:border border-black/10 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] sm:rounded-3xl z-[201] flex flex-col overflow-hidden animate-in fade-in sm:zoom-in-95 duration-200 ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-3xl">

                {/* Search Header */}
                <div className="p-4 sm:p-6 border-b border-black/5 dark:border-white/5 flex items-center gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
                    <div className="relative flex-grow flex items-center">
                        <Search size={18} className="absolute left-0 text-zinc-500" style={{ color: search ? 'var(--accent)' : '' }} />
                        <input
                            type="text"
                            placeholder={lang === 'DE' ? "Befehl eingeben oder suchen..." : lang === 'UA' ? "Введіть команду або шукайте..." : "Type a command or search..."}
                            className="bg-transparent border-none outline-none text-[var(--foreground)] w-full pl-8 placeholder:text-zinc-500 font-mono text-base h-10"
                            autoFocus
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-500 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-1 rounded-md">ESC</span>
                    </div>
                    <button onClick={onClose} className="sm:hidden p-2 text-zinc-500">
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div
                    ref={scrollContainerRef}
                    className="flex-grow sm:max-h-[60vh] overflow-y-auto p-2 sm:p-3 custom-scrollbar"
                >
                    {filteredItems.length > 0 ? (
                        <div ref={itemsContainerRef} className="grid grid-cols-1 gap-1">
                            {categories.map((cat, catIdx) => {
                                const categoryItems = cat.items.filter(item => filteredItems.includes(item));
                                if (categoryItems.length === 0) return null;

                                return (
                                    <div key={catIdx} className="mb-4 last:mb-2">
                                        <div className="px-4 py-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                            <div className="w-1 h-3 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                                            {cat.label[lang === 'DE' ? 'de' : lang === 'UA' ? 'ua' : 'en']}
                                        </div>
                                        {cat.items.map((item, itemIdx) => {
                                            if (!filteredItems.includes(item)) return null;
                                            const isSelected = filteredItems[selectedIndex] === item;
                                            const langKey = lang === 'DE' ? 'de' : lang === 'UA' ? 'ua' : 'en';

                                            return (
                                                <button
                                                    key={itemIdx}
                                                    onClick={item.action}
                                                    onMouseEnter={() => {
                                                        interactionSource.current = 'mouse';
                                                        setSelectedIndex(filteredItems.indexOf(item));
                                                    }}
                                                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl group transition-all text-left relative overflow-hidden active:scale-[0.98] ${isSelected
                                                        ? 'bg-black/[0.05] dark:bg-white/[0.05] ring-1 ring-black/10 dark:ring-white/10'
                                                        : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4 relative z-10">
                                                        <div className={`w-10 h-10 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-center transition-all ${isSelected
                                                            ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10 shadow-[0_0_15px_var(--accent-glow)]'
                                                            : 'group-hover:border-black/10 dark:group-hover:border-white/10'
                                                            }`}>
                                                            <item.icon size={18} className={`transition-colors ${isSelected
                                                                ? 'text-[var(--accent)]'
                                                                : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200'
                                                                } ${item.color || ''}`} />
                                                        </div>
                                                        <div>
                                                            <div className={`text-sm font-medium transition-colors ${isSelected ? 'text-black dark:text-white' : 'text-zinc-700 dark:text-zinc-300'
                                                                }`}>{item.label[langKey]}</div>
                                                            {item.description && <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{item.description[langKey]}</div>}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        {item.shortcut && (
                                                            <div className={`hidden sm:flex items-center gap-1 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                                                                {item.shortcut.split(' ').map((s: string, i: number) => (
                                                                    <span key={i} className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase border ${isSelected
                                                                        ? 'bg-[var(--accent)]/10 border-[var(--accent)]/30 text-[var(--accent)]'
                                                                        : 'bg-black/5 dark:bg-zinc-800 border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400'
                                                                        }`}>
                                                                        {s}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {item.isTerminal && (
                                                            <div className={`text-[8px] font-mono px-1.5 py-0.5 rounded border transition-colors ${isSelected
                                                                ? 'border-[var(--accent)] text-[var(--accent)]'
                                                                : 'border-black/10 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600'
                                                                }`}>EXE</div>
                                                        )}
                                                        <ChevronRight size={14} className={`transition-all ${isSelected ? 'text-[var(--accent)] translate-x-1 opacity-100' : 'text-zinc-600 opacity-0 group-hover:opacity-100'
                                                            }`} />
                                                    </div>

                                                    {/* Selection Glow Indicator */}
                                                    {isSelected && (
                                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-20 flex flex-col items-center justify-center text-zinc-500 gap-4">
                            <Sparkles size={40} className="opacity-20 translate-y-2" />
                            <div className="text-sm font-mono tracking-widest uppercase opacity-40">
                                {lang === 'DE' ? "Keine passenden Knoten gefunden" : lang === 'UA' ? "Вузли не знайдено" : "No matching nodes found"}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer info */}
                <div className="p-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-500 bg-white/5 px-1 rounded">↑↓</span> {lang === 'DE' ? "Navigieren" : lang === 'UA' ? "Навігація" : "Navigate"}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-500 bg-white/5 px-1 rounded">↵</span> {lang === 'DE' ? "Ausführen" : lang === 'UA' ? "Виконати" : "Execute"}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500">
                        <CommandIcon size={10} /> SYSTEM_PALETTE v2.2
                    </div>
                </div>
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }
      `}</style>
        </>
    );
};

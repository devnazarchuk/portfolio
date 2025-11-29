'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

interface TerminalLine {
    text: string;
    type: 'input' | 'output' | 'error' | 'success';
}

interface FileSystemItem {
    name: string;
    type: 'file' | 'dir';
}

const ALL_COMMANDS = [
    'help', 'info', 'work', 'education', 'stack', 'projects', 'resume',
    'ls', 'rm', 'whoami', 'neofetch', 'contact', 'language', 'color',
    'fish', 'sudo', 'clear', 'exit'
];

export const Terminal: React.FC = () => {
    const [lines, setLines] = useState<TerminalLine[]>([
        { text: "System authorized. Initializing environment...", type: 'success' },
        { text: "Type 'help' for available commands. Type 'cv' or 'resume' to view my resume.", type: 'output' },
    ]);
    const [input, setInput] = useState("");
    const [cursorPos, setCursorPos] = useState(0); // Track cursor position
    const [isFocused, setIsFocused] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [shellStack, setShellStack] = useState<string[]>(['bash']);
    const [isRoot, setIsRoot] = useState(false);
    const [fs, setFs] = useState<FileSystemItem[]>([
        { name: ".profile", type: 'file' },
        { name: "projects", type: 'dir' },
        { name: "resume_eng.pdf", type: 'file' },
        { name: "resume_de.pdf", type: 'file' },
    ]);
    const [suggestion, setSuggestion] = useState("");

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const hasStartedSequence = useRef(false);

    const currentShell = shellStack[shellStack.length - 1];
    const isFishMode = currentShell === 'fish';

    // Suggestion Logic
    useEffect(() => {
        if (!input) {
            setSuggestion("");
            return;
        }
        const lowerInput = input.toLowerCase();

        // 1. Check history (most recent first)
        const historyMatch = [...history].reverse().find(h =>
            h.toLowerCase().startsWith(lowerInput) && h.length > input.length
        );

        if (historyMatch) {
            setSuggestion(historyMatch);
            return;
        }

        // 2. Check available commands
        const cmdMatch = ALL_COMMANDS.find(c =>
            c.startsWith(lowerInput) && c.length > input.length
        );

        if (cmdMatch) {
            setSuggestion(cmdMatch);
            return;
        }

        setSuggestion("");
    }, [input, history]);


    // Expose command execution to global window object
    useEffect(() => {
        (window as any).executeTerminalCommand = (cmd: string) => {
            processCommand(cmd);
        };
        return () => {
            (window as any).executeTerminalCommand = undefined;
        };
    }, []);

    const processCommand = (cmdInput: string) => {
        const cmdText = cmdInput.trim();
        if (!cmdText) return;

        const parts = cmdText.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        const outputLines: TerminalLine[] = [];

        switch (cmd) {
            case 'help':
                outputLines.push({ text: "Available commands: help, info, work, education, stack, projects, resume, ls, rm, whoami, neofetch, contact, language, color, fish, sudo, clear, exit", type: 'success' });
                break;
            case 'fish':
                if (isFishMode) {
                    outputLines.push({ text: "Yeah, I made multi-shells for fish, who's even going to check this...", type: 'success' });
                } else {
                    outputLines.push({ text: "       .", type: 'success' });
                    outputLines.push({ text: "      \":\" ", type: 'success' });
                    outputLines.push({ text: "    ___:____     |\"\\/\"|", type: 'success' });
                    outputLines.push({ text: "  ,'        `.    \\  /", type: 'success' });
                    outputLines.push({ text: "  |  O        \\___/  |", type: 'success' });
                    outputLines.push({ text: "~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~", type: 'output' });
                    outputLines.push({ text: "Welcome to fish, the friendly interactive shell", type: 'success' });
                }
                setShellStack(prev => [...prev, 'fish']);
                break;
            case 'exit':
                if (isRoot) {
                    setIsRoot(false);
                    outputLines.push({ text: "exit", type: 'output' });
                    outputLines.push({ text: "Root session terminated.", type: 'output' });
                } else if (shellStack.length > 1) {
                    const newStack = [...shellStack];
                    newStack.pop();
                    setShellStack(newStack);
                    outputLines.push({ text: "logout", type: 'output' });
                    outputLines.push({ text: `Back to ${newStack[newStack.length - 1]} shell.`, type: 'output' });
                } else {
                    outputLines.push({ text: "Closing terminal session...", type: 'error' });
                    setTimeout(() => (window as any).setTerminalClosed?.(), 500);
                }
                break;
            case 'language':
                if (args.length === 0) {
                    outputLines.push({ text: "Usage: language [en|de|ua]. Example: 'language de'", type: 'output' });
                } else {
                    const l = args[0].toUpperCase();
                    if (['EN', 'DE', 'UA'].includes(l)) {
                        (window as any).changeLanguage?.(l);
                        outputLines.push({ text: `System language changed to: ${l}`, type: 'success' });
                    } else {
                        outputLines.push({ text: `Unsupported language: ${l}. Use 'en', 'de', or 'ua'.`, type: 'error' });
                    }
                }
                break;
            case 'color':
                if (args.length === 0) {
                    outputLines.push({ text: "Usage: color [color_name | hex_code]. Example: 'color red' or 'color #ff00ff'", type: 'output' });
                } else {
                    const color = args[0];
                    try {
                        document.documentElement.style.setProperty('--accent', color);
                        document.documentElement.style.setProperty('--accent-glow', `${color}80`);
                        outputLines.push({ text: `System theme primary accent initialized to: ${color}`, type: 'success' });
                    } catch (err) {
                        outputLines.push({ text: `Failed to set color: ${color}`, type: 'error' });
                    }
                }
                break;
            case 'whoami':
                if (isRoot) {
                    outputLines.push({ text: "root", type: 'output' });
                } else {
                    outputLines.push({ text: "Artem Nazarchuk. Full-stack Developer with a focus on performance, i18n, and German market optimization.", type: 'output' });
                }
                break;
            case 'neofetch':
                outputLines.push({ text: "OS: Ubuntu 24.04 LTS (Optimized)", type: 'output' });
                outputLines.push({ text: "Location: Pfungstadt, Germany", type: 'output' });
                outputLines.push({ text: "Primary Stack: Next.js / TypeScript / Node.js / Tailwind", type: 'output' });
                outputLines.push({ text: "Focus: Performance & i18n Optimization", type: 'output' });
                break;
            case 'education':
                outputLines.push({ text: "• National Technical University of Lutsk: Bachelor of CS (Exp. 2028)", type: 'output' });
                outputLines.push({ text: "• IT Career Hub Germany: Certified Web Developer (AZAV)", type: 'output' });
                break;
            case 'projects':
                outputLines.push({ text: "1. Noventa Bakery - High Performance i18n Platform", type: 'success' });
                outputLines.push({ text: "2. Sneaker Store - E-commerce MVP", type: 'success' });
                outputLines.push({ text: "3. Bagnet Fighting Club - Full-stack Community Platform", type: 'success' });
                break;
            case 'ls':
                if (fs.length === 0) {
                    outputLines.push({ text: "total 0", type: 'output' });
                } else {
                    fs.forEach(item => {
                        const prefix = item.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--';
                        outputLines.push({ text: `${prefix}  ${isRoot ? 'root' : 'artem'}  root  ${item.type === 'dir' ? '4096' : '1024'}  ${item.name}`, type: 'output' });
                    });
                }
                break;
            case 'rm':
                if (args.length === 0) {
                    outputLines.push({ text: "rm: missing operand", type: 'error' });
                } else if (args.includes('-rf') && (args.includes('/') || args.includes('/*'))) {
                    // Logic: if root, we destroy immediately. If not root, deny permission.
                    if (isRoot) {
                        outputLines.push({ text: "Recursive deletion of the entire system...", type: 'error' });
                        setTimeout(() => (window as any).triggerSystemFailure?.(), 1500);
                    } else {
                        outputLines.push({ text: "Really? ...but you don't have enough permissions for this.", type: 'error' });
                    }
                } else {
                    const target = args[args.length - 1];
                    setFs(prev => prev.filter(i => i.name !== target));
                    outputLines.push({ text: `Removed '${target}'.`, type: 'success' });
                }
                break;
            case 'sudo':
                // Check if user wants "sudo su"
                if (args.length > 0 && args[0] === 'su') {
                    if (isRoot) {
                        outputLines.push({ text: "Already root.", type: 'output' });
                    } else {
                        setIsRoot(true);
                        outputLines.push({ text: "So... what are you actually planning to do with this?", type: 'success' });
                    }
                }
                // Check for sudo rm -rf /
                else if (args[0] === 'rm' && args.includes('-rf') && (args.includes('/') || args.includes('/*'))) {
                    outputLines.push({ text: "[SUDO] Root access granted.", type: 'success' });
                    outputLines.push({ text: "Executing recursive deletion of the entire system...", type: 'error' });
                    setTimeout(() => (window as any).triggerSystemFailure?.(), 1500);
                } else {
                    if (isRoot && args.length > 0) {
                        // If already root, execute command normally (simplified simulation)
                        const subCmd = args[0];
                        outputLines.push({ text: `Executing ${subCmd} as root...`, type: 'output' });
                    } else {
                        outputLines.push({ text: "user is not in the sudoers file. This incident will be reported.", type: 'error' });
                    }
                }
                break;
            case 'clear':
                setLines([]);
                return;
            case 'info':
                outputLines.push({ text: "Artem Nazarchuk - Full-Stack Developer based in Germany.", type: 'success' });
                break;
            case 'work':
                outputLines.push({ text: "🏢 Freelance Full-Stack Developer (2022 - Present)", type: 'output' });
                outputLines.push({ text: "🏢 Kunstschule Berlin - Frontend Developer / Contractor", type: 'output' });
                break;
            case 'stack':
                outputLines.push({ text: "Next.js, React, TypeScript, Tailwind, Node.js, PostgreSQL", type: 'success' });
                break;
            case 'resume':
            case 'cv':
                outputLines.push({ text: "Redirecting to /resume...", type: 'success' });
                setTimeout(() => window.location.href = '/resume', 2000);
                break;
            case 'contact':
                outputLines.push({ text: "Email: devnazarchuk@gmail.com", type: 'output' });
                outputLines.push({ text: "GitHub: github.com/devnazarchuk", type: 'output' });
                break;
            default:
                outputLines.push({ text: `Command not found: ${cmd}. Type 'help'.`, type: 'error' });
        }

        let promptStart = '';
        if (isRoot) {
            promptStart = 'root@artem-system:~# ';
        } else if (isFishMode) {
            promptStart = 'user@artem-system ~> ';
        } else {
            promptStart = 'user@artem-system:~$ ';
        }

        setLines(prev => [...prev, { text: `${promptStart}${cmdText}`, type: 'input' }, ...outputLines]);
    };

    // Auto-typing sequence
    useEffect(() => {
        const typeCommand = async (cmd: string, delayBefore: number = 2000) => {
            await new Promise(r => setTimeout(r, delayBefore));
            for (let i = 0; i <= cmd.length; i++) {
                setInput(cmd.slice(0, i));
                setCursorPos(i + 1);
                await new Promise(r => setTimeout(r, 150));
            }
            await new Promise(r => setTimeout(r, 500));
            processCommand(cmd);
            setInput("");
            setCursorPos(0);
        };

        const runSequence = async () => {
            if (hasStartedSequence.current) return;
            const hasInteracted = localStorage.getItem('terminal-interacted');
            if (hasInteracted) return;

            hasStartedSequence.current = true;
            await typeCommand('help', 2500);
            await typeCommand('stack', 2000);
        };

        runSequence();
    }, []);


    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [lines]);

    const handleInputSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setCursorPos(e.currentTarget.selectionStart || 0);
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const val = input.trim();
        if (val) {
            processCommand(val);
            const newHistory = [...history, val].slice(-10);
            setHistory(newHistory);
            localStorage.setItem('terminal-history', JSON.stringify(newHistory));
            localStorage.setItem('terminal-interacted', 'true');
            setHistoryIndex(-1);
        }
        setInput("");
        setCursorPos(0);
        setSuggestion("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            let promptStart = '';
            if (isRoot) {
                promptStart = 'root@artem-system:~# ';
            } else if (isFishMode) {
                promptStart = 'user@artem-system ~> ';
            } else {
                promptStart = 'user@artem-system:~$ ';
            }
            setLines(prev => [...prev, { text: `${promptStart}${input}^C`, type: 'input' }]);
            setInput("");
            setCursorPos(0);
            setSuggestion("");
            return;
        }

        // Autocomplete with ArrowRight ONLY if at the end of input
        if (e.key === 'ArrowRight') {
            if (suggestion && input && cursorPos === input.length) {
                e.preventDefault();
                setInput(suggestion);
                setCursorPos(suggestion.length);
                setSuggestion("");
                return;
            }
        }

        // Tab Completion
        if (e.key === 'Tab') {
            if (!input) return; // Allow default navigation (ARIA) if input is empty
            e.preventDefault();
            if (suggestion) {
                setInput(suggestion);
                setCursorPos(suggestion.length);
                setSuggestion("");
            }
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length === 0) return;
            const idx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(idx);
            setInput(history[idx]);
            setCursorPos(history[idx].length);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex === -1) return;
            const idx = historyIndex + 1;
            if (idx >= history.length) {
                setHistoryIndex(-1);
                setInput("");
                setCursorPos(0);
            } else {
                setHistoryIndex(idx);
                setInput(history[idx]);
                setCursorPos(history[idx].length);
            }
        }
    };

    let headerText = '';
    if (isRoot) {
        headerText = 'root@system: ~ (privileged)';
    } else {
        headerText = `artem@system: ~ (${currentShell}${shellStack.length > 2 ? ` x${shellStack.length - 1}` : ''})`;
    }

    const beforeCursor = input.slice(0, cursorPos);
    const atCursor = input.charAt(cursorPos);
    const afterCursor = input.slice(cursorPos + 1);

    return (
        <div
            id="terminal-console"
            className="glass rounded-lg overflow-hidden border border-zinc-800 shadow-2xl cursor-text relative group/terminal"
            onMouseEnter={() => inputRef.current?.focus({ preventScroll: true })}
            onClick={() => {
                if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
            }}
        >
            <div className={`px-4 py-2 flex items-center justify-between border-b border-zinc-800 pointer-events-none transition-colors duration-500 ${isRoot ? 'bg-red-900/20' : 'bg-zinc-900/80'}`}>
                <div className="flex items-center gap-2">
                    <TerminalIcon size={14} style={{ color: isRoot ? 'red' : 'var(--accent)' }} />
                    <span className={`text-[10px] font-mono ${isRoot ? 'text-red-400 font-bold' : 'text-zinc-400'}`}>
                        {headerText}
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
            </div>
            <div
                ref={scrollRef}
                className="h-64 sm:h-96 overflow-y-auto p-4 font-mono text-[10px] sm:text-xs space-y-1 bg-black/90 scrollbar-thin scrollbar-thumb-zinc-700"
            >
                {lines.map((line, i) => (
                    <div key={i} className={`
                        ${line.type === 'input' ? 'text-zinc-500 italic' : ''}
                        ${line.type === 'output' ? 'text-zinc-300' : ''}
                        ${line.type === 'error' ? 'text-red-400' : ''}
                        ${line.type === 'success' ? '' : ''}
                    `} style={line.type === 'success' ? { color: 'var(--accent)' } : {}}>
                        {line.text}
                    </div>
                ))}
                <form onSubmit={handleCommand} className="flex items-center gap-1 relative" style={{ color: isRoot ? 'red' : 'var(--accent)' }}>
                    <span className={`whitespace-nowrap font-bold text-[10px] sm:text-xs ${isRoot ? 'text-red-500' : ''}`}>
                        {isRoot ? 'root@artem-system:~# ' : (isFishMode ? 'user@artem-system ~> ' : 'user@artem-system:~$ ')}
                    </span>
                    <div className="flex-1 relative flex items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setCursorPos(e.target.selectionStart || 0);
                            }}
                            onSelect={handleInputSelect}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="absolute inset-0 w-full bg-transparent border-none outline-none text-transparent caret-transparent z-10"
                            placeholder={!input ? "Initialize..." : ""}
                        />
                        <div className="flex items-center pointer-events-none relative z-0">
                            {/* Render text with cursor inside */}
                            <span className={`${isFishMode && !isRoot ? 'text-[var(--accent)] font-bold drop-shadow-[0_0_8px_var(--accent-glow)]' : (isRoot ? 'text-red-500 font-bold' : 'text-white')} whitespace-pre`}>
                                {beforeCursor}
                            </span>

                            {/* The Cursor Block */}
                            {isFocused ? (
                                <span className={`whitespace-pre -mb-0.5 ${isRoot ? 'bg-red-500 text-black' : 'bg-[var(--accent)] text-black'} animate-pulse`}>
                                    {atCursor || '\u00A0'}
                                </span>
                            ) : (
                                <span className="whitespace-pre">{atCursor}</span>
                            )}

                            {/* Rest of the text */}
                            <span className={`${isFishMode && !isRoot ? 'text-[var(--accent)] font-bold drop-shadow-[0_0_8px_var(--accent-glow)]' : (isRoot ? 'text-red-500 font-bold' : 'text-white')} whitespace-pre`}>
                                {afterCursor}
                            </span>

                            {/* Autosuggestion Ghost Text - Only if cursor at end */}
                            {suggestion && suggestion.toLowerCase().startsWith(input.toLowerCase()) && (
                                <span className="text-zinc-600 opacity-50 whitespace-pre absolute left-full top-0">
                                    {suggestion.slice(input.length)}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

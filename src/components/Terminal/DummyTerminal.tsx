// src/components/Terminal/DummyTerminal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Settings, Maximize2, Minimize2 } from 'lucide-react';

interface DummyTerminalProps {
    componentName: string;
}

const DummyTerminal: React.FC<DummyTerminalProps> = ({ componentName }) => {
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useState<string[]>([
        `Welcome to Phyra.ai Terminal - ${componentName}`,
        'Type "help" for available commands',
        ''
    ]);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    // Available commands
    const commands: { [key: string]: () => string } = {
        help: () => `Available commands:
  - help: Show this help message
  - clear: Clear terminal
  - status: Show component status
  - info: Show component information
  - version: Show component version
  - logs: Show recent logs`,
        clear: () => {
            setHistory(['']);
            return '';
        },
        status: () => `Component Status: Running
CPU Usage: 45%
Memory Usage: 2.1GB/4GB
GPU Usage: 82%
Uptime: 3d 5h 12m`,
        info: () => `Component Information:
Name: ${componentName}
Type: ML Model
Environment: Production
Created: 2024-03-21
Last Deploy: 2024-03-22`,
        version: () => 'Component Version: v1.2.3',
        logs: () => `Recent Logs:
[INFO] 2024-03-22 10:30:45 - Model loaded successfully
[INFO] 2024-03-22 10:30:46 - Starting inference server
[WARN] 2024-03-22 10:30:47 - High memory usage detected
[INFO] 2024-03-22 10:31:00 - Processing batch #1254`
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (trimmedCmd === '') return;

        const result = commands[trimmedCmd] 
            ? commands[trimmedCmd]() 
            : `Command not found: ${trimmedCmd}`;

        setHistory(prev => [...prev, `$ ${cmd}`, result, '']);
        setInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    useEffect(() => {
        // Auto-scroll to bottom when history changes
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className={`bg-gray-900 text-gray-100 rounded-lg overflow-hidden ${
            isFullscreen ? 'fixed inset-0 z-50' : 'h-96'
        }`}>
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Terminal size={18} />
                    <span className="font-mono">{componentName}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-1 hover:bg-gray-700 rounded"
                    >
                        {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    </button>
                </div>
            </div>

            {/* Terminal Content */}
            <div 
                ref={terminalRef}
                className="p-4 h-full overflow-auto font-mono"
                style={{ height: isFullscreen ? 'calc(100vh - 108px)' : '300px' }}
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                        {line}
                    </div>
                ))}
                <div className="flex">
                    <span className="text-green-500 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 bg-transparent outline-none"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default DummyTerminal;
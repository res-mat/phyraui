// src/components/SSH/ssh.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Key, Globe, User, Lock, X } from 'lucide-react';

interface SSHConnectionConfig {
  host: string;
  port: number;
  username: string;
  password?: string;
  privateKey?: string;
}

const SSH: React.FC = () => {
  const [config, setConfig] = useState<SSHConnectionConfig>({
    host: '',
    port: 22,
    username: '',
    password: '',
    privateKey: ''
  });

  const [isConnected, setIsConnected] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Simulated terminal history for now
  const handleCommand = (command: string) => {
    if (command.trim() === '') return;

    setTerminalOutput(prev => [
      ...prev,
      `${config.username}@${config.host}:~$ ${command}`,
      `Simulated output for: ${command}`,
      ''
    ]);
    setCurrentCommand('');
  };

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const handleConnect = async () => {
    // Simulate connection
    setIsConnected(true);
    setTerminalOutput([
      `Connecting to ${config.host}...`,
      `Successfully connected to ${config.host} as ${config.username}`,
      ''
    ]);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setTerminalOutput([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg h-full">
      {/* Header */}
      <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={20} />
          <span className="font-mono text-sm">SSH Terminal</span>
        </div>
        {isConnected && (
          <button 
            onClick={handleDisconnect}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Connection Form */}
      {!isConnected && (
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">SSH Connection</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Host
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={config.host}
                    onChange={(e) => setConfig({ ...config, host: e.target.value })}
                    className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="hostname or IP"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Port
                </label>
                <input
                  type="number"
                  value={config.port}
                  onChange={(e) => setConfig({ ...config, port: parseInt(e.target.value) })}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="22"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={config.username}
                  onChange={(e) => setConfig({ ...config, username: e.target.value })}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  value={config.password}
                  onChange={(e) => setConfig({ ...config, password: e.target.value })}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="password"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Private Key (Optional)
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <textarea
                  value={config.privateKey}
                  onChange={(e) => setConfig({ ...config, privateKey: e.target.value })}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="-----BEGIN RSA PRIVATE KEY-----"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleConnect}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Window */}
      {isConnected && (
        <div className="flex flex-col h-[calc(100%-3rem)]">
          <div 
            ref={terminalRef}
            className="flex-1 bg-black p-4 font-mono text-green-400 overflow-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {terminalOutput.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">{line}</div>
            ))}
            <div className="flex">
              <span className="text-green-400 mr-2">
                {config.username}@{config.host}:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(currentCommand);
                  }
                }}
                className="flex-1 bg-transparent outline-none text-green-400"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SSH;
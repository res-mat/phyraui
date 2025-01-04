// // src/components/Terminal/Terminal.tsx
// import React, { useEffect, useRef, useState } from 'react';
// import { Terminal as XTerm } from 'xterm';
// import { FitAddon } from 'xterm-addon-fit';
// import { WebLinksAddon } from 'xterm-addon-web-links';
// import { Terminal as Icon, Settings, Save, Copy } from 'lucide-react';
// import 'xterm/css/xterm.css';

// interface TerminalProps {
//   componentId: string;
//   host: string;
//   port: number;
//   username: string;
// }

// const Terminal: React.FC<TerminalProps> = ({ componentId, host, port, username }) => {
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const [terminal, setTerminal] = useState<XTerm | null>(null);
//   const [isConfigOpen, setIsConfigOpen] = useState(false);
//   const [config, setConfig] = useState({
//     fontSize: 14,
//     fontFamily: 'Menlo, Monaco, "Courier New", monospace',
//     theme: 'dark',
//     cursorBlink: true
//   });

//   useEffect(() => {
//     if (terminalRef.current) {
//       const term = new XTerm({
//         cursorBlink: config.cursorBlink,
//         fontSize: config.fontSize,
//         fontFamily: config.fontFamily,
//         theme: {
//           background: config.theme === 'dark' ? '#1a1a1a' : '#ffffff',
//           foreground: config.theme === 'dark' ? '#ffffff' : '#000000',
//         }
//       });

//       const fitAddon = new FitAddon();
//       const webLinksAddon = new WebLinksAddon();

//       term.loadAddon(fitAddon);
//       term.loadAddon(webLinksAddon);

//       term.open(terminalRef.current);
//       fitAddon.fit();

//       // Initialize SSH connection
//       initializeSSH(term, { host, port, username });

//       setTerminal(term);

//       return () => {
//         term.dispose();
//       };
//     }
//   }, [config, host, port, username]);

//   const initializeSSH = async (term: XTerm, connection: any) => {
//     try {
//       // Here you would implement the WebSocket connection to your backend
//       // which handles the actual SSH connection
//       term.writeln('Connecting to ' + connection.host + '...');
      
//       // Example connection message
//       term.writeln('Connected to ' + componentId);
//       term.writeln('Type "help" for available commands');
//     } catch (error) {
//       term.writeln('Failed to connect: ' + error);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Terminal Header */}
//       <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <Terminal className="w-5 h-5" />
//           <span>{componentId} Terminal</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={() => setIsConfigOpen(!isConfigOpen)}
//             className="p-2 hover:bg-gray-700 rounded"
//           >
//             <Settings className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Configuration Panel */}
//       {isConfigOpen && (
//         <div className="bg-gray-100 p-4 border-b">
//           <h3 className="font-semibold mb-4">Terminal Configuration</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Font Size
//               </label>
//               <input
//                 type="number"
//                 value={config.fontSize}
//                 onChange={(e) => setConfig({
//                   ...config,
//                   fontSize: parseInt(e.target.value)
//                 })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Theme
//               </label>
//               <select
//                 value={config.theme}
//                 onChange={(e) => setConfig({
//                   ...config,
//                   theme: e.target.value
//                 })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//               >
//                 <option value="dark">Dark</option>
//                 <option value="light">Light</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Terminal Window */}
//       <div 
//         ref={terminalRef} 
//         className="flex-1 bg-gray-900"
//         style={{ padding: '12px' }}
//       />

//       {/* Terminal Footer */}
//       <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
//         <div className="text-sm text-gray-400">
//           {host}:{port}
//         </div>
//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={() => {/* Copy terminal content */}}
//             className="p-2 hover:bg-gray-700 rounded"
//           >
//             <Copy className="w-4 h-4" />
//           </button>
//           <button 
//             onClick={() => {/* Save terminal content */}}
//             className="p-2 hover:bg-gray-700 rounded"
//           >
//             <Save className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Usage in Dashboard
// const ComponentTerminal: React.FC = () => {
//   return (
//     <div className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
//       <Terminal
//         componentId="ml-model-1"
//         host="component-1.phyra.ai"
//         port={22}
//         username="admin"
//       />
//     </div>
//   );
// };

// export default ComponentTerminal;
export {}
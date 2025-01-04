// src/components/Dashboard/DashboardLayout.tsx
import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ScrollText, 
  Settings, 
  Folder, 
  Database,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown, Cloud, Share2, Users,
  Shield,
  DatabaseIcon,
  Brain,
  TestTube,
  GitBranch,
  Terminal, Activity, Globe, DollarSign, Code, Boxes
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

// interface SidebarItem {
//   title: string;
//   path: string;
//   icon: React.ReactNode;
//   children?: Omit<SidebarItem, 'children'>[]; // Allow nested items but prevent infinite nesting
// }

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Overview',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />
  },
  {
    title: 'Logs',
    path: '/dashboard/logs',
    icon: <ScrollText size={20} />
  },
  {
    title: 'Fine Tuning Jobs',
    path: '/dashboard/fine-tuning',
    icon: <Settings size={20} />
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: <Folder size={20} />
  },
  // {
  //   title: 'Data Sets',
  //   path: '/dashboard/datasets',
  //   icon: <Database size={20} />
  // },
  {
    title: 'Workflows',
    path: '/dashboard/workflows',
    icon: <Share2 size={20} />
  },
  {
    title: 'Deployments',
    path: '/dashboard/deployments',
    icon: <Cloud size={20} />
  },
  // {
  //   title: 'Monitoring',
  //   path: '/dashboard/monitoring',
  //   icon: <Activity size={20} />
  // },
  // {
  //   title: 'Integration Hub',
  //   path: '/dashboard/integrations',
  //   icon: <Terminal size={20} />
  // },
  {
    title: 'ML Pipeline',
    path: '/dashboard/ml-pipeline',
    icon: <Brain size={20} />
  },
  {
    title: 'API Management',
    path: '/dashboard/api-management',
    icon: <Globe size={20} />
  },
  
  {
    title: 'Cost Management',
    path: '/dashboard/cost-management',
    icon: <DollarSign size={20} />,
  },
  {
    title: 'Components',
    path: '/dashboard/components',
    icon: <DollarSign size={20} />,
  },
  {
    title: 'Environments',
    path: '/dashboard/environments',
    icon: <Cloud size={20} />
  },
  {
    title: 'Terminal',
    path: '/dashboard/terminal',
    icon: <Terminal size={20} />
  },
  // In your sidebar configuration  
  {
  title: 'SSH',
  path: '/dashboard/ssh',
  icon: <Terminal size={20} />
  }
];

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <span className="text-xl font-bold">Phyra.ai</span>}
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-4">
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`
                flex items-center px-4 py-3 cursor-pointer
                ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
              `}
            >
              {item.icon}
              {isSidebarOpen && <span className="ml-3">{item.title}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation Bar */}
        <div className="bg-white shadow-sm">
          <div className="px-8 py-4 flex justify-end">
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md"
              >
                <User size={20} />
                <span>Admin</span>
                <ChevronDown size={16} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        navigate('/dashboard/profile');
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <Settings size={16} />
                      <span>Profile Settings</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
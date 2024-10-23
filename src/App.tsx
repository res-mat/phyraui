// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Layout from './components/Layout/Layout';
// // // import Home from './pages/Home';
// // // // import NotFound from './pages/NotFound';
// // // import './styles/global.css';

// // // const App: React.FC = () => {
// // //   return (
// // //     <Router>
// // //       <Layout>
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           {/* <Route path="*" element={<NotFound />} /> */}
// // //         </Routes>
// // //       </Layout>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';
// import Layout from './components/Layout/Layout';
// import Home from './pages/Home';
// import BlogList from './components/Blog/BlogList';
// import BlogPost from './components/Blog/BlogPost';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import ProtectedRoute from './components/Auth/ProtectedRoute';
// // import NotFound from './pages/NotFound';
// import './styles/global.css';

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <Router basename={process.env.PUBLIC_URL}>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blog" element={<BlogList posts={[]} />} />
//             <Route path="/blog/:id" element={<BlogPost title="" content="" date="" author="" />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route element={<ProtectedRoute />}>
//               {/* Add your protected routes here */}
//               <Route path="/dashboard" element={<div>Dashboard (Protected)</div>} />
//             </Route>
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//         </Layout>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


// // src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import { 
  DashboardLayout,
  Overview, 
  Logs, 
  FineTuning, 
  Projects,
  ProfileSettings,
  Deployments,
  Workflows,
  Components,
  MLPipeline,
  CostManagement,
  APIManagement
} from './components/Dashboard';
import Home from './pages/Home';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import EmailConfirmation from './components/Auth/EmailConfirmation';
import './styles/global.css';

// Wrap regular routes with main layout
const MainLayout: React.FC = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Public routes with main layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList posts={[]} />} />
            <Route path="/blog/:id" element={<BlogPost title="" content="" date="" author="" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
          </Route>

          {/* Protected Dashboard routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="logs" element={<Logs />} />
              <Route path="fine-tuning" element={<FineTuning />} />
              <Route path="projects" element={<Projects />} />
              <Route path="profile" element={<ProfileSettings />} />
              <Route path="workflows" element={<Workflows />} />
              <Route path="deployments" element={<Deployments />} />
              <Route path="components" element={<Components />} />
              <Route path="ml-pipeline" element={<MLPipeline />} />
              <Route path="cost-management" element={<CostManagement />} />
              <Route path="api-management" element={<APIManagement />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
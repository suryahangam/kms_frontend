import React, { useState } from 'react'
// import Home from './Home'
// import Cuisine from './Cuisine';
// import Searched from './Searched';
// import Recipe from './Recipe';
// import Dashboard from '../components/dashboard/Dashboard';
import SignUp from '../components/Signup';
import DashboardHome from '../components/dashboard/DashboardHome';
import ProjectList from './ProjectList';
import KnowledgeBucket from './KnowledgeBucket';
import BucketDetail from './BucketDetail';
import ClientList from './ClientList';
import Reports from './Reports';
import AnnouncementDisplayPage from './AnnouncementList';
import ProjectCreationForm from './forms/ProjectCreationForm';
import ClientCreationForm from './forms/ClientCreationForm';
import {Route, Routes} from 'react-router-dom';
// import SignIn from '../components/authentication/Login';
import PrivateRoute from '../components/authentication/PrivateRoute';
import Login from '../components/authentication/Login';
import { getToken } from '../components/authentication/TokenService';

import { AuthProvider } from '../components/authentication/auth';
import Logout from '../components/authentication/Logout';
import { Navigate } from 'react-router-dom';

function Pages() {

    const [authenticated, setAuthenticated] = useState(!!getToken());

    const handleLogin = () => {
      setAuthenticated(true);
      Navigate("/");
    };
  
    const handleLogout = () => {
      setAuthenticated(false);
      Navigate("/login")
    };

  return (
    <AuthProvider>
    <Routes>
        {/* <Home /> */}
        <Route path="/" element={<DashboardHome />}  />

        {/* <PrivateRoute path="/" component={DashboardHome} isLoggedIn={isLoggedIn} /> */}

        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/login" Component={() => <Login onLogin={handleLogin} />} />
        <Route path="/logout" element={< Logout onLogout={handleLogout} />} />

        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/knowledge-buckets" element={<KnowledgeBucket />} />
        <Route path="/bucket-detail/:bucket" element={<BucketDetail/>} />

        <Route path="/clients" element={<ClientList />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/announcements" element={<AnnouncementDisplayPage />} />

        <Route path="/project-create" element={<ProjectCreationForm />} />
        <Route path="/project-edit/:id" element={<ProjectCreationForm />} />

        <Route path="/client-create" element={<ClientCreationForm />} />

        {/* <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} /> */}
    </Routes>
    </AuthProvider>
  )
}

export default Pages;

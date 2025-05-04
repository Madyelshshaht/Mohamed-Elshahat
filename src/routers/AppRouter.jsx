import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Protect from '../components/ProtectAdmin/Protect';
import { ScaleLoader } from "react-spinners";



// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Skills = lazy(() => import('../pages/Skills'));
const Services = lazy(() => import('../pages/Services'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Admin = lazy(() => import('../pages/Admin'));
const AddProject = lazy(() => import('../components/AddProject/AddProject'));
const EditProject = lazy(() => import('../components/EditProject/EditProject'));
const ErrorPage = lazy(() => import('../Error/Error'));



const AppRouter = () => {
    const location = useLocation();
    return (
        <Suspense fallback={<div className="text-center text-xl p-10"><ScaleLoader color="#41c900" /></div>}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Protect />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/addproject" element={<AddProject />} />
                    <Route path="/edit/:id" element={<EditProject />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </Suspense>

    )
}
export default AppRouter;
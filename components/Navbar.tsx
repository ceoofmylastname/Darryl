import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Testing', path: '/testing' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
                    AOF
                </div>

                <div className="flex gap-1">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative px-4 py-2 text-sm font-medium transition-colors"
                            >
                                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                                    {link.name}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Home, Users, Settings, LogOut } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'dashboard' | 'admin';
  userName?: string;
}

export default function Navigation({ currentPage, userName }: NavigationProps) {
  const router = useRouter();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'dashboard', label: 'Dashboard', icon: Users, path: '/dashboard' },
    { id: 'admin', label: 'Admin', icon: Settings, path: '/admin' }
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-gray-900">Payman AI</h1>
            
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => router.push(item.path)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {userName && (
              <span className="text-sm text-gray-600">{userName}</span>
            )}
            <button 
              onClick={() => router.push('/login')}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import { LogIn, Users, Clock, Zap } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Payman AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert support platform connecting AI tool users to human experts when they get stuck. 
            Instant help for when AI fails.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/login')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <LogIn className="h-5 w-5" />
              <span>Expert Login</span>
            </button>
            <button
              onClick={() => router.push('/admin')}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Admin Dashboard
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Matching</h3>
            <p className="text-gray-600">Skill-based task routing ensures users get connected to the right expert instantly.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Clock className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Minute Sessions</h3>
            <p className="text-gray-600">Quick expert sessions designed to solve problems fast and get users unstuck.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Zap className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Support</h3>
            <p className="text-gray-600">WebRTC video sessions with live screen sharing and collaborative debugging.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Gets Stuck</h3>
              <p className="text-sm text-gray-600">AI tools work great until they don&apos;t. Users hit roadblocks.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Routing</h3>
              <p className="text-sm text-gray-600">Tasks automatically routed to experts with matching skills.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Connection</h3>
              <p className="text-sm text-gray-600">WebRTC video call with screen sharing starts immediately.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Problem Solved</h3>
              <p className="text-sm text-gray-600">Expert helps solve the issue in under 5 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
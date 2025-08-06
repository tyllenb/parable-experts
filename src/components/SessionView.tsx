'use client';

import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { Task } from '@/types';

interface SessionViewProps {
  task: Task;
  onCompleteTask: () => void;
}

export default function SessionView({ task, onCompleteTask }: SessionViewProps) {
  const [sessionTime] = useState('4:23'); // setSessionTime will be used for timer functionality

  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Active Session</h3>
          <p className="text-blue-700 text-sm">{task.type}</p>
        </div>
        <div className="flex items-center space-x-2 text-blue-700">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">{sessionTime}</span>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded mb-4">
        <p className="text-gray-800 mb-2">{task.description}</p>
        <p className="text-sm text-gray-500">User Level: {task.userLevel}</p>
      </div>
      
      {/* WebRTC Video Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Remote User Video */}
        <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            poster="/placeholder-user.jpg"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            User
          </div>
        </div>
        
        {/* Expert Video (Picture-in-picture style) */}
        <div className="bg-gray-800 rounded-lg aspect-video relative overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            You
          </div>
        </div>
      </div>
      
      {/* Video Controls */}
      <div className="flex justify-center space-x-4 mb-4">
        <button className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700 text-sm transition-colors">
          🎤 Mute
        </button>
        <button className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700 text-sm transition-colors">
          📹 Video
        </button>
        <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm transition-colors">
          🖥️ Share Screen
        </button>
        <button className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 text-sm transition-colors">
          📞 End Call
        </button>
      </div>
      
      <div className="flex space-x-3">
        <button 
          onClick={onCompleteTask}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm font-medium transition-colors"
        >
          ✓ Complete
        </button>
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm font-medium transition-colors">
          Need Help
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm font-medium transition-colors">
          Transfer
        </button>
      </div>
    </div>
  );
}
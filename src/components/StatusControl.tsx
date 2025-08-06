'use client';

import React from 'react';
import { Play, Pause } from 'lucide-react';

interface StatusControlProps {
  status: 'available' | 'busy' | 'break';
  onStatusChange: (status: 'available' | 'busy' | 'break') => void;
}

export default function StatusControl({ status, onStatusChange }: StatusControlProps) {
  const getStatusColor = (currentStatus: string) => {
    switch(currentStatus) {
      case 'available':
        return 'bg-green-500';
      case 'busy':
        return 'bg-red-500';
      case 'break':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleStatusToggle = () => {
    if (status !== 'busy') {
      const newStatus = status === 'available' ? 'break' : 'available';
      onStatusChange(newStatus);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-900">Status: </span>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`}></div>
            <span className="text-sm text-gray-600 capitalize">{status}</span>
          </div>
        </div>
        
        {status !== 'busy' && (
          <button 
            onClick={handleStatusToggle}
            className={`flex items-center space-x-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
              status === 'available' 
                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {status === 'available' ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            <span>{status === 'available' ? 'Take Break' : 'Go Available'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
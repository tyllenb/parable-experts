'use client';

import React, { useState } from 'react';
import { LogOut, Pause } from 'lucide-react';
import TaskQueue from '@/components/TaskQueue';
import StatusControl from '@/components/StatusControl';
import SessionView from '@/components/SessionView';
import DailyStats from '@/components/DailyStats';
import { useWebSocket } from '@/hooks/useWebSocket';
import { Task } from '@/types';

export default function ExpertDashboard() {
  const [status, setStatus] = useState<'available' | 'busy' | 'break'>('available');
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [expertName] = useState('Alex Johnson');
  const { tasks, isConnected } = useWebSocket('expert-1');

  const handleAcceptTask = (task: Task) => {
    setCurrentTask(task);
    setStatus('busy');
  };

  const handleCompleteTask = () => {
    setCurrentTask(null);
    setStatus('available');
  };

  const handleStatusChange = (newStatus: 'available' | 'busy' | 'break') => {
    setStatus(newStatus);
  };

  const dailyStats = {
    completed: 8,
    avgTime: '3.8 min',
    hoursWorked: '5.2 hrs'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold text-gray-900">Expert Dashboard</h1>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-xs text-gray-500">{isConnected ? 'Connected' : 'Disconnected'}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{expertName}</span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        
        {/* Status Control */}
        <StatusControl 
          status={status}
          onStatusChange={handleStatusChange}
        />

        {/* Current Task Session */}
        {currentTask && (
          <SessionView 
            task={currentTask}
            onCompleteTask={handleCompleteTask}
          />
        )}

        {/* Available Tasks */}
        {status === 'available' && !currentTask && (
          <TaskQueue 
            tasks={tasks}
            onAcceptTask={handleAcceptTask}
            isAvailable={status === 'available'}
          />
        )}

        {/* Break Status */}
        {status === 'break' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mb-6">
            <Pause className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-yellow-900 mb-2">On Break</h3>
            <p className="text-yellow-700 text-sm mb-4">Tasks will be routed to other experts</p>
          </div>
        )}

        {/* Daily Stats */}
        <DailyStats stats={dailyStats} />
      </div>
    </div>
  );
}
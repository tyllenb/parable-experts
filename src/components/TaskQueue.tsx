'use client';

import React from 'react';
import { Clock, User, CheckCircle } from 'lucide-react';
import { Task } from '@/types';

interface TaskQueueProps {
  tasks: Task[];
  onAcceptTask: (task: Task) => void;
  isAvailable: boolean;
}

export default function TaskQueue({ tasks, onAcceptTask, isAvailable }: TaskQueueProps) {
  if (!isAvailable) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Your Tasks</h2>
        <p className="text-sm text-gray-600">Matched to your skills</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <div key={task.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{task.type}</h3>
                <p className="text-gray-700 mb-3">{task.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{task.userLevel}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Waiting {task.waitTime}</span>
                  </span>
                </div>
                
                <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
                  ✓ {task.matchReason}
                </div>
              </div>
              
              <div className="ml-6">
                <button 
                  onClick={() => onAcceptTask(task)}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {tasks.length === 0 && (
          <div className="p-8 text-center">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-500 text-sm">No tasks in your skill areas right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
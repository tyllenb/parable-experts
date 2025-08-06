'use client';

import { useEffect, useState } from 'react';
import { Task } from '@/types';

interface UseWebSocketReturn {
  tasks: Task[];
  isConnected: boolean;
  sendMessage: (message: Record<string, unknown>) => void;
}

export function useWebSocket(expertId: string): UseWebSocketReturn {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Mock WebSocket connection for development
    // In production, this would connect to actual WebSocket server
    
    setIsConnected(true);
    
    // Mock initial tasks
    const mockTasks: Task[] = [
      {
        id: '1',
        type: 'Cursor Deployment Issue',
        description: 'Next.js app builds locally but fails on Vercel deployment. Build logs show module not found error.',
        userLevel: 'Beginner',
        waitTime: '3 min',
        matchReason: 'Matches your Cursor + Deployment expertise',
        requiredSkills: ['Frontend', 'Deployment'],
        status: 'pending',
        priority: 'medium',
        createdAt: new Date()
      },
      {
        id: '2',
        type: 'React Component Bug',
        description: 'Component renders but state updates not working. Using useState hook but UI not updating.',
        userLevel: 'Intermediate',
        waitTime: '1 min',
        matchReason: 'Matches your Frontend expertise',
        requiredSkills: ['Frontend', 'React'],
        status: 'pending',
        priority: 'high',
        createdAt: new Date()
      }
    ];
    
    setTasks(mockTasks);
    
    // Simulate real-time task updates
    const interval = setInterval(() => {
      // In production, this would listen for WebSocket events
      console.log('WebSocket heartbeat for expert:', expertId);
    }, 30000);
    
    return () => {
      setIsConnected(false);
      clearInterval(interval);
    };
  }, [expertId]);

  const sendMessage = (message: Record<string, unknown>) => {
    // In production, this would send messages via WebSocket
    console.log('Sending WebSocket message:', message);
  };

  return {
    tasks,
    isConnected,
    sendMessage
  };
}
import { Expert, Task, SystemStats } from '@/types';

// Mock API service for development
// In production, these would be actual API calls to your backend

export class PaymanAPI {
  // Expert methods
  static async getExpert(id: string): Promise<Expert> {
    // Mock expert data
    return {
      id,
      name: 'Alex Johnson',
      email: 'alex@payman.ai',
      skills: ['Frontend', 'Cursor', 'React', 'Deployment'],
      status: 'available',
      dailyStats: {
        completed: 8,
        avgTime: 3.8,
        hoursWorked: 5.2
      },
      rating: 4.9
    };
  }

  static async updateExpertStatus(_expertId: string, status: Expert['status']): Promise<void> {
    console.log(`Updating expert status to ${status}`);
    // In production: await fetch('/api/experts/status', { method: 'PUT', ... })
  }

  // Task methods
  static async getTasksForExpert(_expertId: string): Promise<Task[]> {
    // Mock tasks filtered by expert skills
    return [
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
        matchReason: 'Matches your Frontend + React expertise',
        requiredSkills: ['Frontend', 'React'],
        status: 'pending',
        priority: 'high',
        createdAt: new Date()
      }
    ];
  }

  static async acceptTask(taskId: string, expertId: string): Promise<void> {
    console.log(`Expert ${expertId} accepting task ${taskId}`);
    // In production: await fetch('/api/tasks/accept', { method: 'POST', ... })
  }

  static async completeTask(taskId: string): Promise<void> {
    console.log(`Completing task ${taskId}`);
    // In production: await fetch('/api/tasks/complete', { method: 'POST', ... })
  }

  // Admin methods
  static async getSystemStats(): Promise<SystemStats> {
    return {
      activeExperts: 12,
      availableExperts: 8,
      busyExperts: 4,
      pendingTasks: 6,
      avgResponseTime: '1.2 min',
      successRate: '94%'
    };
  }

  static async getAllExperts(): Promise<Expert[]> {
    return [
      {
        id: '1',
        name: 'Alex Johnson',
        email: 'alex@payman.ai',
        status: 'busy',
        skills: ['Frontend', 'Cursor'],
        currentTask: 'Cursor Deployment Issue',
        dailyStats: { completed: 8, avgTime: 3.8, hoursWorked: 5.2 },
        rating: 4.9
      },
      {
        id: '2',
        name: 'Sarah Chen',
        email: 'sarah@payman.ai',
        status: 'available',
        skills: ['Backend', 'APIs'],
        dailyStats: { completed: 6, avgTime: 4.1, hoursWorked: 4.5 },
        rating: 4.8
      },
      {
        id: '3',
        name: 'Mike Rodriguez',
        email: 'mike@payman.ai',
        status: 'break',
        skills: ['Mobile', 'React Native'],
        dailyStats: { completed: 5, avgTime: 5.2, hoursWorked: 3.8 },
        rating: 4.7
      },
      {
        id: '4',
        name: 'Emma Wilson',
        email: 'emma@payman.ai',
        status: 'available',
        skills: ['UI/UX', 'Design'],
        dailyStats: { completed: 9, avgTime: 3.2, hoursWorked: 6.1 },
        rating: 4.9
      }
    ];
  }

  static async getAllPendingTasks(): Promise<Task[]> {
    return [
      {
        id: '1',
        type: 'Database Connection',
        description: 'Supabase connection failing with authentication error',
        userLevel: 'Beginner',
        waitTime: '2m 15s',
        requiredSkills: ['Backend', 'Database'],
        priority: 'medium',
        autoRouted: false,
        status: 'pending',
        matchReason: 'Backend expertise required',
        createdAt: new Date()
      },
      {
        id: '2',
        type: 'React Component Bug',
        description: 'useState hook not triggering re-renders properly',
        userLevel: 'Intermediate',
        waitTime: '45s',
        requiredSkills: ['Frontend', 'React'],
        assignedTo: 'Sarah Chen',
        priority: 'high',
        autoRouted: true,
        status: 'assigned',
        matchReason: 'React expertise match',
        createdAt: new Date()
      },
      {
        id: '3',
        type: 'Vercel Deployment',
        description: 'Build process fails with module resolution error',
        userLevel: 'Beginner',
        waitTime: '5m 32s',
        requiredSkills: ['DevOps', 'Deployment'],
        priority: 'high',
        autoRouted: false,
        status: 'pending',
        matchReason: 'Deployment expertise needed',
        createdAt: new Date()
      }
    ];
  }

  static async assignTask(taskId: string, expertId: string): Promise<void> {
    console.log(`Manually assigning task ${taskId} to expert ${expertId}`);
    // In production: await fetch('/api/tasks/assign', { method: 'POST', ... })
  }
}

// WebSocket event types for real-time updates
export interface WebSocketEvents {
  'task:new': Task;
  'task:assigned': { taskId: string; expertId: string };
  'task:completed': { taskId: string };
  'expert:status_change': { expertId: string; status: Expert['status'] };
  'system:stats_update': SystemStats;
}
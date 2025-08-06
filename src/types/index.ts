// Core data models for Payman AI Expert Platform

export interface Expert {
  id: string;
  name: string;
  email: string;
  skills: string[];
  status: 'available' | 'busy' | 'break' | 'offline';
  currentTask?: string;
  dailyStats: {
    completed: number;
    avgTime: number;
    hoursWorked: number;
  };
  rating?: number;
}

export interface Task {
  id: string;
  type: string;
  description: string;
  requiredSkills: string[];
  userLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  assignedTo?: string;
  status: 'pending' | 'assigned' | 'active' | 'completed';
  priority: 'low' | 'medium' | 'high';
  matchReason: string;
  waitTime?: string;
  sessionTime?: string;
  autoRouted?: boolean;
  createdAt: Date;
}

export interface SystemStats {
  activeExperts: number;
  availableExperts: number;
  busyExperts: number;
  pendingTasks: number;
  avgResponseTime: string;
  successRate: string;
}
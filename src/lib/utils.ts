import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Time formatting utilities
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatWaitTime(timestamp: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - timestamp.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  
  if (diffMinutes < 1) {
    return 'Just now';
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else {
    const diffHours = Math.floor(diffMinutes / 60);
    return `${diffHours}h ago`;
  }
}

// Status color utilities
export function getStatusColor(status: string): string {
  const statusColors = {
    available: 'text-green-600 bg-green-100',
    busy: 'text-red-600 bg-red-100',
    break: 'text-yellow-600 bg-yellow-100',
    offline: 'text-gray-600 bg-gray-100'
  };
  
  return statusColors[status as keyof typeof statusColors] || statusColors.offline;
}

export function getPriorityColor(priority: string): string {
  const priorityColors = {
    high: 'text-red-600 bg-red-100',
    medium: 'text-yellow-600 bg-yellow-100',
    low: 'text-green-600 bg-green-100'
  };
  
  return priorityColors[priority as keyof typeof priorityColors] || priorityColors.medium;
}

// Skill matching utilities
export function calculateSkillMatch(taskSkills: string[], expertSkills: string[]): number {
  const matchingSkills = taskSkills.filter(skill => 
    expertSkills.some(expertSkill => 
      expertSkill.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(expertSkill.toLowerCase())
    )
  );
  
  return Math.round((matchingSkills.length / taskSkills.length) * 100);
}

export function generateMatchReason(taskSkills: string[], expertSkills: string[]): string {
  const matchingSkills = taskSkills.filter(skill => 
    expertSkills.some(expertSkill => 
      expertSkill.toLowerCase().includes(skill.toLowerCase()) ||
      skill.toLowerCase().includes(expertSkill.toLowerCase())
    )
  );
  
  if (matchingSkills.length === 0) {
    return 'General expertise match';
  } else if (matchingSkills.length === 1) {
    return `Matches your ${matchingSkills[0]} expertise`;
  } else {
    return `Matches your ${matchingSkills.slice(0, -1).join(', ')} + ${matchingSkills.slice(-1)} expertise`;
  }
}

// API response utilities
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}

// Local storage utilities for session data
export const sessionStorage = {
  getExpertSession: () => {
    if (typeof window === 'undefined') return null;
    const session = localStorage.getItem('expert-session');
    return session ? JSON.parse(session) : null;
  },
  
  setExpertSession: (expertId: string, name: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('expert-session', JSON.stringify({ expertId, name }));
  },
  
  clearExpertSession: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('expert-session');
  }
};

// Constants
export const SKILL_OPTIONS = [
  'Frontend',
  'Backend', 
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Database',
  'PostgreSQL',
  'MongoDB',
  'API Development',
  'DevOps',
  'Deployment',
  'Vercel',
  'AWS',
  'Docker',
  'Cursor',
  'Git',
  'UI/UX',
  'Design',
  'Mobile',
  'React Native',
  'Testing'
];

export const USER_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;
export const TASK_PRIORITIES = ['low', 'medium', 'high'] as const;
export const EXPERT_STATUSES = ['available', 'busy', 'break', 'offline'] as const;
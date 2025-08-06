'use client';

import React from 'react';
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Settings,
  Filter,
  RefreshCw,
  Zap,
  Eye,
  ArrowRight,
  Circle
} from 'lucide-react';
import { Expert, Task, SystemStats } from '@/types';

export default function AdminDashboard() {
  // Filter functionality can be implemented later
  // const [activeFilter, setActiveFilter] = useState('all');

  // Mock data for admin overview
  const systemStats: SystemStats = {
    activeExperts: 12,
    availableExperts: 8,
    busyExperts: 4,
    pendingTasks: 6,
    avgResponseTime: '1.2 min',
    successRate: '94%'
  };

  const experts: Expert[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      status: 'busy',
      skills: ['Frontend', 'Cursor'],
      currentTask: 'Cursor Deployment Issue',
      dailyStats: {
        completed: 8,
        avgTime: 3.8,
        hoursWorked: 5.2
      },
      rating: 4.9
    },
    {
      id: '2',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      status: 'available',
      skills: ['Backend', 'APIs'],
      dailyStats: {
        completed: 6,
        avgTime: 4.1,
        hoursWorked: 4.5
      },
      rating: 4.8
    },
    {
      id: '3',
      name: 'Mike Rodriguez',
      email: 'mike@example.com',
      status: 'break',
      skills: ['Mobile', 'React Native'],
      dailyStats: {
        completed: 5,
        avgTime: 5.2,
        hoursWorked: 3.8
      },
      rating: 4.7
    },
    {
      id: '4',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      status: 'available',
      skills: ['UI/UX', 'Design'],
      dailyStats: {
        completed: 9,
        avgTime: 3.2,
        hoursWorked: 6.1
      },
      rating: 4.9
    }
  ];

  const pendingTasks: Task[] = [
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

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'busy': return 'text-red-600 bg-red-100';
      case 'break': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const manualAssign = (taskId: string, expertName: string) => {
    console.log(`Manually assigning task ${taskId} to ${expertName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Circle className="h-2 w-2 text-green-500 fill-current" />
                <span>System Online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-5 w-5" />
              </button>
              <div className="text-sm font-medium text-gray-700">Admin</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Experts</p>
                <p className="text-2xl font-semibold text-gray-900">{systemStats.activeExperts}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Available</p>
                <p className="text-2xl font-semibold text-green-600">{systemStats.availableExperts}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Busy</p>
                <p className="text-2xl font-semibold text-red-600">{systemStats.busyExperts}</p>
              </div>
              <Clock className="h-8 w-8 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</p>
                <p className="text-2xl font-semibold text-orange-600">{systemStats.pendingTasks}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</p>
                <p className="text-2xl font-semibold text-gray-900">{systemStats.avgResponseTime}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</p>
                <p className="text-2xl font-semibold text-green-600">{systemStats.successRate}</p>
              </div>
              <Zap className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Task Queue - Priority View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Task Queue</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{pendingTasks.length} pending</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Filter className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{task.type}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority} priority
                          </span>
                          {task.autoRouted ? (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                              Auto-routed
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">
                              Manual needed
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-2">{task.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <span>User: {task.userLevel}</span>
                          <span>Waiting: {task.waitTime}</span>
                          <span>Skills: {task.requiredSkills.join(', ')}</span>
                        </div>
                        
                        {task.assignedTo && (
                          <div className="flex items-center space-x-2 text-sm">
                            <ArrowRight className="h-4 w-4 text-green-500" />
                            <span className="text-green-700 font-medium">Assigned to {task.assignedTo}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-6 flex flex-col space-y-2">
                        {!task.assignedTo && (
                          <select 
                            className="text-sm border border-gray-300 rounded px-3 py-1"
                            onChange={(e) => manualAssign(task.id, e.target.value)}
                            defaultValue=""
                          >
                            <option value="">Assign to...</option>
                            {experts.filter(e => e.status === 'available').map(expert => (
                              <option key={expert.id} value={expert.name}>{expert.name}</option>
                            ))}
                          </select>
                        )}
                        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {pendingTasks.length === 0 && (
                  <div className="p-8 text-center">
                    <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">All Tasks Handled</h3>
                    <p className="text-gray-500">No pending tasks in the queue.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Expert Status Panel */}
          <div>
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Expert Status</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {experts.map((expert) => (
                  <div key={expert.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{expert.name}</h3>
                        <p className="text-xs text-gray-500">{expert.skills.join(', ')}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(expert.status)}`}>
                        {expert.status}
                      </span>
                    </div>
                    
                    {expert.currentTask && (
                      <div className="bg-blue-50 p-2 rounded text-xs mb-2">
                        <p className="text-blue-900 font-medium">{expert.currentTask}</p>
                        <p className="text-blue-700">Active: 4:23</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
                      <div>
                        <span className="font-medium">{expert.dailyStats.completed}</span>
                        <div>completed</div>
                      </div>
                      <div>
                        <span className="font-medium">{expert.dailyStats.avgTime}m</span>
                        <div>avg time</div>
                      </div>
                      <div>
                        <span className="font-medium">{expert.rating}</span>
                        <div>rating</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              
              <div className="p-4 space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  📊 View Analytics
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  👥 Manage Experts
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  ⚙️ Routing Settings
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  📈 Performance Reports
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  🚨 Alert Settings
                </button>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-lg shadow mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">System Health</h2>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">WebRTC Status</span>
                  <span className="text-green-600 font-medium">✓ Healthy</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Database</span>
                  <span className="text-green-600 font-medium">✓ Connected</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Queue Processing</span>
                  <span className="text-green-600 font-medium">✓ Normal</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Expert Connections</span>
                  <span className="text-green-600 font-medium">✓ Stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
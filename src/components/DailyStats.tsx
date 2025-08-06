'use client';

import React from 'react';

interface DailyStatsProps {
  stats: {
    completed: number;
    avgTime: string;
    hoursWorked: string;
  };
}

export default function DailyStats({ stats }: DailyStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Today</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xl font-bold text-gray-900">{stats.completed}</div>
          <div className="text-xs text-gray-600">Completed</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">{stats.avgTime}</div>
          <div className="text-xs text-gray-600">Avg Time</div>
        </div>
        <div>
          <div className="text-xl font-bold text-gray-900">{stats.hoursWorked}</div>
          <div className="text-xs text-gray-600">Active</div>
        </div>
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

export interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  trend: {
    value: string;
    isPositive: boolean;
  };
}

export interface RecentActivityItem {
  id: number;
  icon: ReactNode;
  description: string;
  time: string;
}

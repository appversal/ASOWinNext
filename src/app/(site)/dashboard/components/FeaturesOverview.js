'use client';

import { mockFeatures } from '@/lib/mock-data/reviews';
import {
  Brain,
  MessageSquare,
  Zap,
  Ticket,
  Clock,
  BarChart3,
} from 'lucide-react';

const iconMap = {
  Brain: Brain,
  MessageSquare: MessageSquare,
  Zap: Zap,
  Ticket: Ticket,
  Clock: Clock,
  BarChart3: BarChart3,
};

export function FeaturesOverview() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFeatures.map((feature) => {
          const IconComponent = iconMap[feature.icon] || Brain;
          return (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-[#014458]/10 rounded-lg">
                  <IconComponent className="text-[#014458]" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.capabilities.map((capability, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-xs text-gray-700"
                  >
                    <span className="text-[#fdb124] mt-1">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

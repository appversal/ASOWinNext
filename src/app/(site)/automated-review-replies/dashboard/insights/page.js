'use client';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { DashboardLayout } from '../components/DashboardLayout';
import { TrendingUp, MessageCircle, Star } from 'lucide-react';

export default function InsightsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Insights & Reports</h1>
            <p className="text-gray-600 mt-1">Weekly and monthly performance analytics</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Reviews</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">1,247</p>
                  <p className="text-xs text-green-600 mt-2">↑ 12% from last week</p>
                </div>
                <MessageCircle className="text-[#014458]" size={40} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Average Rating</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">4.2</p>
                  <p className="text-xs text-green-600 mt-2">↑ 0.1 from last week</p>
                </div>
                <Star className="text-yellow-400" size={40} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Response Rate</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">89%</p>
                  <p className="text-xs text-green-600 mt-2">↑ 5% from last week</p>
                </div>
                <TrendingUp className="text-[#014458]" size={40} />
              </div>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Summary</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">This Week</p>
                <p className="text-sm text-gray-600 mt-1">
                  • 156 new reviews received
                  <br />
                  • 142 reviews replied to (91% auto-reply rate)
                  <br />
                  • 3 urgent tickets created from 1-star reviews
                  <br />
                  • 89 customers marked replies as helpful
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for charts */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Sentiment Trend (30 Days)</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart visualization coming soon...</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

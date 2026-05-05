'use client';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { DashboardLayout } from '../components/DashboardLayout';
import { ReviewsList } from '../components/ReviewsList';

export default function ReviewsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">All Reviews</h1>
            <p className="text-gray-600 mt-1">Complete list of all app reviews and replies</p>
          </div>
          <ReviewsList />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

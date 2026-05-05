'use client';

import { useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/DashboardLayout';
import { PromptInput } from './components/PromptInput';
import { ReviewsList } from './components/ReviewsList';
import { FeaturesOverview } from './components/FeaturesOverview';

export default function DashboardPage() {
  const [generatedReply, setGeneratedReply] = useState(null);

  const handleGenerateReply = (data) => {
    setGeneratedReply(data);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your automated review replies</p>
          </div>

          {/* Features Overview */}
          <FeaturesOverview />

          {/* Prompt Input Section */}
          <PromptInput onGenerate={handleGenerateReply} />

          {/* Generated Reply Feedback */}
          {generatedReply && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Reply Generated!</h3>
              <p className="text-green-800 text-sm">{generatedReply.reply}</p>
            </div>
          )}

          {/* Reviews List */}
          <ReviewsList />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

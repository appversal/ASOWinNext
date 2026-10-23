'use client';

import { useState } from 'react';
import { Save, Loader } from 'lucide-react';

export function PromptInput({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockReply = `Thank you for your feedback! We appreciate you taking the time to share your thoughts. Your input helps us continuously improve our service and deliver better results for your app.`;

    onGenerate({
      prompt,
      reply: mockReply,
      timestamp: new Date(),
    });

    setPrompt('');
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Set your Reply Prompt</h2>
      <p className="text-sm text-gray-600 mb-4">
        Provide context or specific instructions for AI to generate a personalized reply to a review.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt Instructions
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., 'Customer complained about slow sync feature. Generate an empathetic response acknowledging the issue and offering solutions.'"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014458] focus:border-transparent outline-none transition resize-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="flex items-center space-x-2 px-6 py-2 bg-[#014458] hover:bg-[#003a47] text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin" size={18} />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save size={18} />
                <span>Save as System Prompt</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

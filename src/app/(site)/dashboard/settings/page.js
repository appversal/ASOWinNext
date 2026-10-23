'use client';

import { ProtectedRoute } from '../components/ProtectedRoute';
import { DashboardLayout } from '../components/DashboardLayout';
import { Save } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    brandPersonality: 'Friendly, professional, motivational',
    tone: 'Supportive and encouraging',
    autoTicket: true,
    autoTicketRating: 1,
    language: 'English',
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Configure your dashboard preferences</p>
          </div>

          {/* Brand Configuration */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Brand Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Personality
                </label>
                <textarea
                  value={settings.brandPersonality}
                  onChange={(e) =>
                    setSettings({ ...settings, brandPersonality: e.target.value })
                  }
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014458] outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Describe your brand's personality and voice
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Communication Tone
                </label>
                <textarea
                  value={settings.tone}
                  onChange={(e) => setSettings({ ...settings, tone: e.target.value })}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014458] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014458] outline-none"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
            </div>
          </div>

          {/* Automation Rules */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Automation Rules</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto-create support tickets</p>
                  <p className="text-sm text-gray-600">
                    Automatically create tickets for 1-star reviews
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.autoTicket}
                  onChange={(e) => setSettings({ ...settings, autoTicket: e.target.checked })}
                  className="w-5 h-5 rounded cursor-pointer"
                />
              </div>

              {settings.autoTicket && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Create tickets for reviews rated:
                  </label>
                  <select
                    value={settings.autoTicketRating}
                    onChange={(e) =>
                      setSettings({ ...settings, autoTicketRating: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#014458] outline-none"
                  >
                    <option value={1}>1-star reviews only</option>
                    <option value={2}>1-2 star reviews</option>
                    <option value={3}>1-3 star reviews</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-[#014458] hover:bg-[#003a47] text-white font-semibold rounded-lg transition"
            >
              <Save size={20} />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

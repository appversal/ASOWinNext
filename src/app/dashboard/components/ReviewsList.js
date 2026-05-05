'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Clock, AlertCircle, Ticket } from 'lucide-react';
import { mockReviews } from '@/lib/mock-data/reviews';

const statusConfig = {
  replied: {
    icon: CheckCircle,
    bg: 'bg-green-50',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
    label: 'Replied',
  },
  pending: {
    icon: Clock,
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800',
    label: 'Pending',
  },
  ticket_created: {
    icon: Ticket,
    bg: 'bg-red-50',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-800',
    label: 'Ticket Created',
  },
};

function StarRating({ rating }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review, isOpen, onToggle }) {
  const config = statusConfig[review.status];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 hover:shadow-lg transition-shadow">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className={config.text} size={20} />
            <h3 className="font-semibold text-gray-900">{review.appName}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.badge}`}>
              {config.label}
            </span>
          </div>
          <p className="text-gray-700 text-sm mb-3">{review.reviewText}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <span>By {review.reviewerName}</span>
              <StarRating rating={review.rating} />
              <span>On {review.platform}</span>
            </div>
            <span>{new Date(review.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="ml-4">
          {isOpen ? (
            <ChevronUp className="text-gray-400" size={24} />
          ) : (
            <ChevronDown className="text-gray-400" size={24} />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <div className="space-y-4">
            {/* Generated Reply */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-Generated Reply</h4>
              <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700">
                {review.aiGeneratedReply}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 pt-4">
              {review.status === 'pending' && (
                <>
                  <button className="px-4 py-2 bg-[#014458] text-white rounded hover:bg-[#003a47] transition text-sm font-medium">
                    Approve & Send
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm font-medium">
                    Reject
                  </button>
                </>
              )}
              {review.status === 'replied' && (
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm font-medium">
                  Edit Reply
                </button>
              )}
              {review.status === 'ticket_created' && (
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm font-medium">
                  View Ticket
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ReviewsList() {
  const [expandedId, setExpandedId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredReviews =
    filterStatus === 'all'
      ? mockReviews
      : mockReviews.filter((r) => r.status === filterStatus);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Reviews & Replies</h2>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Filter by:</label>
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setExpandedId(null);
            }}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#014458] focus:border-transparent outline-none"
          >
            <option value="all">All Reviews</option>
            <option value="replied">Replied</option>
            <option value="pending">Pending</option>
            <option value="ticket_created">Tickets</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {mockReviews.filter((r) => r.status === 'replied').length}
          </div>
          <div className="text-xs text-gray-600">Replied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {mockReviews.filter((r) => r.status === 'pending').length}
          </div>
          <div className="text-xs text-gray-600">Pending</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {mockReviews.filter((r) => r.status === 'ticket_created').length}
          </div>
          <div className="text-xs text-gray-600">Tickets</div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            isOpen={expandedId === review.id}
            onToggle={() =>
              setExpandedId(expandedId === review.id ? null : review.id)
            }
          />
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No reviews found for this filter.</p>
        </div>
      )}
    </div>
  );
}

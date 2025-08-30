import React from 'react';
import { ArrowUp, ArrowDown, MessageCircle, Eye, Clock, User, Shield } from 'lucide-react';

export const PostCard = ({ post, categoryInfo, onClick }) => {
  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return `${Math.floor(diffInDays / 7)}w ago`;
  };

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
    >
      <div className="flex items-start space-x-4">
        {/* Voting Section */}
        <div className="flex flex-col items-center space-y-2 min-w-[60px]">
          <button 
            className={`p-1 rounded transition-colors ${
              post.isUpvoted ? 'text-green-400 bg-green-400/20' : 'text-gray-400 hover:text-green-400'
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <span className="text-white font-medium">{post.upvotes - post.downvotes}</span>
          <button 
            className={`p-1 rounded transition-colors ${
              post.isDownvoted ? 'text-red-400 bg-red-400/20' : 'text-gray-400 hover:text-red-400'
            }`}
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Post Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-3">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color} text-white`}>
              {categoryInfo.name}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              {post.isAnonymous ? (
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Anonymous</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              )}
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{formatTimeAgo(post.createdAt)}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
            {post.title}
          </h3>

          {/* Content Preview */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{formatNumber(post.views)} views</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{formatNumber(post.comments)} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { PostList } from './components';
import { Plus, Filter, Search, TrendingUp, Clock, MessageCircle } from 'lucide-react';

export const Community = ({ navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [activeView, setActiveView] = useState('feed'); // feed, create, post
  const [selectedPost, setSelectedPost] = useState(null);
  const [sortBy, setSortBy] = useState('recent'); // recent, popular, trending
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const categories = [
    { id: 'all', name: 'All Posts', color: 'bg-blue-500' },
    { id: 'algorithms', name: 'Algorithms', color: 'bg-green-500' },
    { id: 'interview', name: 'Interview Experience', color: 'bg-purple-500' },
    { id: 'help', name: 'Need Help', color: 'bg-red-500' },
    { id: 'discussion', name: 'General Discussion', color: 'bg-yellow-500' },
    { id: 'tips', name: 'Tips & Tricks', color: 'bg-indigo-500' },
    { id: 'career', name: 'Career Advice', color: 'bg-pink-500' }
      
  ];

  const handleCreatePost = () => {
    setActiveView('create');
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setActiveView('post');
  };

  const handleBackToFeed = () => {
    setActiveView('feed');
    setSelectedPost(null);
  };
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  }
  const renderActiveView = () => {
    switch (activeView) {
      case 'create':
        return (
          <CreatePost
            categories={categories}
            onBack={handleBackToFeed}
            onPostCreated={handleBackToFeed}
          />
        );
      case 'post':
        return (
          <PostDetail
            post={selectedPost}
            onBack={handleBackToFeed}
          />
        );
      default:
        return (
          <PostList
            sortBy={sortBy}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onPostClick={handlePostClick}
            categories={categories}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Community Discussion" 
        showBackButton={activeView !== 'feed'}
        backAction={activeView !== 'feed' ? handleBackToFeed : onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section - Only show on feed view */}
        {activeView === 'feed' && (
          <>
            {/* Community Stats & Actions */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Community Discussion</h2>
                    <p className="text-gray-300">Share knowledge, ask questions, and connect with fellow coders</p>
                  </div>
                  <button 
                    onClick={handleCreatePost}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium"
                  >
                    <Plus className="w-5 h-5" />
                    <span>New Post</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-4 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? `${category.color} text-white`
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${category.color}`}></div>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search & Sort */}
            <div className="mb-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 w-64 pl-10"
                      />
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSortBy('recent')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        sortBy === 'recent' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>Recent</span>
                    </button>
                    <button
                      onClick={() => setSortBy('popular')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        sortBy === 'popular' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Popular</span>
                    </button>
                    <button
                      onClick={() => setSortBy('trending')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        sortBy === 'trending' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Most Discussed</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Dynamic Content */}
        {renderActiveView()}
      </div>
    </div>
  );
};

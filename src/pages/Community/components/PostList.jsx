import React from 'react';
import { PostCard } from './PostCard';

export const PostList = ({ sortBy, selectedCategory, searchQuery, onPostClick, categories }) => {
  // Mock posts data
  const mockPosts = [
    {
      id: 1,
      title: "How to approach Dynamic Programming problems?",
      content: "I'm struggling with DP problems. Can someone share their approach and tips?",
      author: "CodeLearner123",
      isAnonymous: false,
      category: "help",
      tags: ["dynamic-programming", "algorithms"],
      upvotes: 24,
      downvotes: 2,
      views: 342,
      comments: 18,
      createdAt: "2025-08-30T08:30:00Z",
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 2,
      title: "Anonymous: Got offer from FAANG after 6 months practice",
      content: "Just wanted to share my journey. Started from zero coding knowledge...",
      author: "Anonymous",
      isAnonymous: true,
      category: "interview",
      tags: ["interview", "success-story", "faang"],
      upvotes: 156,
      downvotes: 8,
      views: 2341,
      comments: 45,
      createdAt: "2025-08-29T14:22:00Z",
      isUpvoted: true,
      isDownvoted: false
    },
    {
      id: 3,
      title: "Best way to implement Binary Search Tree?",
      content: "Looking for clean, efficient BST implementation in JavaScript",
      author: "DevGuru99",
      isAnonymous: false,
      category: "algorithms",
      tags: ["binary-search-tree", "javascript", "data-structures"],
      upvotes: 67,
      downvotes: 3,
      views: 892,
      comments: 23,
      createdAt: "2025-08-29T11:15:00Z",
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 4,
      title: "Anonymous: Failed Google interview - lessons learned",
      content: "Sharing my experience and mistakes to help others avoid them...",
      author: "Anonymous",
      isAnonymous: true,
      category: "interview",
      tags: ["interview", "google", "failure", "lessons"],
      upvotes: 89,
      downvotes: 12,
      views: 1456,
      comments: 31,
      createdAt: "2025-08-28T16:45:00Z",
      isUpvoted: false,
      isDownvoted: false
    },
    {
      id: 5,
      title: "Career advice: Junior to Senior in 2 years",
      content: "Here's how I progressed from junior to senior developer...",
      author: "TechSenior",
      isAnonymous: false,
      category: "career",
      tags: ["career", "growth", "advice"],
      upvotes: 234,
      downvotes: 15,
      views: 3421,
      comments: 67,
      createdAt: "2025-08-27T09:30:00Z",
      isUpvoted: false,
      isDownvoted: false
    }
  ];

  // Filter posts based on category and search
  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
      case 'trending':
        return b.comments - a.comments;
      case 'recent':
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <div className="space-y-4">
      {sortedPosts.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10 text-center">
          <div className="text-gray-400 mb-4">No posts found</div>
          <p className="text-gray-500">Try adjusting your search or category filter</p>
        </div>
      ) : (
        sortedPosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            categoryInfo={getCategoryInfo(post.category)}
            onClick={() => onPostClick(post)}
          />
        ))
      )}
    </div>
  );
};

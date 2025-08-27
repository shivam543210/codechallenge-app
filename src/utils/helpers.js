// src/utils/helpers.js
export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-500 bg-green-500/10';
    case 'Medium':
      return 'text-yellow-500 bg-yellow-500/10';
    case 'Hard':
      return 'text-red-500 bg-red-500/10';
    default:
      return 'text-gray-500 bg-gray-500/10';
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/20 text-green-400';
    case 'won':
      return 'bg-purple-500/20 text-purple-400';
    case 'attempted':
      return 'bg-yellow-500/20 text-yellow-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

export const getRankBadgeColor = (rank) => {
  switch (rank) {
    case 1:
      return 'bg-yellow-500/20 text-yellow-400';
    case 2:
      return 'bg-gray-400/20 text-gray-300';
    case 3:
      return 'bg-orange-500/20 text-orange-400';
    default:
      return 'bg-gray-600/20 text-gray-400';
  }
};

export const filterProblems = (problems, searchQuery, difficultyFilter, topicFilter) => {
  return problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDifficulty = difficultyFilter === 'All Difficulties' || problem.difficulty === difficultyFilter;

    const matchesTopic = topicFilter === 'All Topics' || problem.tags.includes(topicFilter);

    return matchesSearch && matchesDifficulty && matchesTopic;
  });
};

export const updateLeaderboardWithUserStats = (leaderboard, userStats) => {
  return leaderboard.map(user => 
    user.name === 'You' 
      ? { ...user, solved: userStats.problemsSolved, streak: userStats.currentStreak }
      : user
  );
};
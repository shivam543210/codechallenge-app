// src/data/mockData.js
export const recentActivity = [
  { type: 'solve', problem: 'Two Sum', time: '2 hours ago', status: 'completed' },
  { type: 'attempt', problem: 'Valid Parentheses', time: '1 day ago', status: 'attempted' },
  { type: 'challenge', problem: '1v1 Challenge', time: '3 days ago', status: 'won' }
];

export const leaderboard = [
  { rank: 1, name: 'CodeMaster', solved: 287, streak: 15 },
  { rank: 2, name: 'AlgoNinja', solved: 243, streak: 8 },
  { rank: 3, name: 'DevGuru', solved: 198, streak: 12 },
  { rank: 4, name: 'ByteHunter', solved: 156, streak: 5 },
  { rank: 5, name: 'You', solved: 0, streak: 0 } // Will be updated with actual user stats
];

export const notifications = [
  {
    id: 1,
    message: 'New weekly challenge available!',
    time: '2 hours ago',
    type: 'challenge'
  },
  {
    id: 2,
    message: 'Someone challenged you to a 1v1!',
    time: '1 day ago',
    type: 'challenge'
  },
  {
    id: 3,
    message: 'Your streak is at 5 days!',
    time: '3 days ago',
    type: 'achievement'
  }
];
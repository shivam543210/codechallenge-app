// src/pages/FullLeaderboard/FullLeaderboard.jsx
import React, { useState } from 'react';
import { NavigationHeader } from '../../components/common/NavigationHeader';
import { Trophy, Medal, Award, Flame, Search, Filter, ChevronRight } from 'lucide-react';

export const FullLeaderboard = ({ navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('overall'); // overall, weekly, monthly
  const [selectedUser, setSelectedUser] = useState(null);

  // Extended leaderboard data
  const fullLeaderboard = [
    { rank: 1, name: 'CodeMaster', solved: 287, streak: 15, rating: 2156, country: 'USA', joinDate: '2024-01-15', weeklyScore: 45 },
    { rank: 2, name: 'AlgoNinja', solved: 243, streak: 8, rating: 1998, country: 'India', joinDate: '2024-02-20', weeklyScore: 38 },
    { rank: 3, name: 'DevGuru', solved: 198, streak: 12, rating: 1887, country: 'Canada', joinDate: '2024-03-10', weeklyScore: 42 },
    { rank: 4, name: 'ByteHunter', solved: 156, streak: 5, rating: 1745, country: 'Germany', joinDate: '2024-04-05', weeklyScore: 28 },
    { rank: 5, name: 'You', solved: 0, streak: 0, rating: 1200, country: 'Unknown', joinDate: '2025-08-28', weeklyScore: 0 },
    { rank: 6, name: 'PythonPro', solved: 145, streak: 3, rating: 1698, country: 'UK', joinDate: '2024-01-30', weeklyScore: 22 },
    { rank: 7, name: 'JavaJedi', solved: 134, streak: 7, rating: 1654, country: 'Japan', joinDate: '2024-05-12', weeklyScore: 31 },
    { rank: 8, name: 'CppChampion', solved: 128, streak: 2, rating: 1632, country: 'South Korea', joinDate: '2024-03-25', weeklyScore: 19 },
    { rank: 9, name: 'JSWizard', solved: 119, streak: 9, rating: 1587, country: 'France', joinDate: '2024-06-08', weeklyScore: 35 },
    { rank: 10, name: 'RustRanger', solved: 112, streak: 4, rating: 1543, country: 'Australia', joinDate: '2024-07-01', weeklyScore: 26 },
    { rank: 11, name: 'GoGopher', solved: 98, streak: 1, rating: 1489, country: 'Netherlands', joinDate: '2024-04-20', weeklyScore: 15 },
    { rank: 12, name: 'SwiftSage', solved: 89, streak: 6, rating: 1445, country: 'Sweden', joinDate: '2024-05-30', weeklyScore: 29 },
    { rank: 13, name: 'KotlinKing', solved: 84, streak: 2, rating: 1398, country: 'Brazil', joinDate: '2024-06-15', weeklyScore: 18 },
    { rank: 14, name: 'DartDuke', solved: 76, streak: 8, rating: 1356, country: 'Spain', joinDate: '2024-07-10', weeklyScore: 33 },
    { rank: 15, name: 'PhpPhoenix', solved: 71, streak: 0, rating: 1312, country: 'Italy', joinDate: '2024-08-01', weeklyScore: 12 }
  ];

  const filteredUsers = fullLeaderboard.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
    if (rank === 3) return <Award className="w-5 h-5 text-orange-400" />;
    return <span className="text-gray-400 font-bold">{rank}</span>;
  };

  const getRankBgColor = (rank) => {
    if (rank === 1) return 'bg-yellow-500/10 border-yellow-500/20';
    if (rank === 2) return 'bg-gray-400/10 border-gray-400/20';
    if (rank === 3) return 'bg-orange-500/10 border-orange-500/20';
    return 'bg-white/5 border-white/10';
  };

  const getRatingColor = (rating) => {
    if (rating >= 2000) return 'text-red-400';
    if (rating >= 1800) return 'text-orange-400';
    if (rating >= 1600) return 'text-purple-400';
    if (rating >= 1400) return 'text-blue-400';
    return 'text-green-400';
  };

  const getRatingTitle = (rating) => {
    if (rating >= 2000) return 'Grandmaster';
    if (rating >= 1800) return 'Master';
    if (rating >= 1600) return 'Expert';
    if (rating >= 1400) return 'Specialist';
    return 'Newbie';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Global Leaderboard" 
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top 3 Podium */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Top Performers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {fullLeaderboard.slice(0, 3).map((user, index) => (
              <div key={user.rank} className={`relative ${index === 0 ? 'md:order-2 md:-mt-4' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
                <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${getRankBgColor(user.rank)} text-center`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    user.rank === 1 ? 'bg-yellow-500/20' : user.rank === 2 ? 'bg-gray-400/20' : 'bg-orange-500/20'
                  }`}>
                    {getRankIcon(user.rank)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{user.name}</h3>
                  <p className={`text-sm font-medium mb-2 ${getRatingColor(user.rating)}`}>
                    {getRatingTitle(user.rating)}
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>{user.solved} problems solved</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span>{user.streak} day streak</span>
                    </div>
                    <div>Rating: {user.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 w-64 pl-10"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              
              <div className="relative">
                <select 
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 appearance-none pr-8"
                >
                  <option value="overall">Overall Ranking</option>
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                </select>
                <Filter className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <div className="text-gray-400">
              Showing {filteredUsers.length} users
            </div>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-white">All Rankings</h3>
            <p className="text-gray-400 text-sm mt-1">Complete leaderboard with detailed stats</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Solved</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Streak</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Weekly</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.rank}
                    className={`hover:bg-white/5 transition-all duration-200 ${
                      user.name === 'You' ? 'bg-blue-500/10 border-blue-500/20' : ''
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-white font-medium">{user.name}</div>
                        <div className={`text-xs ${getRatingColor(user.rating)}`}>
                          {getRatingTitle(user.rating)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-bold ${getRatingColor(user.rating)}`}>
                        {user.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {user.solved}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400">{user.streak}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {user.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {user.weeklyScore}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                        <span>View Profile</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
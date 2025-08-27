// src/hooks/useUserStats.js
import { useState, useCallback } from 'react';

export const useUserStats = () => {
  const [userStats, setUserStats] = useState({
    problemsSolved: 0,
    successRate: 0,
    currentStreak: 0,
    rank: 'Newbie',
    totalSubmissions: 0,
    weeklyProgress: 0
  });

  const updateStats = useCallback((newStats) => {
    setUserStats(prev => ({
      ...prev,
      ...newStats
    }));
  }, []);

  const incrementProblemsSolved = useCallback(() => {
    setUserStats(prev => ({
      ...prev,
      problemsSolved: prev.problemsSolved + 1,
      currentStreak: prev.currentStreak + 1,
      weeklyProgress: prev.weeklyProgress + 1,
      successRate: Math.round(((prev.problemsSolved + 1) / (prev.totalSubmissions + 1)) * 100)
    }));
  }, []);

  const incrementSubmissions = useCallback(() => {
    setUserStats(prev => ({
      ...prev,
      totalSubmissions: prev.totalSubmissions + 1,
      successRate: Math.round((prev.problemsSolved / (prev.totalSubmissions + 1)) * 100)
    }));
  }, []);

  const resetStreak = useCallback(() => {
    setUserStats(prev => ({
      ...prev,
      currentStreak: 0
    }));
  }, []);

  const updateRank = useCallback((newRank) => {
    setUserStats(prev => ({
      ...prev,
      rank: newRank
    }));
  }, []);

  return {
    userStats,
    updateStats,
    incrementProblemsSolved,
    incrementSubmissions,
    resetStreak,
    updateRank
  };
};
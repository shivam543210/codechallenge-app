import React, { useState, useEffect } from 'react';
import { NavigationHeader } from '../../../components/common/NavigationHeader';
import { ChallengeSetup } from './ChallengeSetup';
import { ChallengeWaiting } from './ChallengeWaiting';
import { ChallengeActive } from './ChallengeActive';
import { ChallengeFinished } from './ChallengeFinished';

export const Challenge = ({ navigateTo, showNotifications, setShowNotifications, currentPage, onBack }) => {
  const [challengeMode, setChallengeMode] = useState('setup');
  const [selectedTime, setSelectedTime] = useState(15);
  const [inviteCode, setInviteCode] = useState('');
  const [challengeTimer, setChallengeTimer] = useState(0);
  const [opponents, setOpponents] = useState([]);

  
  useEffect(() => {
    if (challengeMode === 'setup') {
      setInviteCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    }
  }, [challengeMode]);

  const renderCurrentMode = () => {
    const props = { selectedTime, setSelectedTime, inviteCode, opponents, challengeTimer, navigateTo };
    
    switch (challengeMode) {
      case 'setup':
        return <ChallengeSetup 
          {...props} 
          onCreateChallenge={() => setChallengeMode('waiting')}
          onJoinChallenge={() => setChallengeMode('waiting')}
        />;
      case 'waiting':
        return <ChallengeWaiting 
          {...props} 
          onStartChallenge={() => {
            setChallengeTimer(selectedTime * 60);
            setChallengeMode('active');
          }}
        />;
      case 'active':
        return <ChallengeActive {...props} />;
      case 'finished':
        return <ChallengeFinished 
          {...props} 
          onNewChallenge={() => setChallengeMode('setup')}
        />;
      default:
        return <ChallengeSetup {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationHeader 
        title="Challenge Arena" 
        showBackButton 
        backAction={onBack}
        currentPage={currentPage}
        navigateTo={navigateTo}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
      />
      {renderCurrentMode()}
    </div>
  );
};

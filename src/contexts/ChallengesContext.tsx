import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

// define conteudo do json challenge:
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

//dessa maneira não é declarado que activeChallenge é um 'object' (pouca info) e sim um 'Challenge'
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}
interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    );
}
import { createContext, useContext, useState } from "react";

import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {

}

interface CountDownProviderProps {
    children: ReactNode;
}

const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({ children }: CountDownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <CountDownContext.Provider>
            { children}
        </CountDownContext.Provider>
    )
}
import { createContext } from "react";

interface CountDownContextData {

}

interface CountDownProviderProps {
    children: ReactNode;
}

const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({ children }: CountDownProviderProps) {
    return (
        <CountDownContext.Provider>
            { children}
        </CountDownContext.Provider>
    )
}
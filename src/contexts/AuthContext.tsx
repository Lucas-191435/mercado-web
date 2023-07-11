import { createContext, ReactNode } from "react";

interface AuthContextData {
  valueTest: string,
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const variavelTest = 'Teste De Variavel do AuthProvider'
  return <AuthContext.Provider value={{
    valueTest: variavelTest
  }}>{children}</AuthContext.Provider>;
}

import { ReactNode } from 'react';
interface User {
    email: string;
    role: 'admin' | 'moderator' | 'user';
}
interface AuthContextType {
    user: User | null;
    loginWithEmail: (email: string, password: string) => Promise<void>;
    signupWithEmail: (email: string, password: string) => Promise<void>;
    loginWithSocial: (provider: 'google' | 'facebook' | 'apple') => Promise<void>;
    logout: () => void;
}
export declare const AuthProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useAuth: () => AuthContextType;
export {};
//# sourceMappingURL=AuthContext.d.ts.map
import { ReactNode } from 'react';
interface User {
    email: string;
    role: 'admin' | 'moderator' | 'user';
}
interface AuthContextType {
    user: User | null;
    loginWithEmail: (email: string, password: string) => Promise<void>;
    signupWithEmail: (email: string, password: string) => Promise<void>;
    logout: () => void;
}
export declare const useAuth: () => AuthContextType;
export declare const AuthProvider: React.FC<{
    children: ReactNode;
}>;
export {};
//# sourceMappingURL=useAuth.d.ts.map
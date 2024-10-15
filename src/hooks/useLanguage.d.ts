import { ReactNode } from 'react';
interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
}
export declare const useLanguage: () => LanguageContextType;
export declare const LanguageProvider: React.FC<{
    children: ReactNode;
}>;
export {};
//# sourceMappingURL=useLanguage.d.ts.map
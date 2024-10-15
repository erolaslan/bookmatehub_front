import React from 'react';
interface AuthFormProps {
    type: 'login' | 'signup';
    onSubmit: (email: string, password: string) => void;
    onSocialLogin: (provider: 'google' | 'facebook' | 'apple') => void;
}
declare const AuthForm: React.FC<AuthFormProps>;
export default AuthForm;
//# sourceMappingURL=AuthForm.d.ts.map
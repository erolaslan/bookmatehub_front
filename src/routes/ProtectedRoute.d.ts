import React from 'react';
interface ProtectedRouteProps {
    role: 'admin' | 'reviewer' | 'user';
    children: React.ReactNode;
}
declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
export default ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.d.ts.map
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthUserData, getUserRoles, UserRole } from 'entities_/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
    children?: JSX.Element;
    roles?: UserRole[];

}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const auth = useSelector(getAuthUserData);
    const location = useLocation();

    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RouterPath.forbidden} state={{ from: location }} replace />;
    }

    return children!;
};

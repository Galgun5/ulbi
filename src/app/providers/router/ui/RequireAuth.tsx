import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthUserData } from 'entities_/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children?: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getAuthUserData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    return children!;
};

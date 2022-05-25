import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UseAdmin from '../../Hooks/UseAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user)
    const location = useLocation()
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return < Navigate to="/login" state={{ from: location }
        } replace />;
    }

    return children
};

export default RequireAdmin;
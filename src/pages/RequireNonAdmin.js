import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import auth from '../firebase.init';
import UseAdmin from './UseAdmin/UseAdmin';

const RequireNonAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(true);
    const location = useLocation();

    if (loading || adminLoading) {
        return <p>Loading...</p>
    }

    if (admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireNonAdmin;
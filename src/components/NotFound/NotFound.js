import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found text-center py-5">
              <h1>404</h1>
            <h2 className="mb-50">Page Not Found</h2>
            <p className="mb-20">You can go back to <Link to="/">Homepage</Link></p>
        </div>
    );
};

export default NotFound;
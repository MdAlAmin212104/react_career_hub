import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPages = () => {
      return (
            <div>
                  <h1>Opps</h1>
                  <Link to="/">Go back</Link>
            </div>
      );
};

export default ErrorPages;
import React from 'react';
import './home.scss';
import * as sentry from '@sentry/react';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default sentry.withProfiler(Home, { name: 'Home' });

import React from 'react';
import './profile.scss';
import * as Sentry from '@sentry/react';

const Profile = () => {
  return <div>Profile</div>;
};

export default Sentry.withProfiler(Profile, { name: 'Profile' });

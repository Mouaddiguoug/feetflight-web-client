import React from 'react';
import RequireAuth from './require-auth';

export function withAuth<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  const ProtectedPage: React.FC<P> = (props) => {
    return (
      <RequireAuth>
        <Component {...props} />
      </RequireAuth>
    );
  };

  return ProtectedPage;
}

import React from 'react';

export function AuthNav(params) {
  return (
    <div>
      <a href="/users/login/" className="ml-3 acc-link">Sign in</a>
      <a href="/users/signup/" className="ml-3 acc-link">Sign up</a>
    </div>
  );
}

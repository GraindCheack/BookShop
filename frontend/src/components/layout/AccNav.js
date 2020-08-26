import React from 'react';

export function AccNav(params) {
  const { auth } = params;

  return (
    <div>
      <span href="/users/login/" className="ml-3 acc-link">{auth.user}</span>
      <a href="/users/logout/" className="ml-3 acc-link">Log out</a>
    </div>
  );
}

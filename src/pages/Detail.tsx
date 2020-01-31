import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <div>detail page</div>
      <Link to="/">redirect to list page</Link>
    </div>
  );
}
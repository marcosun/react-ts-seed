import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <div>list page</div>
      <Link to="/detail">redirect to detail page</Link>
    </div>
  );
}
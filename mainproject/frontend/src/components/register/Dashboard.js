import React, { Fragment } from 'react';
import Forms from './Forms';
import Register from './Register';

export default function Dashboard(){
  return (
    <Fragment>
      <div className="cell small-4 large-offset-2">
        <Forms />
      </div>
      <div className="cell small-4">
        <Register />
      </div>
    </Fragment>
  )
}

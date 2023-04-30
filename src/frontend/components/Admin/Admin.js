import React from 'react'
import Card from '../Card/Card' ;

import './Admin.css' ;
import UserProfile from '../UserProfile/UserProfile';

function Admin() {
  return (
    <div className='page'>
        <UserProfile></UserProfile>
        <Card ></Card>
    </div>
  )
}

export default Admin

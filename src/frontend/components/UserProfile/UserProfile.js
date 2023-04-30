import React from 'react'
import Profile from '../../img/profile.jpg'
import './UserProfile.css' ;

function UserProfile() {
  return (
    <div className='card'>
        <div className='image'>
            <img src={Profile} alt='profile pic'></img>
        </div>
        <div className="details">
            <div className='heading'>College Details</div>
            <div className='line'></div>

            <div className="collageName">
                <h3>Collage:</h3>
                <h3>Ramaiah Institute Of Technology</h3>
            </div>
            <div className="collageName">
                <h3>Collage:</h3>
                <h3>Ramaiah Institute Of Technology</h3>
            </div>
            <div className="collageName">
                <h3>Collage:</h3>
                <h3>Ramaiah Institute Of Technology</h3>
            </div>
            <div className="collageName">
                <h3>Collage:</h3>
                <h3>Ramaiah Institute Of Technology</h3>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
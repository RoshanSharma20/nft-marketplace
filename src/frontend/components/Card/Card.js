import React, { useEffect, useState } from 'react';
import { userData } from '../../data/userData.js';
import './Card.css';
// import {FaYoutube} from 'react-icons' ;
import {AiOutlineCloudUpload} from 'react-icons/ai' ;

function Card() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(userData);
    }, user);

    return (
        <>
            {
                user.map((item, idx) => {
                    return (
                        <div className='box'>
                            <div className='detail' id={idx}>
                                <div className='name'>
                                    <h2>{item.email}</h2>
                                </div>
                                <div className='uploadBtn'>
                                    <AiOutlineCloudUpload className='uploadIcon'/>
                                    {/* <FontAwesomeIcon icon="fa-regular fa-cloud-arrow-up" /> */}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Card;
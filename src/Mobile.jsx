import React from 'react';
import MobileList from './MobileList';
import Mobiles from './Mobiles.json';
import './Mobile.css';

export default function Mobile(){
    return (
        <div>
        {
            Mobiles.map((mobile)=>{
                return <MobileList 
                image={mobile.image}
                title={mobile.title}
                price={mobile.price}/>
            })
        }
        </div>
    );
}
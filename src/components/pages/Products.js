import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Products() {
    return ( 
      <div className="row">
        <div className="col-sm-4">
         
          <div className="cardsitem-col">
            <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
          </div>

          <div className="cardsitem-col">
            <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
          </div>
        </div>
      </div>
    );
}
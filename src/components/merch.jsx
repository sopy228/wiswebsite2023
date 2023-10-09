import React, { useState } from 'react';
import { Image } from "./image";

export const Merch = (props) => {
  return (
    <div id='merch' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Merchandise</h2>
          <p>
           Come and purchase some of our exclusive WiS merchandise!
          </p>
        </div>
        <div className='row'>
          <div className='merch-item'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// ideas:

// idea 1:
// add photos and link to google form 

// idea 2: 
// add photos and put merch contact name into the sub paragraph

import React from 'react';
import { Button } from '../Button.tsx';
import './Home.css';
import '../../App.css';

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Us!</h1>
      <h2>(Please Don't)</h2>
      <div className='image-container'>
      <img src='/images/homepage_artwork_final.jpg' alt='Homepage Artwork'></img>
      <p>Lorem ipsum dolor</p>
      <img src='/images/homepage_artwork_final.jpg' alt='Homepage Artwork2'></img>
      <img src='/images/homepage_artwork_final.jpg' alt='Homepage Artwork3'></img>
      </div>
    </div>
  )
}
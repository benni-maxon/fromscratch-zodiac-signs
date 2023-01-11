import React from 'react';
import { zodiac } from '../../data.js';
import background from '../../astro-van.png';
import Zodiac from '../Zodiac/Zodiac.js';
import './Main.css';

export default function Main() {
  return (
    <main className="main-area" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <Zodiac key={item.id} {...item} />
      ))}
    </main>
  );
}

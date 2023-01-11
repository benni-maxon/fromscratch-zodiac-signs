import React from 'react';
import './Zodiac.css';

export default function Zodiac({ id, name, dates, top, left }) {
  return (
    <div className="zodiac" style={{ top, left }}>
      <section className="z1">
        <img className="zImg" alt={name} src={`${process.env.PUBLIC_URL}/signs/${name}.png`} />
      </section>
      <section className="z2">
        <h1 className="name">{name}</h1>
        <p className="dates">{dates}</p>
      </section>
    </div>
  );
}

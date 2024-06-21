import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = ({ trigger }) => (
  <>{trigger && <ConfettiExplosion />}</>
);

export default Confetti;

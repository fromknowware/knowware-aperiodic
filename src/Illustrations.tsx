import React from 'react';

export const ComputingIllustration = () => (
  <svg viewBox="0 0 400 600" className="w-full h-full bg-[#f4f4f4]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
      </pattern>
      <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle fill="#cccccc" cx="2" cy="2" r="1"></circle>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#dotGrid)" opacity="0.5" />
    
    <g className="animate-[spin_40s_linear_infinite]" transform="translate(200, 300)">
      <circle cx="0" cy="0" r="120" fill="none" stroke="#000" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="0" cy="0" r="160" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="10 10" />
      <circle cx="0" cy="0" r="80" fill="none" stroke="#000" strokeWidth="0.5" />
      
      <g className="animate-[spin_15s_linear_infinite_reverse]">
        <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="#000" strokeWidth="2" />
        <rect x="-40" y="-40" width="80" height="80" fill="#000" />
        <rect x="-20" y="-20" width="40" height="40" fill="#ea580c" className="animate-[pulse_2s_ease-in-out_infinite]" />
      </g>
      
      <circle cx="120" cy="0" r="6" fill="#ea580c" />
      <circle cx="-120" cy="0" r="6" fill="#000" />
      <circle cx="0" cy="160" r="8" fill="#000" />
      <circle cx="0" cy="-160" r="8" fill="#ea580c" />
    </g>
    
    <path d="M 0 300 L 400 300" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M 200 0 L 200 600" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2" />
    
    <text x="20" y="40" fontFamily="monospace" fontSize="10" fill="#888">FIG 1. COMPUTATIONAL MANIFOLD</text>
    <text x="20" y="580" fontFamily="monospace" fontSize="10" fill="#ea580c">STATE: ACTIVE</text>
  </svg>
);

export const NetworkIllustration = () => (
  <svg viewBox="0 0 400 600" className="w-full h-full bg-[#f4f4f4]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="crossGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 20 15 L 20 25 M 15 20 L 25 20" fill="none" stroke="#d0d0d0" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#crossGrid)" />
    
    <g stroke="#000" strokeWidth="1.5" fill="none">
      <path d="M 100 150 Q 200 50 300 150 T 300 450 Q 200 550 100 450 T 100 150" className="animate-[pulse_4s_ease-in-out_infinite]" />
      <path d="M 150 200 L 250 200 L 250 400 L 150 400 Z" stroke="#ea580c" strokeDasharray="5 5" className="animate-[pulse_3s_ease-in-out_infinite_1s]" />
      
      <line x1="100" y1="150" x2="150" y2="200" />
      <line x1="300" y1="150" x2="250" y2="200" />
      <line x1="300" y1="450" x2="250" y2="400" />
      <line x1="100" y1="450" x2="150" y2="400" />
      
      <line x1="200" y1="100" x2="200" y2="500" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2" />
      <line x1="50" y1="300" x2="350" y2="300" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2" />
    </g>
    
    <g fill="#000">
      <circle cx="100" cy="150" r="6" className="animate-[bounce_2s_infinite]" />
      <circle cx="300" cy="150" r="6" className="animate-[bounce_2s_infinite_0.5s]" />
      <circle cx="300" cy="450" r="6" className="animate-[bounce_2s_infinite_1s]" />
      <circle cx="100" cy="450" r="6" className="animate-[bounce_2s_infinite_1.5s]" />
      
      <circle cx="150" cy="200" r="4" fill="#ea580c" />
      <circle cx="250" cy="200" r="4" fill="#ea580c" />
      <circle cx="250" cy="400" r="4" fill="#ea580c" />
      <circle cx="150" cy="400" r="4" fill="#ea580c" />
      
      <circle cx="200" cy="300" r="12" fill="#000" />
      <circle cx="200" cy="300" r="4" fill="#ea580c" className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
    </g>
    
    <text x="20" y="40" fontFamily="monospace" fontSize="10" fill="#888">FIG 2. ASYMPTOTIC NETWORK</text>
    <text x="20" y="580" fontFamily="monospace" fontSize="10" fill="#ea580c">CAPACITY: OPTIMAL</text>
  </svg>
);

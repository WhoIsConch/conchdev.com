"use client";

import { useState } from 'react';
import Marquee from './ui/Marquee';

export default function Home() {
  const [ number, setNumber ] = useState(0);

  function handleClick() {
    setNumber(number + 1);
  }

  let numberText;

  if (number === 67) {
    numberText = "Please leave.";
  } else if (number === 69) {
    numberText = "Now that's more like it.";
  } else if (number > 50) {
    numberText = "Okay, you can stop now.";
  } else if (!number) {
    numberText = "Make it go up.";
  } else {
    numberText = "Pretty cool, right?";
  }

  return <div className="flex flex-col flex-1">
      <div className="flex flex-col gap-8 justify-center flex-1">
          <h1 className="text-4xl font-bold">
            Hi, I&apos;m Conch.
          </h1>
          <p className="text-xl">
            I can code in languages like Python and Dart. Did you notice this shitty static website is written using Next.js? 
            I apparently know how to use that now, too.
          </p>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Look at this number.</h2>
            <p className="text-8xl">{number}</p>
            <h2 className="text-2xl font-bold">It goes up.</h2>
            <button 
              className="rounded-lg p-4 hover:bg-black underline transition duration-200 cursor-pointer"
              onClick={handleClick}>{numberText}</button>
          </div>
          <p className="text-lg">
            Now I know I could have done that with raw JavaScript and spared the React baloney, but 
            my B2B SaaS overlords told me I need to learn React with Next.js or get laid off.
            And if I get laid off, I don&apos;t get any money when they reach $1m ARR after 
            three months of production operations and a YC gig.
          </p>
      </div>
      <Marquee />
    </div>
}

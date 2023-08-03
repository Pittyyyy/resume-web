import React from 'react';
import { Web1, Web2, Web3, Web4, Web5, Web6 } from './assets/image/image.jsx'
import { useState } from 'react';
import { useDarkMode } from './DarkModeContext.jsx'

export function Portfolio () {
  const { darkMode } = useDarkMode();
  const sectionClassName = darkMode ? "dark" : "";
  return (
    <section className={sectionClassName}>
      <div className={`md:px-60 md:pt-10 ${sectionClassName} dark:bg-gray-900`}>
        <h3 className="text-3xl py-0 p-10 font-medium pt-10 dark:text-white">Portfolio</h3>
        <p className="text-md p-10 py-2 leading-10 text-gray-800 dark:text-white">Since the beginning of my journey as a freelance developer, I've done remote work for
          <span className="text-teal-500 cursor-pointer"> agencies </span> consulted for <span className="text-teal-500 cursor-pointer">startups </span> and collaborated with talanted prople to create digital products for both business and consumer use.
          </p>
      </div>
      <div className={`${sectionClassName ? "dark:bg-gray-900" : ""}`}>
      <div className={`md:flex md:flex-wrap md:px-40 md:ml-20 mb-10 ${sectionClassName ? "dark:bg-gray-900" : ""}`}>
      <div className="p-5">
        <Web1 />
      </div>
      <div className="p-5">
        <Web2 />
      </div>
      <div className="p-5">
        <Web3 />
      </div>
      <div className="p-5">
        <Web4 />
      </div>
      <div className="p-5">
        <Web5 />
      </div>
      <div className="p-5">
        <Web6 />
      </div>
      </div>
      </div>
    </section>
  )
}

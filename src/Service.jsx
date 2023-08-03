import { Design, Coding, Love, Price } from './assets/image/image.jsx'
import React from 'react';
import { useDarkMode } from './DarkModeContext.jsx';

export function Service () {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-gray-900`}>
    <section className="font-Roboto dark:bg-gray-900">
        <div className="lg:px-60 lg:pt-20" >
          <h3 className="text-3xl pt-20 pl-10 dark:text-white">Services I offer</h3>
          <p className="text-md p-10 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a freelance developer, I've done remote work for
          <span className="text-teal-500 cursor-pointer"> agencies </span> consulted for <span className="text-teal-500 cursor-pointer">startups </span> and collaborated with talanted prople to create digital products for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 pl-10 dark:text-white">I offer from a wide range of service, including programming and design. </p>
        </div>
        <div className="lg:flex lg:flex-row md:px-40 ">
          {/* 1 */}
          <div className="text-center shadow-lg p-10 rounded-xl m-10 lg:w-[25%] dark:bg-white">
            <Design />
            <h3 className="pt-8 pb-2 font-Roboto text-gray-800 text-lg font-medium ">Beautiful Designs</h3>
            <p className="pt-3 font-Roboto text-gray-800">
              Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className="py-4  font-Roboto text-teal-600">Design tools I use</h4>
            <p className="py-1 text-gray-800">Photoshop</p>
            <p className="py-1 text-gray-800">Illustrator</p>
            <p className="py-1 text-gray-800">Figma</p>
          </div>

          {/* 2 */}
          <div className="text-center shadow-lg p-10 rounded-xl m-10 lg:w-[25%] dark:bg-white">
            <Coding />
            <h3 className="pt-8 pb-2 font-Roboto text-gray-800 text-lg font-medium ">Beyond Coding</h3>
            <p className="pt-3 font-Roboto text-gray-800">
              I also excel in coding. 
            </p>
            <h4 className="py-4 font-Roboto text-teal-600">Utilizing versatile tools</h4>
            <p className="py-1 text-gray-800">JavaScript</p>
            <p className="py-1 text-gray-800">HTML</p>
            <p className="py-1 text-gray-800">CSS</p>
            <p className="py-1 text-gray-800">React</p>
          </div>

          {/* 3 */}
          <div className="text-center shadow-lg p-10 rounded-xl m-10 lg:w-[25%] dark:bg-white">
            <Love />
            <h3 className="pt-8 pb-2 font-Roboto text-gray-800 text-lg font-medium ">Praised by Over 500 Clients</h3>
            <p className="pt-3 font-Roboto text-gray-800">
            The dedication and commitment in my work have earned recognition from more than 500 satisfied clients. We are thrilled to provide an exceptional experience for everyone who engages with our services.
            </p>
          </div>

          {/* 4 */}
          <div className="text-center shadow-lg p-10 rounded-xl lg:w-[25%] dark:bg-white md:m-10 mx-10">
            <Price />
            <h3 className="pt-8 pb-2 font-Roboto text-gray-800 text-lg font-medium ">Quality Work, Affordable Pricing</h3>
            <p className="pt-3 font-Roboto text-gray-800">
            I believe that exceptional design doesn't require exorbitant prices. With a commitment to provide quality and accessible services for all.
            </p>
          </div>
        </div>
      </section>
      </div>
  )
}
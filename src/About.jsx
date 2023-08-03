import { Facebook, Instargram, Line, GithubIcon } from './assets/icon/icon.jsx'
import { MyImage } from './assets/image/image.jsx'
import React from 'react';
import { useDarkMode } from './DarkModeContext.jsx';

export function About ()  {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className=" px-10 md:px-20 lg:px-40 dark:bg-gray-900">
    <section className=" min-h-screen md:min-h-full md:pt-10">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-Gidugu dark:text-white">Developed by Benz</h1>
        <ul className="flex items-center">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 750 850"><path fill="yellow" d="M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114t-122 74t-147 23q-71-4-133-33t-109-77t-77-109T1 397q-4-78 23-147t74-122t114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71t71 51t85 25q56 7 106-8t90-46z" className="cursor-pointer" onClick={toggleDarkMode}/></svg></li>
          <li><a className="from-cyan-500 to-blue-800 bg-gradient-to-r text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
        </ul>
      </nav>
      <section className="lg:flex lg:justify-between lg:px-40">
      <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-blue-800 font-medium pb-5 md:text-6xl dark:text-orange-300">Pittaya Prangrat</h2>
        <h3 className="text-2xl py-2 font-medium md:text-3xl dark:text-white">Full Stack Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 font-Roboto md:text-xl max-w-lg mx-auto dark:text-white">👨‍💻 A freelancer providng services for programming and website design. Join me down below and let's get cracking 💻</p>
      </div>
      <div className="flex justify-center gap-16 py-3">
        <GithubIcon/>
        <Facebook />
        <Instargram />
        <Line />
        </div>
        </div>
        <div>
        <div className="relative">
          <MyImage />
        </div>
        </div>
        </section>
    </section>
    </main>
    </div>
  )
}


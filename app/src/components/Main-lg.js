
import Xprolg from './xpro-lg.js';
import Contactslg from './Contacts-lg.js';
import Morelg from './More-lg.js';
import Chronolg from './Chrono-lg.js';

import { useState } from 'react';
import MainMobile from './Main-mobile.js';


export default function Mainlg(){


  const [currentTheme, changeTheme] = useState("Light");
  const setTheme = () => {
    const mainEl = document.getElementById("main");
    const headerEl = document.querySelector("header");
    const shadowsLightElList = document.querySelectorAll("div.shadow-light , section.shadow-light");
    const shadowsDarkElList = document.querySelectorAll("div.shadow-dark , section.shadow-dark");

    if(currentTheme === "Light") {
      changeTheme("Dark");
      // bg
      mainEl.classList.remove("bg-white");
      mainEl.classList.add("bg-black");
      // texts
      mainEl.classList.remove("text-black");
      headerEl.classList.remove("text-white");
      mainEl.classList.add("text-white");
      headerEl.classList.add("text-black");
      // shadows
      shadowsLightElList.forEach(el => el.classList.remove("shadow-light"));
      shadowsLightElList.forEach(el => el.classList.add("shadow-dark"));      
      return;
    }
    changeTheme("Light");
    // bg
    mainEl.classList.remove("bg-black");
    mainEl.classList.add("bg-white");
    // texts
    
    mainEl.classList.remove("text-white");
    headerEl.classList.remove("text-black");
    mainEl.classList.add("text-black");
    headerEl.classList.add("text-white");
    // shadows
    shadowsDarkElList.forEach(el => el.classList.remove("shadow-dark"));
    shadowsDarkElList.forEach(el => el.classList.add("shadow-light"));    
  }

  const [currentLang, setLang] = useState("EN");

  const setActiveLang = (lang) => {
    if(currentLang === lang) return;
    setLang(lang);

    let translatorsDiv = document.getElementById("translators");
    let activeLangEl = translatorsDiv.getElementsByClassName("active-lang")[0];
    let targetLangEl = translatorsDiv.getElementsByClassName(lang)[0];

    activeLangEl.classList.remove("active-lang");
    targetLangEl.classList.add("active-lang");

  }
    return (
    <>
      <main id="main" className='grid w-screen h-fit place-items-center lg:gap-10 lg:py-10'>
        <section className='hidden lg:block w-4/5 h-fit rounded-3xl shadow-light'>
          <header className='text-center text-white p-4 bg-sky-500 border-black border-b-2 flex flex-row justify-between rounded-t-3xl'>
            <div className='spacer min-w-1/3 w-1/3'></div>
            <h1 className='text-5xl w-1/3'>Younes Harrat</h1>
            <div className='w-1/3 text-center flex flex-row justify-around items-center'>
              <div className='spacer w-1/4'></div>
              <div className='translator-button text-center flex md:flex-row sm:flex-col sm:h-fit space-x-2' id="translators">
                <div className='EN left-part-en p-2 rounded-full text-sm h-fit active-lang' onClick={()=>setActiveLang("EN")}>EN</div>
                <div className='FR right-part-en p-2 rounded-full text-sm h-fit ' onClick={()=>setActiveLang("FR")}>FR</div>
              </div>

              <div className='darkmode-button' onClick={setTheme}>
                
                <svg xmlns="http://www.w3.org/2000/svg"  width="32px" height="32px" fill="none" stroke={currentTheme === "Light" ? "white" : "black"}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
                    </path>
                </svg>
                
              </div>
              {currentTheme} Theme
            </div>
          </header>
          <Contactslg />
        </section>
        <Xprolg currentLang={currentLang} />
        <div className='hidden lg:block'>
          <Chronolg currentLang={currentLang} />
          <Morelg currentLang={currentLang}/>
        </div>

        <footer className='w-full'>
        </footer>
      </main>
      <div className='lg:hidden'>
        <MainMobile  currentLang={currentLang} />
      </div>
    </>
    )
}
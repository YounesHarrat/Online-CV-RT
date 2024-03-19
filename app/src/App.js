import './App.css';
import profilLight from "./assets/ppA.png"
import { Chrono } from "react-chrono"
import {dataEN as itemsEN, dataFR as itemsFR} from "./data.js"
import { useState } from 'react';


function App() {
  const [showMore, setVisibleShowMore] = useState(false);
  const seeMore = ()=>{
    setVisibleShowMore(!showMore);
  }

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
    console.log("setActiveLang::", {
      currentLang, 
      lang,
      translatorsDiv,
      activeLangEl,
      targetLangEl
    })

  }


  return (
    <>
        <main id="main" className='grid w-screen h-fit place-items-center gap-10 py-10'>
          <section className='w-4/5 h-fit rounded-3xl shadow-light'>
            <header className='text-center text-white p-4 bg-sky-500 border-black border-b-2 flex flex-row justify-between'>
              <div className='spacer min-w-1/3 w-1/3'></div>
              <div className='text-5xl w-1/3'>Younes Harrat</div>
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
            <div className='text-4xl text-center p-4'>FullStack Developper</div>
            <div className='flex flex-row justify-between p-10 items-center h-1/3 w-full p-8'>
              <div className='contacts min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                <div className='text-2xl underline pt-4'>Contacts</div>
                <div className='text-xl'>Phone: 07.78.58.92.19</div>
                <div className='text-xl'>Email: Younesharrat5896@gmail.com</div>
                <div className='text-2xl underline pt-4'>Socials</div>
                <div className='text-xl'>Linkedin: https://www.linkedin.com/in/younesharrat/</div>
                <div className='text-xl'>Github: https://github.com/YounesHarrat</div>
              </div>

              <div className='profil-picture flex justify-center items-center w-60 shadow-light rounded-full bg-black'>
                <img src={profilLight} alt="profil-pic" className='rounded-full w-full h-auto object-cover '/>
              </div>
            </div>
          </section>


          <section className='w-4/5 h-fit rounded-3xl shadow-light'>
            <div className='text-4xl text-center pt-12 underline'>{currentLang === "EN" ? "Professional Experience" : "Expérience Professionelle" }</div>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-12 pb-12">
              <div className='text-3xl text-center p-10'>Touchdown</div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-xl'>{currentLang === "EN" ? "Job position: FullStack Developper" : "Poste: Développeur FullStack" }</div>
                  <div className='text-xl'>{currentLang === "EN" ? "For: about 1 year from January 02 2023 to October 01 2023" : "Durée: 1 année, du 02 Janvier 2023 au 01 Octobre 2023"}</div>
                  <div className='text-xl'>{currentLang === "EN" ? "Technical Stack:" : "Stack Technique:" } Svelte + NodeJs + MongoDB </div>
                  <div className='text-xl'>Referent: Florent Michaux - CTO </div>
                </div>
              </div>

              <div className="desc pb-8" >
                <div className="text-2xl py-4">" {currentLang === "EN" ? "Marketing Suite for" : "Suite Marketing pour" } Microsoft Dynamics 365, Power Apps & Business Central "</div>
                <p>
                  {currentLang === "EN" ? 
                    "Bring together performance and mastery of strategic data. Touchdown is the modern marketing suite dedicated to SMEs, fully integrated into your Microsoft Dynamics 365, Power Apps and Business Central CRM. We put our expertise at your service to help you exceed your marketing and sales objectives."
                  : "Réunissez performance et maîtrise des données stratégiques. Touchdown est la suite marketing moderne dédiée aux PME totalement intégrée à votre CRM Microsoft Dynamics 365, Power Apps et Business Central. Nous mettons notre expertise à votre service pour vous aider à dépasser vos objectifs marketing et commerciaux."
                  }
                </p>
              </div>

              <div className="skills w-full flex flex-row min-h-40 ">
                <div className="w-1/2 flex flex-col ">
                  <div className="text-xl text-center border-black border-2 bg-sky-500">
                    Hard Skills
                  </div>
                  <div className="text-left p-8">
                    <div>- {currentLang === "EN" ? "Testing and debugging" : "Tests et debug" }</div>
                    <div>- {currentLang === "EN" ? "Agile Metodology:" : "Méthodologie Agile:"} Kanban</div>
                    <div>- {currentLang === "EN" ? "Object Oriented Programming" : "Programmation Orientée Objet" }</div>
                  </div>
                </div>

                <div className="w-1/2 flex flex-col ">
                  <div className="text-xl text-center border-black border-2 bg-sky-500">
                    Soft Skills
                  </div>
                  <div className="text-left p-8">
                    <div>- {currentLang === "EN" ? "Self Management" : "Autonomie" }</div>
                    <div>- {currentLang === "EN" ? "Creativity" : "Créativité" }</div>
                    <div>- {currentLang === "EN" ? "Adaptabilty" : "Adaptabilité" }</div>
                  </div>
                </div>
              </div>

              <div className="opinion shadow-light rounded-3xl p-4">
                <p className="p-8">
                  {currentLang === "EN" ? 
                  <>
                  I liked the fact that they chose to use Svelte as a framework and also i discovered working with Microsoft Dynamics 365 <br/>
                  The overall atmosphere of the company, their kindness and their open-minded spirit ! <br/>
                  Also how could i forget the usual friday team-building time at the restaurant ! <br/>                  
                  </>
                  :
                  <>
                  J'ai particulièrement aimé le fait qu'ils aient choisi Svelte en tant que framework front-end et avoir découvert l'utilisation professionelle de Microsoft Dynamics 365 <br/>
                  L'atmosphère globale de Touchdown, leur gentillesse et leur ouverture d'esprit <br/>
                  Comment pourrais-je oublier le traditionnelle rendez-vous de team-building le vendredi après-midi au restaurant ?
                  </>
                  }
                </p>
              </div>
            </div>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-12 pb-12">
              <div className='text-3xl text-center p-10'>Picomto</div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-xl'>{currentLang === "EN" ? "Job position: Apprentice FrontEnd Developper" : "Poste: Alternant Développeur FrontEnd" }</div>
                  <div className='text-xl'>{currentLang === "EN" ? "For: ~2 years from December 2020 to September 2022" : "Durée: 2 années, de Décembre 2020 à Septembre 2022" }</div>
                  <div className='text-xl'>{currentLang === "EN" ? "Technical Stack:" : "Stack Technique:" } Angular 17 </div>
                  <div className='text-xl'>{currentLang === "EN" ? "Rythm: 3 weeks at work / 1 week in school " : "Rythme: 3 semaines en entreprise / 1 semaine en école (M2I)" } </div>
                  <div className='text-xl'>Referent: Maxime Defenin - Lead Developper </div>
                </div>
              </div>

              <div className="desc pb-8" >
                <div className="text-2xl py-4">" {currentLang === "EN" ? "The unique interface for the connected operator and manager" : "L’interface unique de l’opérateur et du manager connectés" } "</div>
                <p>
                {currentLang === "EN" ? 
                  <>
                  Picomto guides the operator from the moment they take up their position by providing them with the digital platform which allows them to consult their tasks to be carried out, the instructions to follow and access information from factory 4.0.
                  </>
                  :
                  <>
                  Picomto guide l’opérateur dès la prise de poste en lui fournissant la plateforme digitale qui lui permet de consulter ses tâches à réaliser, les instructions à suivre et accéder aux informations de l’usine 4.0.
                  </>
                }
                </p>
              </div>

              <div className="skills w-full flex flex-row min-h-40">
                <div className="w-1/2 flex flex-col ">
                  <div className="text-xl text-center border-black border-2 bg-sky-500">
                    Hard Skills
                  </div>
                  <div className="text-left p-8">
                    <div>- {currentLang === "EN" ? "Agile Metodology:" : "Méthodologie Agile:"} Scrum, Kanban</div>
                    <div>- {currentLang === "EN" ? "Problem Solving and modular thinking" : "Résolution de problème et vision modulaire" }</div>
                    <div>- {currentLang === "EN" ? "Working with FabricJs" : "Utilisation de FabricJs" }</div>
                  </div>
                </div>

                <div className="w-1/2 flex flex-col ">
                  <div className="text-xl text-center border-black border-2 bg-sky-500">
                    Soft Skills
                  </div>
                  <div className="text-left p-8">
                    <div>- {currentLang === "EN" ? "Team working" : "Travail en équipe"} </div>
                    <div>- {currentLang === "EN" ? "Reading about new technologies" : "Veille Technologique" }</div>
                    <div>- {currentLang === "EN" ? "Research and Developpment" : "Recherche et développement" }</div>
                  </div>
                </div>
              </div>

              <div className="opinion shadow-light rounded-3xl p-4">
                <p className="p-8">
                {currentLang === "EN" ? 
                  <>
                  I liked how i was onboarded, in spite of the covid period, i learned a lot in my 2 first weeks. <br/>
                  In fact my referent and i were the only one at the work space, i still remember some rules that he gave me: <br/>
                  KISS (Keep it Stupid and Simple) and also the simple but necessary RTM (Read The Manual) 
                  </>
                  :
                  <>
                  J'ai aimé la manière dont j'ai été accueilli au sein de la boite. Malgré la période Covid, j'ai beaucoup appris pendant mes 2 premières semaines d'alternant. <br/>
                  Mon référent et moi étaient seuls dans les locaux, les autres en télétravail. Je me souviens encore des règles de base qu'il m'a donné: <br/>
                  KISS (Keep it Stupid and Simple) et le simple mais nécéssaire RTM (Read The Manual). 
                  </>
                }
                </p>
              </div>

            </div>
          </section>

          <section className='w-4/5 grid place-items-center h-fit rounded-3xl'>
            <div className='w-4/5 '>
              {currentLang === "EN" ?
                <>
                  <Chrono items={itemsEN} mode="VERTICAL_ALTERNATING" allowDynamicUpdates={true} activeItemIndex={itemsEN.length -1} enableLayoutSwitch={false} enableDarkToggle={true} textDensity="LOW" enableQuickJump={false}  />
                </>
              :
                <>
                  <Chrono items={itemsFR} mode="VERTICAL_ALTERNATING" allowDynamicUpdates={true} activeItemIndex={itemsFR.length -1} enableLayoutSwitch={false} enableDarkToggle={true} textDensity="LOW" enableQuickJump={false}  />
                </>
              }
            </div>            
          </section>

          <div className='text-2xl p-4 text-center bg-sky-500 w-fit rounded-3xl' onClick={seeMore}> {currentLang === "EN" ? "Learn More About Me" : "En savoir plus sur moi" } </div>          

              
          {showMore && 
            <section className='w-4/5 grid place-items-center h-fit rounded-3xl shadow-light'>
              <div className='text-xl p-8 text-left w-full'>
                {currentLang === "EN" ?
                "I'm a Chess player since childhood, Video Games and Manga/Anime passionnate who also likes to travel alone."
                :
                "Je suis un joueur d'echecs depuis l'enfance, un passioné de jeux vidéo et de manga/anime qui aime aussi voyager en solitaire."
                }
              </div>
              <div className='text-xl p-8 text-left w-full'>
                {currentLang === "EN" ?
                <>I like music ! who doesn't ? I've been learning and playing guitar as an autodidact for over 10 years. <br/> <br/> You can even check my unupdated Youtube Channel at: https://www.youtube.com/@MrNejiraito </>
                :
                <>J'aime la musique ! Qui n'aimes pas ? J'ai appris à jouer de la guitare en autodidacte depuis plus de 10 ans maintenant. <br/> <br/> Vous pouvez si l'envie vous prends aller écouter quelques reprise que j'ai faites sur ma chaine youtube: https://www.youtube.com/@MrNejiraito </>
                }
              </div>
              <div className='text-xl p-8 text-left w-full'>
                {currentLang === "EN" ? 
                "I am an AI enthusiast and i'm thrilled to experiment with tools like: ChatGPT, Sora Ai, Krea Ai, etc..." 
                :
                "Je suis un enthousiaste de l'intelligence artificielle et j'adore expérimenter avec des outils tel que: ChatGPT, Sora Ai, Krea Ai, etc... "
                } 
              </div>
                      
            </section>
          }

          </main>
        <footer></footer>
    </>
  );
}

export default App;

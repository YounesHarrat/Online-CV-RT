

export default function XproMobile({currentLang}) {
    return (
        <>
        <section className="lg:hidden w-full h-fit ">
            <div className='text-2xl text-center pt-4 underline'>{currentLang === "EN" ? "Professional Experience" : "Expérience Professionelle" }</div>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-4 pb-4">
              <div className='text-2xl text-center p-4'>Touchdown</div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-base'>{currentLang === "EN" ? "Job position: FullStack Developper" : "Poste: Développeur FullStack" }</div>
                  <div className='text-base'>{currentLang === "EN" ? "For: about 1 year from January 02 2023 to October 01 2023" : "Durée: 1 année, du 02 Janvier 2023 au 01 Octobre 2023"}</div>
                  <div className='text-base'>{currentLang === "EN" ? "Technical Stack:" : "Stack Technique:" } Svelte + NodeJs + MongoDB </div>
                  <div className='text-base'>Referent: Florent Michaux - CTO </div>
                </div>
              </div>

              <div className="desc pb-8" >
                <div className="text-lg text-center py-4">" {currentLang === "EN" ? "Marketing Suite for" : "Suite Marketing pour" } Microsoft Dynamics 365, <br/> Power Apps & Business Central "</div>
                <p>
                  {currentLang === "EN" ? 
                    "Bring together performance and mastery of strategic data. Touchdown is the modern marketing suite dedicated to SMEs, fully integrated into your Microsoft Dynamics 365, Power Apps and Business Central CRM. We put our expertise at your service to help you exceed your marketing and sales objectives."
                  : "Réunissez performance et maîtrise des données stratégiques. Touchdown est la suite marketing moderne dédiée aux PME totalement intégrée à votre CRM Microsoft Dynamics 365, Power Apps et Business Central. Nous mettons notre expertise à votre service pour vous aider à dépasser vos objectifs marketing et commerciaux."
                  }
                </p>
              </div>

              <div className="skills w-full flex flex-col min-h-40 ">
                <div className="w-full flex flex-col ">
                  <div className="text-base text-center border-black border-2 bg-sky-500">
                    Hard Skills
                  </div>
                  <div className="text-left p-2">
                    <div>- {currentLang === "EN" ? "Testing and debugging" : "Tests et debug" }</div>
                    <div>- {currentLang === "EN" ? "Agile Metodology:" : "Méthodologie Agile:"} Kanban</div>
                    <div>- {currentLang === "EN" ? "Object Oriented Programming" : "Programmation Orientée Objet" }</div>
                  </div>
                </div>

                <div className="w-full flex flex-col ">
                  <div className="text-base text-center border-black border-2 bg-sky-500">
                    Soft Skills
                  </div>
                  <div className="text-left p-2">
                    <div>- {currentLang === "EN" ? "Self Management" : "Autonomie" }</div>
                    <div>- {currentLang === "EN" ? "Creativity" : "Créativité" }</div>
                    <div>- {currentLang === "EN" ? "Adaptabilty" : "Adaptabilité" }</div>
                  </div>
                </div>
              </div>

              <div className="opinion shadow-light w-full rounded-3xl p-4">
                <div className=" flex flex-col space-y-7 ">
                  {currentLang === "EN" ? 
                  <>
                  <div>I liked the fact that they chose to use Svelte as a framework and also i discovered working with Microsoft Dynamics 365 </div>
                  <div>The overall atmosphere of the company, their kindness and their open-minded spirit ! </div>
                  <div>Also how could i forget the usual friday team-building time at the restaurant ! </div>                  
                  </>
                  :
                  <>
                  <div>J'ai particulièrement aimé le fait qu'ils aient choisi Svelte en tant que framework front-end et avoir découvert l'utilisation professionelle de Microsoft Dynamics 365 </div>
                  <div>L'atmosphère globale de Touchdown, leur gentillesse et leur ouverture d'esprit </div>
                  <div>Comment pourrais-je oublier le traditionnelle rendez-vous de team-building le vendredi après-midi au restaurant ? </div>
                  </>
                  }
                </div>
              </div>
            </div>

            <hr className="border-t-sky-500 border-8 my-4"/>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-4 pb-4">
              <div className='text-2xl text-center p-4'>Picomto</div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-base'>{currentLang === "EN" ? "Job position: Apprentice FrontEnd Developper" : "Poste: Alternant Développeur FrontEnd" }</div>
                  <div className='text-base'>{currentLang === "EN" ? "For: ~2 years from December 2020 to September 2022" : "Durée: 2 années, de Décembre 2020 à Septembre 2022" }</div>
                  <div className='text-base'>{currentLang === "EN" ? "Technical Stack:" : "Stack Technique:" } Angular 17 </div>
                  <div className='text-base'>{currentLang === "EN" ? "Rythm: 3 weeks at work / 1 week in school " : "Rythme: 3 semaines en entreprise / 1 semaine en école (M2I)" } </div>
                  <div className='text-base'>Referent: Maxime Defenin - Lead Developper </div>
                </div>
              </div>

              <div className="desc pb-8" >
                <div className="text-lg text-center py-4">" {currentLang === "EN" ? "The unique interface for the connected operator and manager" : "L’interface unique de l’opérateur et du manager connectés" } "</div>
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

              <div className="skills w-full flex flex-col min-h-40">
                <div className="w-full flex flex-col ">
                  <div className="text-base text-center border-black border-2 bg-sky-500">
                    Hard Skills
                  </div>
                  <div className="text-left p-2">
                    <div>- {currentLang === "EN" ? "Agile Metodology:" : "Méthodologie Agile:"} Scrum, Kanban</div>
                    <div>- {currentLang === "EN" ? "Problem Solving and modular thinking" : "Résolution de problème et vision modulaire" }</div>
                    <div>- {currentLang === "EN" ? "Working with FabricJs" : "Utilisation de FabricJs" }</div>
                  </div>
                </div>

                <div className="w-full flex flex-col ">
                  <div className="text-base text-center border-black border-2 bg-sky-500">
                    Soft Skills
                  </div>
                  <div className="text-left p-2">
                    <div>- {currentLang === "EN" ? "Team working" : "Travail en équipe"} </div>
                    <div>- {currentLang === "EN" ? "Reading about new technologies" : "Veille Technologique" }</div>
                    <div>- {currentLang === "EN" ? "Research and Developpment" : "Recherche et développement" }</div>
                  </div>
                </div>
              </div>

              <div className="opinion shadow-light rounded-3xl p-4">
                <div className="flex flex-col space-y-7">
                {currentLang === "EN" ? 
                  <>
                  <div>I liked how i was onboarded, in spite of the covid period, i learned a lot in my 2 first weeks. </div>
                  <div>In fact my referent and i were the only one at the work space, i still remember some rules that he gave me: </div>
                  <div>KISS (Keep it Stupid and Simple) and also the simple but necessary RTM (Read The Manual) </div>
                  </>
                  :
                  <>
                  <div>J'ai aimé la manière dont j'ai été accueilli au sein de la boite. Malgré la période Covid, j'ai beaucoup appris pendant mes 2 premières semaines d'alternant. </div>
                  <div>Mon référent et moi étaient seuls dans les locaux, les autres en télétravail. Je me souviens encore des règles de base qu'il m'a donné: </div>
                  <div>KISS (Keep it Stupid and Simple) et le simple mais nécéssaire RTM (Read The Manual). </div>
                  </>
                }
                </div>
              </div>

            </div>
 
        </section>
        </>
    )
}
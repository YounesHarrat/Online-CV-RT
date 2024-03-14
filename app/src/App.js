import './App.css';
import profil from "./assets/ppA.jpg"


function App() {
  return (
    <>
        <header></header>
        <main className='grid w-screen h-fit place-items-center bg-slate-200 gap-10 py-10'>
          <section className='w-4/5 h-fit rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(255,255,255,.1),_10px_10px_30px_4px_rgba(0,0,0,.15)]'>
            <div className='text-5xl text-center p-4 text-white bg-slate-400 border-black border-b-2'>Younes Harrat</div>
            <div className='text-4xl text-center p-4'>FullStack Developper</div>
            <div className='flex flex-row justify-between p-10 items-center h-1/3 w-full p-4'>
              <div className='contacts min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                <div className='text-2xl underline pt-4'>Contacts</div>
                <div className='text-xl'>Phone: 07.78.58.92.19</div>
                <div className='text-xl'>Email: Younesharrat5896@gmail.com</div>
                <div className='text-2xl underline pt-4'>Socials</div>
                <div className='text-xl'>Linkedin: https://www.linkedin.com/in/younesharrat/</div>
                <div className='text-xl'>Github: https://github.com/YounesHarrat</div>
              </div>

              <div className='profil-picture flex justify-center items-center w-60 shadow-[-10px_-10px_30px_4px_rgba(255,255,255,.1),_10px_10px_30px_4px_rgba(0,0,0,.15)] rounded-full border-black border-2'>
                <img src={profil} alt="profil-pic" className='rounded-full w-full h-auto object-cover '/>
              </div>
            </div>
          </section>


          <section className='w-4/5 h-fit rounded-3xl shadow-[-10px_-10px_30px_4px_rgba(255,255,255,.1),_10px_10px_30px_4px_rgba(0,0,0,.15)]'>
            <div className='text-4xl text-center pt-12'>Professional Experience</div>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-12 pb-12">
              <div className='text-3xl text-center p-10'>Touchdown</div>

              <div className="desc " >
                <div className="text-2xl py-4"> Marketing Suite for Microsoft Dynamics 365, Power Apps & Business Central </div>
                <p>
                  Bring together performance and mastery of strategic data
                  Touchdown is the modern marketing suite dedicated to SMEs, fully integrated into your Microsoft Dynamics 365, Power Apps and Business Central CRM. We put our expertise at your service to help you exceed your marketing and sales objectives.
                </p>
                {/** link to website */}
              </div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-xl'>Job position: FullStack Developper</div>
                  <div className='text-xl'>For: ~1 year from January 02 2023 to October 01 2023</div>
                  <div className='text-xl'>Technical Stack: Svelte + NodeJs + MongoDB </div>
                  <div className='text-xl'>Referent: Florent Michaux - CTO </div>
                </div>
              </div>

              <div className="opinion shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),_10px_10px_30px_4px_rgba(0,0,0,0.15)] rounded-3xl p-4">
                <p>
                  I liked the fact that they chose to use Svelte as a framework and also i discovered working with Microsoft Dynamics 365
                  I liked the overall atmosphere of the company and their kindness and their open-minded spirit !
                  I like being tasked some back-end works and learned how to handle it better than i did.
                  And how could i forget the usual friday team-building time at the restaurant !
                  {/** What did i like ? how was it ? what did i learn ? */}
                </p>
              </div>


            </div>

            <div className="xps-template flex flex-col justify-evenly gap-1 px-12 pb-12">
              <div className='text-3xl text-center p-10'>Picomto</div>

              <div className="desc" >
                <div className="text-2xl py-4"> The unique interface for the connected operator and manager </div>
                <p>
                  Picomto guides the operator from the moment they take up their position by providing them with the digital platform which allows them to consult their tasks to be carried out, the instructions to follow and access information from factory 4.0.                
                </p>
                {/** link to website */}
              </div>

              <div className="flex flex-row items-center w-full py-8">
                <div className='min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                  <div className='text-xl'>Job position: Apprentice FrontEnd Developper</div>
                  <div className='text-xl'>For: ~2 years from December 2020 to September 2022</div>
                  <div className='text-xl'>Technical Stack: Angular 17  </div>
                  <div className='text-xl'>Referent: Maxime Defenin - Lead Developper </div>
                </div>
              </div>


              <div className="opinion shadow-[-10px_-10px_30px_4px_rgba(255,255,255,0.1),_10px_10px_30px_4px_rgba(0,0,0,0.15)] rounded-3xl p-4">
                <p>
                  I liked how i was onboarded, in spite of the covid period, i learned a lot in my 2 first weeks.
                  In fact my referent and i were the only one at the work space, i still remember some rules that he gave me: KISS (Keep it Stupid and Simple) and also the infamous RTFM (Read The F-ing Manual) 
                  {/** What did i like ? how was it ? what did i learn ? */}
                </p>
              </div>

            </div>
          </section>
        </main>
        <footer></footer>
    </>
  );
}

export default App;

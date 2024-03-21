import youtubeIcon from "../assets/youtube.svg"
import { useState } from "react";


export default function MoreMobile({currentLang}){
    
    const [showMore, setVisibleShowMore] = useState(false);
    const seeMore = ()=>{
      setVisibleShowMore(!showMore);
    }
    
    
    return (
    <>
      <div className="flex flex-col items-center">
        <div className='seeMore text-white text-lg my-10 p-4 text-center bg-sky-500 w-fit rounded-3xl' onClick={seeMore}> {currentLang === "EN" ? "Learn More About Me" : "En savoir plus sur moi" } </div>          
      
        { showMore && 
        <>
          <hr className=" w-screen border-t-sky-500 border-8 my-4"/>

            <section className='w-full grid place-items-center h-fit space-y-2'>
              
              <div className='text-base p-8 text-left w-full'>
                {currentLang === "EN" ?
                "I'm a Chess player since childhood, Video Games and Manga/Anime passionnate who also likes to travel alone."
                :
                "Je suis un joueur d'echecs depuis l'enfance, un passioné de jeux vidéo et de manga/anime qui aime aussi voyager en solitaire."
                }
              </div>
              <div className='text-base flex flex-col p-8 text-left w-full space-y-2'>
                {currentLang === "EN" ?
                <>
                  <div>I like music ! who doesn't ? I've been learning and playing guitar as an autodidact for over 10 years.</div>
                  <div className='flex flex-row text-center items-center space-x-4'>
                    <div>You can even check my unupdated Youtube Channel at: </div>
                    <div><a href="https://www.youtube.com/@MrNejiraito"> <img src={youtubeIcon} alt="youtube-icon" /></a> </div>
                  </div>
                </>
                :
                <>
                  <div>J'aime la musique ! Qui n'aimes pas ? J'ai appris à jouer de la guitare en autodidacte depuis plus de 10 ans maintenant. </div>
                  <div className='flex flex-row text-center items-center space-x-4'>
                    <div>Vous pouvez si l'envie vous prends aller écouter quelques reprise que j'ai faites: </div>
                    <div><a href="https://www.youtube.com/@MrNejiraito"> <img src={youtubeIcon} alt="youtube-icon" /></a> </div>
                  </div>
                </>
                }
              </div>
              <div className='text-base p-8 text-left w-full'>
                {currentLang === "EN" ? 
                "I am an AI enthusiast and i'm thrilled to experiment with tools like: ChatGPT, Sora Ai, Krea Ai, etc..." 
                :
                "Je suis un enthousiaste de l'intelligence artificielle et j'adore expérimenter avec des outils tel que: ChatGPT, Sora Ai, Krea Ai, etc... "
                } 
              </div>
                      
            </section>
          <hr className=" w-screen border-t-sky-500 border-8 my-4"/>
        </>
        }
        </div>
    </>
    )
}

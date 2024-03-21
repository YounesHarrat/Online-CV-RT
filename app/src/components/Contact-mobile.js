import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.svg"
import profilLight from "../assets/ppA.png"

export default function ContactsMobile() {

    return (
        <>
        <section className='flex flex-col justify-around text-center'>
            <header className='w-full text-white bg-sky-500 border-black border-b-2'>
              <div className='text-3xl'>Younes Harrat</div>
            </header>
            <div className="rounded-full shadow-light w-1/3 mx-auto my-8">
              <img src={profilLight} alt="profil-pic" className='rounded-full w-full h-auto object-cover '/>
            </div>
            <div className='text-2xl my-8'>FullStack Developper</div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-1/2">
                <div className='text-lg underline pl-2'>Contacts</div>
                <div className='text-base pl-4'>07.78.58.92.19</div>
                <div className='text-base pl-4'>Younesharrat5896@gmail.com</div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className='text-lg underline pl-2'>Socials</div>
                <div className="flex flex-row justify-around">
                  <div className='text-xl pl-8'><a href="https://www.linkedin.com/in/younesharrat/"> <img src={linkedinIcon} alt="linkedin-icon" /></a></div>
                  <div className='text-xl pl-8'><a href="https://github.com/YounesHarrat"><img src={githubIcon} alt="github-icon" /></a></div>
                </div>
              </div>
            </div>
        </section>
        </>
    )
}
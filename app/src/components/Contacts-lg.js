
import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.svg"
import profilLight from "../assets/ppA.png"


export default function Contactslg () {
    return (
        <>
            <div className='text-4xl text-center p-4'>FullStack Developper</div>
            <div className='flex flex-row justify-between p-10 items-center h-1/3 w-full p-8'>
              <div className='contacts min-w-80 w-fit flex flex-col justify-evenly gap-3 text-left'>
                <div className='text-2xl underline pt-4'>Contacts</div>
                <div className='text-xl pl-8'>Phone: 07.78.58.92.19</div>
                <div className='text-xl pl-8'>Email: Younesharrat5896@gmail.com</div>
                <div className='text-2xl underline pt-4 flex flex-row justify-evenly w-fit'>
                  Socials
                  <div className='text-xl pl-8'><a href="https://www.linkedin.com/in/younesharrat/"> <img src={linkedinIcon} alt="linkedin-icon" /></a></div>
                  <div className='text-xl pl-8'><a href="https://github.com/YounesHarrat"><img src={githubIcon} alt="github-icon" /></a></div>
                </div>
              </div>

              <div className='profil-picture flex justify-center items-center w-60 shadow-light rounded-full bg-black'>
                <img src={profilLight} alt="profil-pic" className='rounded-full w-full h-auto object-cover '/>
              </div>
            </div>
        </>
    )
}
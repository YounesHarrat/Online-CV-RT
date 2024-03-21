import ContactsMobile from './Contact-mobile'
import XproMobile from './xpro-mobile'
import Chronolg from './Chrono-lg'
import MoreMobile from './More-mobile'


export default function MainMobile({currentLang}) {

    return(
        <>
            <main id="main-mobile w-screen lg:hidden">
                <ContactsMobile />
                <XproMobile currentLang={currentLang} />
                <Chronolg currentLang={currentLang} />
                <MoreMobile currentLang={currentLang} />
            </main>
        </>
    )
}
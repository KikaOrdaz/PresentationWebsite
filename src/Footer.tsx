import { TypographyMuted } from "./Typography"
import Icon from "./Icon"

export default function Footer (){
    return(
        <div className="flex flex-row">
            <div className="grow"></div>
            <a href="tel:+351919038854" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="public/icons/phone.svg" size="20"/>
                    <TypographyMuted text="+351 919 038 854"/>
                </div>
            </a>
            <a href="mailto:franciscaordazgoncalves@gmail.com" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="public/icons/mail.svg" size="20"/>
                    <TypographyMuted text="franciscaordazgoncalves@gmail.com"/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/franciscaordaz/" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="public/icons/linkedin.svg" size="20"/>
                    <TypographyMuted text="Francisca Ordaz"/>
                </div>
            </a>
            <div className="flex flex-row align-content-middle grow">
                <Icon src="public/icons/navigation.svg" size="20"/>
                <TypographyMuted text="Lisboa, Portugal"/>
            </div>
            <a href="https://github.com/KikaOrdaz" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="public/icons/github.svg" size="24" width="23" pad="px-2"/>
                    <TypographyMuted text="KikaOrdaz"/>
                </div>
            </a>
            <a href="#main">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="public/icons/home.svg" size="30" width="30" pad="px-2"/>
                </div>
            </a>
            <div className="grow"></div>
        </div>
    )
}
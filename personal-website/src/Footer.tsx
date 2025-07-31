import { TypographyMuted } from "./Typography"
import Icon from "./Icon"

export default function Footer (){
    return(
        <div className="flex flex-row">
            <div className="grow"></div>
            <div className="flex flex-row align-content-middle grow">
                <Icon src="src/icons/phone.svg" size="20"/>
                <TypographyMuted text="+351 919 038 854"/>
            </div>
            <a href="https://www.linkedin.com/in/franciscaordaz/" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="src/icons/linkedin.svg" size="20"/>
                    <TypographyMuted text="Francisca Ordaz"/>
                </div>
            </a>
            <div className="flex flex-row align-content-middle grow">
                <Icon src="src/icons/navigation.svg" size="20"/>
                <TypographyMuted text="Lisboa, Portugal"/>
            </div>
            <a href="https://github.com/KikaOrdaz" className="grow">
                <div className="flex flex-row align-content-middle grow">
                    <Icon src="src/icons/github.svg" size="24" width="23" pad="px-2"/>
                    <TypographyMuted text="KikaOrdaz"/>
                </div>
            </a>
            <div className="grow"></div>
        </div>
    )
}
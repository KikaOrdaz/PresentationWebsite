import { TypographyMuted } from "./Typography"
import Icon from "./Icon"

export default function Footer (){
    return(
        <div className="flex flex-row pt-7.5">
            <div className="grow"></div>
            <div className="flex flex-row grow">
                <Icon src="src/icons/phone.svg"/>
                <TypographyMuted text="+351 919 038 854"/>
            </div>
            <div className="flex flex-row grow">
                <Icon src="src/icons/linkedin.svg"/>
                <TypographyMuted text="Francisca Ordaz"/>
            </div>
            <div className="flex flex-row grow">
                <Icon src="src/icons/navigation.svg"/>
                <TypographyMuted text="Lisboa, Portugal"/>
            </div>
            <div className="flex flex-row grow">
                <Icon src="src/icons/github.svg" size="[20px]" pad="px-2"/>
                <TypographyMuted text="KikaOrdaz"/>
            </div>
            <div className="grow"></div>
        </div>
    )
}

/* 
+351 919 038 854
Francisca Ordaz
Lisboa, Portugal
KikaOrdaz
*/
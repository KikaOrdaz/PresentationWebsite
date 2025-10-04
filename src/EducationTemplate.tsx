import { TypographyH3, TypographyP, TypographyLead1 } from "./Typography";

type EducationProps = {
    div : string, 
    name : string,
    dates: string,
    id : number
}

type LayoutProps = {
    image : string,
    text : string, 
    side : string
}

type EducationTemplateProps = EducationProps & LayoutProps

export default function EducationTemplate({name, dates, div, image, text, side, id}: EducationTemplateProps){
    return(
        <div key={id} id={div} className="snap-start h-screen w-screen flex flex-col px-10 py-5 shrink-0">
            <div className="flex flex-row pt-5">
                <img src="src/icons/location.svg" alt="" className="h-[30px]" />
                <div className="flex flex-col">
                    <TypographyH3 text={name}/>
                    <div className="-m-py">
                        <TypographyP text={dates} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row place-content-center justify-between pt-[70px]">
                <Layout image={image} text={text} side={side}/>
            </div>
        </div>
    );    
}

function Layout({image, text, side}: LayoutProps){
    const img = ((pad : string) =>{ return(<img src={"src/images/" + image + ".png"} alt="" className={"h-[400px] " + pad}/> )})
    // const img = <img src={"src/images/" + image + ".png"} alt="" className="h-[400px]"/> 
    const txt =( (pad : string) => {return(<div className={"place-content-center grow " + pad}>
                    <TypographyLead1 text={text} />
                </div>)})


    if(side=="left"){
        return(
            <>
               {img ("")}
               {txt("px-32")}
            </>
        )
    }
    return(
            <>
              {txt("pr-32 pl-16")}
              {img("pr-16")}
            </>
        )
}
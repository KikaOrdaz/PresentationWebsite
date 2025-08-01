import { education_pages, main_text, /*main_text*/ } from "./constants";
import EducationTemplate from "./EducationTemplate";
import { TypographyH3, TypographyP } from "./Typography";

export function Study(){
   return(<Layout page_info={education_pages.study} div={"estudei"}/>)
}

export function Learn(){
    return(<Layout page_info={education_pages.learn} div={"aprendi"}/>)
}

type LayoutProps = {
    page_info : {div: string, name: string, dates: string, image: string, side: string}[],
    div : string
}

function Layout({page_info, div} : LayoutProps){
    const index = page_info.map((value) => {return(
        <a className="flex flex-row align-middle gap-1.5" href={"#"+value.div}>
            <img src="src/icons/location.svg" alt="" className="h-[30px]" />
            <TypographyH3 text={value.name}/>
            <TypographyP text={"(" + value.dates + ")"} />
        </a>
        )}  
    )

    return(
        <div className="flex flex-row snap-x snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
            <div id={"main-"+div} className="snap-start h-screen w-screen flex flex-row px-10 py-44 shrink-0">
                <div className="flex flex-col gap-y-10">
                    {index}
                </div>
                <div className="pl-[100px] pt-10">
                    <img src={"src/arrows/setaloop2.svg"} className="w-[500px]"/>
                </div>
            </div>
            {page_info.map((value) => (
                <EducationTemplate div={value.div} name={value.name} dates={value.dates} image={value.image} text={main_text} side={value.side}/>
            ))}    
        </div>
    )
}
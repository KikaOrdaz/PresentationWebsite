import { education_pages, main_text, /*main_text*/ } from "./constants";
import EducationTemplate from "./EducationTemplate";
import { TypographyH3, TypographyP } from "./Typography";

export function Study(){
   return(<Layout page_info={education_pages.study} circle="6" arrow="ondulada" position={["h-[500px]","top-[100px] left-[955px] h-[500px] rotate-290"]}/>)
}

export function Learn(){
    return(<Layout page_info={education_pages.learn} circle="8" arrow="loop2" position={["h-[500px] left-[75px]"," top-[300px] left-[815px] w-[500px]"]}/>)
}

type LayoutProps = {
    page_info : {div: string, name: string, dates: string, image: string, side: string}[],
    circle : string,
    arrow : string,
    position : string[]
}

function Layout({page_info, /*circle, arrow, positio*/} : LayoutProps){
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
            <div id="main-study" className="snap-start h-screen w-screen flex flex-row px-10 py-44 shrink-0">
                <div className="flex flex-col gap-y-10">
                    {index}
                </div>
                {/* <img src={"src/arrows/circle" + circle + ".svg"} className={"z-50 top-[100px] "+ position[0]}/>
                <img src={"src/arrows/seta" + arrow + ".svg"} className={"z-50 "+ position[1]}/> */}
            </div>
            {page_info.map((value) => (
                <EducationTemplate div={value.div} name={value.name} dates={value.dates} image={value.image} text={main_text} side={value.side}/>
            ))}    
        </div>
    )
}
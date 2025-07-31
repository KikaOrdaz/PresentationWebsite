import { TypographyH1 } from "./Typography"

type PageTitleProps = {
  text: string
  icon: string
}


export default function PageTitle ({text, icon}: PageTitleProps){
    if(icon){
        return(
            <div className="flex flex-row sticky pt-10 pl-10">
                <img src={"src/icons/" + icon + ".svg"} alt="" className="h-[40px] pr-2" />
                <TypographyH1 text={text}/>
            </div>
        )
    }

    return(
         <div className="flex flex-row justify-center sticky top-10">
                <TypographyH1 text={text}/>
            </div>
    )
}


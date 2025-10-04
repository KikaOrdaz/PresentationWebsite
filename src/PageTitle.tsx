import { TypographyH1 } from "./Typography"

type PageTitleProps = {
  text: string
  icon: string
  div: string
}


export default function PageTitle ({text, icon, div}: PageTitleProps){
    if(div=="estudei" || div=="aprendi"){
        return(

            <a href={"#main-"+div} className="flex flex-row sticky pt-10 pl-10">
                <img src={"icons/" + icon + ".svg"} alt="" className="h-[40px] pr-2" />
                <TypographyH1 text={text}/>
            </a>

        )
    } else if(icon){
        return(
            <div className="flex flex-row sticky pt-10 pl-10">
                <img src={"icons/" + icon + ".svg"} alt="" className="h-[40px] pr-2" />
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


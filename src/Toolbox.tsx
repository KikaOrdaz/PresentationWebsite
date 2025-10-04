import { TypographyH2, TypographyH4, TypographyP } from "./Typography"
import { tools } from "./constants"


export default function Toolbox(){
    const prog_li = (lang : string[]) => lang.map((l) => (
        <li key={l}> <TypographyP text={l}/> </li>
    ))

    const tools_li = (tool : {name:string, icon:string}[]) => tool.map((t) => (
        <li key={t.name} className="flex flex-row items-center gap-2">
            <TypographyP text={t.name}/> 
            <img src={"public/icons/toolbox/"+t.icon+".svg"}/>
        </li>
    ))


    const prog = tools.proglang.objects.map((value) => {return(
        <div key={crypto.randomUUID()} className="grid grid-cols-2 items-center gap-16 pt-5">
            <div className="flex flex-col items-start">
                <TypographyH4 text={value.type} />
                <ul className="list-none">
                    {prog_li(value.langs)}
                </ul>
            </div>

            <img src={"public/icons/toolbox/"+value.icon+".svg"}/>
        </div>
    )})

    const tools_list = (tool : {name:string, icon:string}[]) => {return(
        <div className="flex flex-col place-content-end pt-5 items-stretch justify-between">
            <ul className="list-none">
                {tools_li(tool)}
            </ul>
        </div>
        
    )}

    return(
        <div className="grid grid-cols-3 w-screen h-screen items-start pt-15">
            <div className="flex flex-col items-center">
                <div className="flex flex-row place-content-center items-center gap-1">
                    <img src={"public/icons/toolbox/"+tools.proglang.icon + ".svg"} />
                    <TypographyH2 text={tools.proglang.name} />
                </div>
        
                <div className="items-start">
                    {prog}
                </div>
            </div>
            
            <div className="flex flex-col place-content-center items-center justify-between">
                <div className="grid pt-5 items-center place-content-center pb-32 translate-x-10">
                    <div className="col-start-2 row-start-1">
                        <img src="public/icons/toolbox/toolbox.svg" />
                    </div>
                    <div className="col-start-2 row-start-1 -translate-x-48 -translate-y-6">
                        <img src="public/arrows/toolbox/setacurvalarga.svg" className="" />
                    </div>
                    <div className="col-start-2 row-start-1 translate-x-24">
                        <img src="public/arrows/toolbox/setacurva4.svg" className="" />
                    </div>
                    <div className="col-start-2 row-start-1 translate-y-32 translate-x-10">
                        <img src="public/arrows/toolbox/setaondulada2.svg" className="" />
                    </div>
                </div>
                
                <div className="">
                    <div className="flex flex-row place-content-center items-center gap-1">
                        <img src={"public/icons/toolbox/"+tools.lang.icon + ".svg"} />
                        <TypographyH2 text={tools.lang.name} />
                    </div>
                    <div className="items-end">
                        {tools_list(tools.lang.objects)}
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col place-content-center items-center">
                <div className="flex flex-row place-content-center items-center gap-1">
                    <img src={"public/icons/toolbox/"+tools.softskills.icon + ".svg"} />
                    <TypographyH2 text={tools.softskills.name} />
                </div>

                <div className="items-end">
                    {tools_list(tools.softskills.objects)}
                </div>
            </div>

        </div>
    )
}
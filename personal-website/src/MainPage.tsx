import { TypographyLead1, TypographyLead2,} from "./Typography"
// import Footer from "./Footer";
import Icon from "./Icon";
import { pages_values, main_text } from "./constants";

export default function MainPage(){
    return(
        <div className="flex flex-col w-screen h-screen">
          <div className="flex grow"></div>
          <div className="grid grid-cols-3 ">
                <div className="flex place-items-center justify-center pl-15">
                    <TypographyLead1 text={main_text}/>
                </div>
                <Avatar/>
                <Index />
            </div>

            <div className="flex grow"></div>

      </div>
    )
}

function Index(){
  
  const arrows = pages_values.map(function(index) {
    if(index.img_src){
      return(
        <img key={index.id} src={"src/arrows/" + index.arrow.src + ".svg"} className={"relative" + " " + index.arrow.class}/>
      );
    }
  });

  const indexElements = pages_values.map(function(index) {
   if(index.img_src){   
      return(
          <a href={"#"+index.div}>
            <div key={index.id} className={"flex flex-row align-content-middle relative"}>
              {/* <img src={"src/arrows/" + index.arrow.src + ".svg"} className={"relative" + " " + index.arrow.class}/> */}
              <TypographyLead2 text={index.name}/>
              <Icon src={"src/icons/" + index.img_src + ".svg"} size="30" pad="px-3"/>
            </div>
          </a>
      );
    }
  });
  
  return (
    <div className="grid grid-cols-2 relative -left-[150px]">
      <div className="grid grid-rows-5 place-items-center justify-center ">
        {arrows}
      </div>
      <div className="grid grid-rows-5 place-items-center justify-center">
        {indexElements}
      </div>
    </div>
  );

}


function Avatar() {
  return (
    <div className="flex place-items-center justify-center relative">
      <div className="w-50 h-50 rounded-full overflow-hidden">
        <img
          src="src/images/IMG_2099.JPG"
          alt="Avatar de kika"
          className="w-full h-full object-cover"
        />
      </div>
      <img src="src/arrows/setaondulada.svg" className="absolute top-[290px] left-[150px]"/>
      <div className="absolute top-[500px]">
        <TypographyLead2 text="Eu!"/>
      </div>
    </div>
  );
}




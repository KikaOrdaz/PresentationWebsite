import { TypographyLead1, TypographyLead2,} from "./Typography"
// import Footer from "./Footer";
import Icon from "./Icon";

export default function PageIndex(){
    return(
        <div className="flex flex-col w-screen h-screen">
          <div className="flex grow"></div>
          <div className="grid grid-cols-3 ">
                <div className="flex place-items-center justify-center pl-15">
                    <TypographyLead1 text="Olá! Eu sou a Francisca. Terminei recentemente o meu Mestrado em Engenharia Informática e de Computadores pelo Técnico. Tenho experiência em desenvolvimento web e mobile, em trabalhar com equipas multidisciplinares, com uma forte paixão por design centrado no utilizador. Sediada em Lisboa, trago otimismo, criatividade e um espírito colaborativo tanto para a tecnologia como para a vida. Gosto de música, histórias com emoção, viajar e organizar eventos, e tenho um compromisso profundo com o crescimento pessoal — 
                    o meu e o dos outros."/>
                </div>
                <Avatar/>
                <Index />
            </div>

            <div className="flex grow"></div>

      </div>
    )
}

const index_values = [
  {id : 0, div:"estudei", name: "Onde estudei", img_src : "pencil", arrow : {src : "setacurva1", class : "left-[20px]",}},
  {id : 1, div:"aprendi", name: "Onde aprendi", img_src : "guitar", arrow : {src : "setacurva2", class : "  -rotate-6 left-[20px]",}},
  {id : 2, div:"gosto", name: "Coisas de que gosto", img_src : "plane", arrow : {src : "setaloop1", class : "left-[10px]",}},
  {id : 3, div:"tools", name: "Caixa de ferramentas", img_src : "tool", arrow : {src : "setaloop2", class : "top-[20px]",}},
  {id : 4, div:"futuro", name: "Futuro", img_src : "rocket", arrow : {src : "setacurva3", class : "",}},
]

function Index(){
  
  const arrows = index_values.map(function(index) {
    return(
      <img key={index.id} src={"src/arrows/" + index.arrow.src + ".svg"} className={"relative" + " " + index.arrow.class}/>
    );
  });

  const indexElements = index_values.map(function(index) {
    return(
        <a href={"#"+index.div}>
          <div key={index.id} className={"flex flex-row align-content-middle relative"}>
            {/* <img src={"src/arrows/" + index.arrow.src + ".svg"} className={"relative" + " " + index.arrow.class}/> */}
            <TypographyLead2 text={index.name}/>
            <Icon src={"src/icons/" + index.img_src + ".svg"} size="30" pad="px-3"/>
          </div>
        </a>
    );
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




import { TypographyH1, TypographyLead1, TypographyLead2,} from "./Typography"
import Footer from "./Footer";
import Icon from "./Icon";

export default function PageIndex(){
    return(
        <div className="flex flex-col ">
            <div className="flex flex-row pb-5">
                <div className="flex grow"></div>
                <TypographyH1 text="Francisca Ordaz"/>
                <div className="flex grow"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="flex place-items-center justify-center">

                    <TypographyLead1 text="Olá! Eu sou a Francisca. Terminei recentemente o meu Mestrado em Engenharia Informática e de Computadores pelo Técnico. Tenho experiência em desenvolvimento web e mobile, em trabalhar com equipas multidisciplinares, com uma forte paixão por design centrado no utilizador. Sediada em Lisboa, trago otimismo, criatividade e um espírito colaborativo tanto para a tecnologia como para a vida. Gosto de música, histórias com emoção, viajar e organizar eventos, e tenho um compromisso profundo com o crescimento pessoal — 
                    o meu e o dos outros."/>
                </div>
                <div className="flex place-items-center justify-center">
                    <Avatar/>
                </div>
                <div className="grid grid-rows-5 place-items-center justify-center">
                    <div className="flex flex-row align-content-middle">
                      <TypographyLead2 text="Onde estudei"/>
                      <Icon src="src/icons/pencil.svg" size="5" pad="px-3"/>
                    </div>
                    <div className="flex flex-row align-content-middle">
                      <TypographyLead2 text="Onde aprendi"/>
                      <Icon src="src/icons/guitar.svg" size="5" pad="px-3"/>
                    </div>
                    <div className="flex flex-row align-content-middle">
                      <TypographyLead2 text="Coisas de que gosto"/>
                      <Icon src="src/icons/plane.svg" size="5" pad="px-3"/>
                    </div>
                    <div className="flex flex-row align-content-middle">
                      <TypographyLead2 text="Caixa de ferramentas"/>
                      <Icon src="src/icons/tool.svg" size="5" pad="px-3"/>
                    </div>
                    <div className="flex flex-row align-content-middle">
                      <TypographyLead2 text="Futuro"/>
                      <Icon src="src/icons/rocket.svg" size="5" pad="px-3"/>
                    </div>
                </div>
            </div>
            <div className="bottom-2">
                <Footer/>
            </div>
      </div>
    )
}


function Avatar() {
  return (
    <div className="w-50 h-50 rounded-full overflow-hidden">
      <img
        src="src/images/IMG_2099.JPG"
        alt="Avatar de kika"
        className="w-full h-full object-cover"
      />
    </div>
  );
}



/* 
Onde estudei
Onde aprendi
Coisas de que gosto
Caixa de ferramentas
Futuro
*/
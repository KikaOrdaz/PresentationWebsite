import MainPage from "./MainPage"
// import GenericPage from "./GenericPage"
import { Study, Learn } from "./EducationPages"
import Interests from "./Interests"
import Toolbox from "./Toolbox"



export const main_text = "Olá! Eu sou a Francisca. Terminei recentemente o meu Mestrado em Engenharia Informática e de Computadores pelo Técnico. Tenho experiência em desenvolvimento web e mobile, em trabalhar com equipas multidisciplinares, com uma forte paixão por design centrado no utilizador. Sediada em Lisboa, trago otimismo, criatividade e um espírito colaborativo tanto para a tecnologia como para a vida. Gosto de música, histórias com emoção, viajar e organizar eventos, e tenho um compromisso profundo com o crescimento pessoal — o meu e o dos outros."

export const texts = {
  maristas : "Os Maristas deram-me parte da minha formação base. Nos meus 8 anos lá, trago principalmente as experiências únicas em que pude participar e a forma como me senti desafiada ao longo dos anos. Desde pequenas peregrinações a Fátima onde trabalhei muito a dimensão espiritual, às viagens onde pude participar, nomeadamente ao CERN.",
  licenciatura : "Durante a minha licenciatura no Técnico, tive a oportunidade de ficar a conhecer as várias áreas que o mundo da Informática engloba. Na cadeira de Interação Pessoa Máquina, descobri então o meu lugar nesse mundo, com uma área de estudo virada para as pessoas e com o objetivo de lhes levar ferramentas que complementem e melhorem o seu dia a dia. Essa cadeira fundamental para me ajudar a determinar o caminho que eu quereria seguir posteriormente. Parte da minha licenciatura foi durante a pandemia, o que acabou por marcar muito o que eu iria valorizar no resto do meu percurso académico e ficar a conhecer melhor as minhas valências e métodos de trabalho preferenciais.",
  mestrado : "No meu mestrado enverguei na área de Interação e Visualização, com algumas cadeiras fora da minha área também. As cadeiras que mais me impactaram foram as de Produção de Conteúdos Multimédia, que me permitiu explorar um lado mais criativo e Estúdio de Design de Interação que fez perceber a importância do co-design.\nEm Erasmus, participei no iOS Foundation Program na Università Parthenope di Napoli, que foi muito valioso pois me permitiu mergulhar num ambiente verdadeiramente napolitano e desenvolver projetos de raiz numa equipa multidisciplinar.\nA minha tese foi virada para a área da acessibilidade, e baseou-se no desenvolvimento de uma plataforma para linguistas da Língua Gestual Portuguesa poderem fazer a descrição de um corpus de gestos através de 5 parâmetros (a forma da mão, orientação da palma, movimento associado, localização do gesto e ainda a expressão facial).",
  guias : "As Guias foram a minha casa e porto seguro durante uma grande parte da minha vida. Dos 10 aos 18, formaram-me em aspetos fundamentais de quem eu sou: na resolução de problemas, no trabalho em equipa, principalmente com pessoas muito diferentes de mim e em ver a beleza das coisas mais simples, mesmo no desconforto.\nDos 19 aos 24 foi quando aprendi, cresci e ganhei mais nesta associação. Passei a orientar raparigas entre os 10 e os 17 e aí aprendi sobre planeamento, trabalho através de objetivos e muito também sobre empatia e confiança. Apesar de já não estar ativamente nas Guias, continuo a participar e ajudar no que posso.",
  tfist : "Entrei para a TFIST relativamente tarde no meu percurso no Técnico, mesmo depois da pandemia. Fui atraída por ganhar uma família dentro da minha faculdade e muito pela música e tradição. Ganhei certamente uma família, aprofundei a minha ligação à cultura portuguesa e pude visitar várias cidades graças às nossas competições musicais. Aqui aprendi também muito sobre organização de eventos, delegação de tarefas, liderança e gestão e orientação de jovens adultas.",
  erasmus : "Retirei do meu tempo em Nápoles, tudo o que tinha idealizado para o meu Erasmus e mais um bocadinho. Pude abrandar do ritmo acelerado que estava a viver em Lisboa, vivi sozinha pela primeira vez, aprendi a falar italiano e comi muito e muito bem! Fiz amizades marcantes e deixei-me apaixonar por uma cidade brutta (feia) à primeira vista e voltei de coração e barriga cheios. Nunca vou esquecer que “A Napoli si piange due volte: quando arrivi e quando te ne vai”.",
}

export const pages_values = [
  {id : 0, div:"main", name:"Francisca Ordaz", extra : "", img_src : "", arrow:{}, component:MainPage, text : main_text},
  {id : 1, div:"estudei", name: "Onde estudei", extra : "", img_src : "pencil", arrow : {src : "setacurva1", class : "left-[20px]",}, component:Study},
  {id : 2, div:"aprendi", name: "Onde aprendi", extra : " (para além dos livros)", img_src : "guitar", arrow : {src : "setacurva2", class : "  -rotate-6 left-[20px]",}, component:Learn},
  {id : 3, div:"gosto", name: "Coisas de que gosto", extra : "", img_src : "plane", arrow : {src : "setaloop1", class : "left-[10px]",}, component:Interests},
  {id : 4, div:"tools", name: "Caixa de ferramentas", extra : "", img_src : "tool", arrow : {src : "setaloop2", class : "top-[20px]",}, component:Toolbox},
  // {id : 5, div:"futuro", name: "Futuro", extra : " (onde quero continuar a aprender)", img_src : "rocket", arrow : {src : "setacurva3", class : "",}, component:GenericPage},
]

export const education_pages =
        {study : [
            {id : 0, name:"Instituto Superior Técnico", dates:"Licenciatura | 2018 - 2022 ", image:"Licenciatura", text: texts.licenciatura, div:"licenciatura", side:"left"},
            {id : 1, name:"Instituto Superior Técnico", dates:"Mestrado | 2022 - 2025", image:"Mestrado", text: texts.mestrado, div:"mestrado", side:"right"},
            {id : 2, name:"Colégio Marista de Carcavelos", dates:"2010 - 2018", image:"Maristas", text: texts.maristas, div:"maristas", side:"left"}],
        learn : [
            {id : 0, name:"Associação Guias de Portugal", dates:"2010 - 2024", image:"Guias", text: texts.guias, div:"guias", side:"left"},
            {id : 1, name:"Tuna Feminina do Instituto Superior Técnico", dates:"2022 - Presente", image:"Tuna", text: texts.tfist, div:"tuna", side:"right"},
            {id : 2, name:"Erasmus em Nápoles", dates:"Março de 2023 - Julho de 2023", image:"Erasmus", text: texts.erasmus, div:"erasmus", side:"left"}]
          }
    
export const tools = {
  proglang:{name: "Linguagens de Programação" , icon:"codinglanguages", objects:[{type:"Bases", icon:"lego", langs:["C","Python","Java","SQL"]},{type:"Mobile", icon:"phone", langs:["Swift","Kotlin"]},{type:"Frontend", icon:"cursor", langs:["Svelte","Javascript","HTML","Typescript"]}],},
  lang:{name: "Línguas" , icon:"translate", objects:[{name:"Português", icon:"c2-doodle"},{name:"Inglês", icon:"c2-doodle"},{name:"Italiano", icon:"b1-doodle"}],},
  softskills:{name: "Soft Skills" , icon:"softskills", objects:[{name:"Trabalho de Equipa", icon:"team"},{name:"Criatividade e Resolução de Problemas", icon:"puzzle"},{name:"Liderança e Mentoria", icon:"flag"},{name:"Planeamento Orientado a Objetivos", icon:"target"},{name:"Falar em Público", icon:"publicspeaking"}]},
}
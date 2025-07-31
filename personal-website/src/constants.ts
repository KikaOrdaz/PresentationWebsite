import MainPage from "./MainPage"
import GenericPage from "./GenericPage"
import { Study, Learn } from "./EducationPages"

export const main_text = "Olá! Eu sou a Francisca. Terminei recentemente o meu Mestrado em Engenharia Informática e de Computadores pelo Técnico. Tenho experiência em desenvolvimento web e mobile, em trabalhar com equipas multidisciplinares, com uma forte paixão por design centrado no utilizador. Sediada em Lisboa, trago otimismo, criatividade e um espírito colaborativo tanto para a tecnologia como para a vida. Gosto de música, histórias com emoção, viajar e organizar eventos, e tenho um compromisso profundo com o crescimento pessoal — o meu e o dos outros."

export const pages_values = [
  {id : 0, div:"main", name:"Francisca Ordaz", extra : "", img_src : "", arrow:{}, component:MainPage, text : main_text, show:true},
  {id : 1, div:"estudei", name: "Onde estudei", extra : "", img_src : "pencil", arrow : {src : "setacurva1", class : "left-[20px]",}, component:Study, show:true},
  {id : 2, div:"aprendi", name: "Onde aprendi", extra : " (para além dos livros)", img_src : "guitar", arrow : {src : "setacurva2", class : "  -rotate-6 left-[20px]",}, component:Learn, show:true},
  {id : 3, div:"gosto", name: "Coisas de que gosto", extra : "", img_src : "plane", arrow : {src : "setaloop1", class : "left-[10px]",}, component:GenericPage, show:true},
  {id : 4, div:"tools", name: "Caixa de ferramentas", extra : "", img_src : "tool", arrow : {src : "setaloop2", class : "top-[20px]",}, component:GenericPage, show:true},
  {id : 5, div:"futuro", name: "Futuro", extra : " (onde quero continuar a aprender)", img_src : "rocket", arrow : {src : "setacurva3", class : "",}, component:GenericPage, show:true},
]

export const education_pages =
        {study : [
            {id : 0, name:"Instituto Superior Técnico", dates:"Licenciatura | 2018 - 2022 ", image:"Licenciatura", text: "", div:"licenciatura", side:"left"},
            {id : 1, name:"Instituto Superior Técnico", dates:"Mestrado | 2022 - 2025", image:"Mestrado", text: "", div:"mestrado", side:"right"},
            {id : 2, name:"Colégio Marista de Carcavelos", dates:"2010 - 2018", image:"Maristas", text: "", div:"maristas", side:"left"}],
        learn : [
            {id : 0, name:"Associação Guias de Portugal", dates:"2010 - 2024", image:"Guias", text: "", div:"guias", side:"left"},
            {id : 1, name:"Tuna Feminina do Instituto Superior Técnico", dates:"2022 - Presente", image:"Tuna", text: "", div:"tuna", side:"right"},
            {id : 2, name:"Erasmus em Nápoles", dates:"Março de 2023 - Julho de 2023", image:"Erasmus", text: "", div:"erasmus", side:"left"}]
          }
    
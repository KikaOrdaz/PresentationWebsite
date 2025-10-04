import './App.css'
import Footer from "./Footer";import PageTitle from "./PageTitle";
import { pages_values } from './constants';
import { createContext } from 'react';
import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";


interface Page {
  id: number, 
  div : string,
  title : string,
  extra : string,
  icon : string,
  arrow : string,
  assets : string,
}

// fazer função que converta valories da base de dados para valores normais
const default_context : Page[] = [{id: 0, div: "main", title:"Francisca Ordaz", extra : "", icon : "", arrow : "",  assets : '{"text" : "Olá! Eu sou a Francisca. Terminei recentemente o meu Mestrado em Engenharia Informática e de Computadores pelo Técnico. Tenho experiência em desenvolvimento web e mobile, em trabalhar com equipas multidisciplinares, com uma forte paixão por design centrado no utilizador. Sediada em Lisboa, trago otimismo, criatividade e um espírito colaborativo tanto para a tecnologia como para a vida. Gosto de música, histórias com emoção, viajar e organizar eventos, e tenho um compromisso profundo com o crescimento pessoal — o meu e o dos outros."}'}]

const AppContext = createContext<Page[]>(default_context);


function App() {
  const [pages] = useState<Page[]>([]);


async function getPages() {
  }

  useEffect(() => {
    console.log("useEffect")
    getPages();
    
  }, []);

  return (
    <AppContext value={pages}>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
        <Pages />
        <div className="sticky bottom-5">
          <Footer />
        </div>
      </div>
    </AppContext>
  )
}

export default App


function Pages() {
  return (
    <>
      {pages_values.map((index) => (
        <div key={index.id} id={index.div} className="flex flex-col snap-start relative">
          <PageTitle text={index.name+index.extra} icon={index.img_src} div={index.div}/>
          <index.component />
        </div>
      ))}
    </>
  );
}
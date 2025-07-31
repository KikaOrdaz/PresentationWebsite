// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PageIndex from './PageIndex'
import Footer from "./Footer";import PageTitle from "./PageTitle";

const index_values = [
  {id : 0, div:"main", name:"Francisca Ordaz", extra : "", img_src : "", arrow:{}, component:PageIndex},
  {id : 1, div:"estudei", name: "Onde estudei", extra : "", img_src : "pencil", arrow : {src : "setacurva1", class : "left-[20px]",}, component:GenericPage},
  {id : 2, div:"aprendi", name: "Onde aprendi", extra : " (para além dos livros)", img_src : "guitar", arrow : {src : "setacurva2", class : "  -rotate-6 left-[20px]",}, component:GenericPage},
  {id : 3, div:"gosto", name: "Coisas de que gosto", extra : "", img_src : "plane", arrow : {src : "setaloop1", class : "left-[10px]",}, component:GenericPage},
  {id : 4, div:"tools", name: "Caixa de ferramentas", extra : "", img_src : "tool", arrow : {src : "setaloop2", class : "top-[20px]",}, component:GenericPage},
  {id : 5, div:"futuro", name: "Futuro", extra : " (onde quero continuar a aprender)", img_src : "rocket", arrow : {src : "setacurva3", class : "",}, component:GenericPage},
]

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
      <Pages />
      <div className="sticky bottom-5">
        <Footer />
      </div>
    </div>
  )
}

export default App



function Pages() {
  return (
    <>
      {index_values.map((index) => (
        <div key={index.id} id={index.div} className="snap-start">
          <PageTitle text={index.name+index.extra} icon={index.img_src}/>
          <index.component />
        </div>
      ))}
    </>
  );
}

function GenericPage(){
  return(
    <div className='w-screen h-screen'></div>
  )
}
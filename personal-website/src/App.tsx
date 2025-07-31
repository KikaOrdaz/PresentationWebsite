import './App.css'
import Footer from "./Footer";import PageTitle from "./PageTitle";
import { pages_values } from './constants';


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
      {pages_values.map((index) => (
        <div key={index.id} id={index.div} className="flex flex-col snap-start relative">
          <PageTitle text={index.name+index.extra} icon={index.img_src}/>
          <index.component />
        </div>
      ))}
    </>
  );
}


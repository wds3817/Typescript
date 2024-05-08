//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import moduleOne from './one.module.css'
//import moduleTwo from './two.module.css'
import './App.css'
//const logoName = "sakura";
//const module = await import(`./png-images/${logoName}.png`); //as {default: string};
const modules = import.meta.glob<{default:string}>('./png-images/*.png', {eager: true})


//console.log(moduleOne);


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id='treeShape'>
        {Object.values(modules).map(src=> <img src={src.default} />)}
        {/*} <img src={module.default} {*/}
      </div>
      <h1 className={moduleOne.highlight}>Vite + React</h1>
      <a href="/another-route/">Another Route</a>
    </>
  )
}

export default App

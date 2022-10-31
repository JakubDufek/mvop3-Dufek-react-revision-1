import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'
import CardDynamic from './CardDynamic'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><Card />,
    <CardDynamic name="chleba" text="chleba tě spasí protože se mu chce" url="https://cs.wikipedia.org/wiki/Chl%C3%A9b"/>
    <CardDynamic name="rohlík" text="rohlík tě spasí protože může" url="https://cs.wikipedia.org/wiki/Rohl%C3%ADk"/>
    <CardDynamic name="rajče" text="rohlík tě nespasí  protože, proč by mělo" url="https://cs.wikipedia.org/wiki/Raj%C4%8De_jedl%C3%A9"/>
    <CardDynamic name="rkatamarán" text="musíme učtívat všechny katamarády" url="https://cs.wikipedia.org/wiki/Katamar%C3%A1n"/>
    </>
    
    
  )
}

export default App

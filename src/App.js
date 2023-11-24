import { useState } from 'react'
import './tailwind.css'
import Button from './components/Button'
import Tab from "./components/Tab"

function Profile() {
  return (
    <div>
      burası profile tabı 
    </div>
  )
}

function App() {
  const todos = ['todo1','todo2','todo3']
  const style = {color:'red', backgroundColor:'yellow'}

  const [activeTab, setActiveTab] = useState(1)
    return (
      
    <main id="main" className="test">
      <div style={{padding:20}}>
        <button onClick={() => setActiveTab(2)}>
          Aktif Tabı Değiştir
        </button>
      <Tab activeTab={activeTab} onChange={tabIndex =>setActiveTab(tabIndex)}>
        <Tab.Panel title="Profil"><Profile /></Tab.Panel>
        <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
      </Tab>
      {activeTab ===2 &&(
        <div>
          burası da ekstra bir alan!
        </div>
      )}
      </div>
      <div style={{padding: 20}}>
      <Button>
      buton örneği
      </Button>
      <Button variant="success">
      buton örneği
      </Button>
      <Button variant="danger">
      buton örneği
      </Button>
      <Button variant="warning">
      buton örneği
      </Button>
     
      </div>
      <h1 tabIndex="3" style={style}>alparslan</h1>
      <label htmlFor="search" tabIndex="2">Arama</label>
      <input type="text" id="search" tabIndex="1" />
      <ul>
        {todos.map((todo, index) =>(
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </main>
 );
}

export default App;

import '../styles/global.css'
import '../styles/App.css'
import { useState } from 'react'
import down_arrow from '../assets/down_arrow.png'

function App() {
  const [ slot_active, set_slot_active ] = useState({})

  const slots = [0, 1]


  function toggle_slot(slot) { 
    set_slot_active({
      [slot]: !slot_active[slot]
    })
  }

  return (
    <div className='AO' >


      { slots.map( ( slot ) => (
        <div className={`slot ${slot_active[slot] ? 'slot-active' : ''}`} onClick={ () => toggle_slot(slot) }>
        <label>Watch this location for changes</label>
        <input></input> {/* directory to watch */}
        <img src={down_arrow} alt='down_arrow'></img>
        <label>Upon changes, create new copies in this location</label>
        <input></input> {/* backup directory */}
      </div>
      ) ) }


    </div>
  )
}

export default App;

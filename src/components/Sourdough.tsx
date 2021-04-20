import React from 'react';
import { Ratios } from '.';

import { SourdoughState, sourdoughReduder } from '../reducer/sourdoughReducer'

const initialState: SourdoughState = {
  water: 0,
  sourdough: 0,
  salt: 0,
  finalFlour: 0
}

export default function Sourdough() {
  const [ hydration, setHydration ] = React.useState("82")
  const [ flour, setFlour ] = React.useState("600")
  const [ saltPercentage, setSaltPercentage ] = React.useState("2.2")
  const [ sourdoughPercentage, setSourdoughPercentage ] = React.useState("10")
  const [ includeSourdough, setIncludeSourdough ] = React.useState(false)

  const [state, dispatch] = React.useReducer(
    sourdoughReduder,
    initialState
  )

  const { water, sourdough, salt, finalFlour } = state;

  React.useEffect(() => {
    dispatch({ 
      type: 'calc',
      flour: Number(flour), 
      hydration: Number(hydration), 
      saltPercentage: Number(saltPercentage),
      sourdoughPercentage: Number(sourdoughPercentage),
      includeSourdough
    })
  }, [hydration, flour, saltPercentage, sourdoughPercentage, includeSourdough])

  return (
    <div className="container small-container">
      <h1 className="center-text">Surdegskalkylatorn</h1>
      <h3 className="center-text">Beräkna mängder genom att ange hydrering, mängden mjöl samt hur mycket salt.</h3>

      <form className="content-form">
        <label htmlFor="hydration">Hydrering (%):</label>
        <input id="hydration" type="number" onChange={(e) => setHydration(e.target.value)} value={hydration} placeholder="Ange hydrering i procent" max={100} min={0} />
        <label htmlFor="flour">Mjöl (g):</label>
        <input id="flour" type="number" onChange={(e) => setFlour(e.target.value)} value={flour} placeholder="Ange mjöl i gram" />
        
        <div className="slider-container">
          <label className="top-padding" htmlFor="salt">Salt:</label>
          <input id="salt" type="range" min="0" max="10" step="0.1" onChange={(e) => setSaltPercentage(e.target.value)} value={saltPercentage} />
          <span>{saltPercentage}%</span>
        </div>
        
        <div className="slider-container">
          <label className="top-padding" htmlFor="sourdough">Surdeg:</label>
          <div className="sourdough-combo">
            <input id="sourdough" type="range" min="0" max="50" onChange={(e) => setSourdoughPercentage(e.target.value)} value={sourdoughPercentage} />
            <div className="sourdough-check noselect" onClick={() => setIncludeSourdough((v) => !v)}>
              <input type="checkbox" checked={includeSourdough} />
              <span>Räkna in surdegen i totala hydreringen</span>
            </div>
          </div>
          <span>{sourdoughPercentage}%</span>
        </div>
        
      </form>

      <Ratios 
        flour={finalFlour}
        water={water}
        sourdough={sourdough}
        salt={salt} 
      />

      <p>* Surdegsgrunden är 100% hydrerad.</p>

    </div>
  );
}

import React from 'react';
import { Ratios } from '.';

import { SourdoughState, sourdoughReduder } from '../reducer/sourdoughReducer'

const initialState: SourdoughState = {
  water: 0,
  sourdough: 0,
  salt: 0
}

export default function Sourdough() {
  const [ hydration, setHydration ] = React.useState("82")
  const [ flour, setFlour ] = React.useState("600")
  const [ saltPercentage, setSaltPercentage ] = React.useState("2")

  const [state, dispatch] = React.useReducer(
    sourdoughReduder,
    initialState
  )

  const { water, sourdough, salt } = state;

  React.useEffect(() => {
    dispatch({ 
      type: 'calc',
      flour: Number(flour), 
      hydration: Number(hydration), 
      saltPercentage: Number(saltPercentage)
    })
  }, [hydration, flour, saltPercentage])

  return (
    <div className="container small-container">
      <h1 className="center-text">Surdegskalkylatorn</h1>
      <h3 className="center-text">Beräkna mängder genom att ange hydrering, mängden mjöl samt hur mycket salt.</h3>

      <form className="content-form">
        <label htmlFor="hydration">Hydrering (%):</label>
        <input id="hydration" type="number" onChange={(e) => setHydration(e.target.value)} value={hydration} placeholder="Ange hydrering i procent" max={100} min={0} />
        <label htmlFor="flour">Mjöl (g):</label>
        <input id="flour" type="number" onChange={(e) => setFlour(e.target.value)} value={flour} placeholder="Ange mjöl i gram" />
        <label htmlFor="salt">Salt:</label>
        <div className="salt-container">
          <input id="salt" type="range" min="0" max="10" step="0.1" onChange={(e) => setSaltPercentage(e.target.value)} value={saltPercentage} />
          <span>{saltPercentage}%</span>
        </div>
        
      </form>

      <Ratios 
        flour={Number(flour)}
        water={water}
        sourdough={sourdough}
        salt={salt} 
      />

    </div>
  );
}

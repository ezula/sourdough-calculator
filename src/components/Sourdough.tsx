import React, { useReducer } from 'react';
import { Ratios } from '.';

import sourdoughReduder, { SourdoughState, SourdoughReducer } from '../reducer/sourdoughReducer'

const initialState: SourdoughState = {
  finalWater: 0,
  sourdough: 0,
  salt: 0,
  finalFlour: 0,
};

export default function Sourdough() {
  const [hydration, setHydration] = React.useState("72");
  const [flour, setFlour] = React.useState("600");
  const [water, setWater] = React.useState("");
  const [saltPercentage, setSaltPercentage] = React.useState("2.2");
  const [sourdoughPercentage, setSourdoughPercentage] = React.useState("10");
  const [includeSourdough, setIncludeSourdough] = React.useState(false);

  const [state, dispatch] = useReducer<SourdoughReducer>(
    sourdoughReduder,
    initialState
  );

  const { finalWater, sourdough, salt, finalFlour } = state;

  React.useEffect(() => {
    dispatch({
      type: 'calc',
      flour: Number(flour),
      water: Number(water),
      hydration: Number(hydration),
      saltPercentage: Number(saltPercentage),
      sourdoughPercentage: Number(sourdoughPercentage),
      includeSourdough,
    });
  }, [
    hydration,
    flour,
    water,
    saltPercentage,
    sourdoughPercentage,
    includeSourdough,
  ]);

  return (
    <div className="container small-container">
      <h1 className="center-text">Surdegskalkylatorn</h1>
      <h3 className="center-text">Beräkna mängder genom att ange hydrering, mängden mjöl samt hur mycket salt.</h3>

      <form className="content-form">
        <label htmlFor="hydration">Hydrering (%):</label>
        <input id="hydration" type="number" tabIndex={1} onChange={(e) => setHydration(e.target.value)} value={hydration} placeholder="Ange hydrering i procent" max={100} min={0} />
        <div className='flex-side-by-side'>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 2 }}>
            <label htmlFor="flour">Mjöl (g):</label>
            <input id="flour" type="number" tabIndex={2} onFocus={() => { setWater('') }} onChange={(e) => setFlour(e.target.value)} value={flour} placeholder="Ange mjöl i gram" />
          </div>
          <div style={{ display: 'flex', flexGrow: 1 }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 2 }}>
            <label htmlFor="water">eller vatten (g):</label>
            <input id="water" type="number" onFocus={() => { setFlour('') }} onChange={(e) => setWater(e.target.value)} value={water} placeholder="Ange vatten i gram" />
          </div>
        </div>
        <div className="slider-container">
          <label className="top-padding" htmlFor="salt">Salt:</label>
          <input id="salt" type="range" tabIndex={3} min="0" max="10" step="0.1" onChange={(e) => setSaltPercentage(e.target.value)} value={saltPercentage} />
          <span>{saltPercentage}%</span>
        </div>
        
        <div className="slider-container">
          <label className="top-padding" htmlFor="sourdough">Surdeg:</label>
          <div className="sourdough-combo">
            <input id="sourdough" type="range" tabIndex={4} min="0" max="50" onChange={(e) => setSourdoughPercentage(e.target.value)} value={sourdoughPercentage} />
            <div className="sourdough-check noselect" onClick={() => setIncludeSourdough((v) => !v)}>
              <input type="checkbox" tabIndex={5} checked={includeSourdough} onChange={() => null} />
              <span>Räkna in surdegen i totala hydreringen</span>
            </div>
          </div>
          <span>{sourdoughPercentage}%</span>
        </div>
        
      </form>

      <Ratios 
        flour={finalFlour}
        water={finalWater}
        sourdough={sourdough}
        salt={salt} 
      />

      <p>* Surdegsgrunden består av lika delar mjöl och vatten.</p>

    </div>
  );
}

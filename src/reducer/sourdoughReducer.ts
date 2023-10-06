type SourdoughReducer = (_state: SourdoughState, action: SourdoughActions) => SourdoughState

type SourdoughState = {
  finalWater: number
  sourdough: number
  salt: number
  finalFlour: number
}

type CalculateAction = {
  type: 'calc',
  water?: number,
  flour?: number
  hydration: number
  saltPercentage: number
  sourdoughPercentage: number
  includeSourdough: boolean
}

type SourdoughActions = CalculateAction;

const sourdoughReduder = (_state: SourdoughState, action: SourdoughActions) => {
  const { flour, water, hydration, saltPercentage, sourdoughPercentage, includeSourdough } = action;
  if (action.type !== 'calc') {
    return _state;
  }

  if (!flour && !water) {
    return {
      finalWater: 0,
      sourdough: 0,
      salt: 0,
      finalFlour: 0
    }
  }

  const sourdoughInGrams = (flour || (water! * (100 / hydration))) * (sourdoughPercentage / 100)
  let halfOfTheSourdoughInGrams = 0

  if (includeSourdough) {
    halfOfTheSourdoughInGrams = sourdoughInGrams / 2
  }

  const calculatedFlour = flour
    ? flour - halfOfTheSourdoughInGrams
    : water! * (100 / hydration) - halfOfTheSourdoughInGrams
  const calculatedWater = flour
    ? flour * (hydration / 100) - halfOfTheSourdoughInGrams
    : water! - halfOfTheSourdoughInGrams  

  const calculatedFlourWithouthSourdough = calculatedFlour + halfOfTheSourdoughInGrams;

  return {
    finalWater: Math.round(calculatedWater),
    sourdough: Math.round(calculatedFlourWithouthSourdough * (sourdoughPercentage / 100)),
    salt: Math.round(calculatedFlour * (saltPercentage / 100)),
    finalFlour: Math.round(calculatedFlour)
  }
}

export default sourdoughReduder
export type { SourdoughState, SourdoughActions, SourdoughReducer }

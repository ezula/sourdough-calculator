type SourdoughState = {
  water: number
  sourdough: number
  salt: number
  finalFlour: number
}

type CalculateAction = {
  type: 'calc'
  flour: number
  hydration: number
  saltPercentage: number
  sourdoughPercentage: number
  includeSourdough: boolean
}

type SourdoughActions = CalculateAction;

const sourdoughReduder = (_state: SourdoughState, action: SourdoughActions) => {
  if (action.type === 'calc') {
    const { flour, hydration, saltPercentage, sourdoughPercentage, includeSourdough } = action;

    const sourdoughInGrams = flour * (sourdoughPercentage / 100)
    let halfOfTheSourdoughInGrams = 0

    if (includeSourdough) {
      halfOfTheSourdoughInGrams = sourdoughInGrams / 2
    }

    return {
      water: Math.floor(flour * (hydration / 100) - halfOfTheSourdoughInGrams),
      sourdough: Math.floor(flour * (sourdoughPercentage / 100)),
      salt: Math.floor(flour * (saltPercentage / 100)),
      finalFlour: Math.floor(flour - halfOfTheSourdoughInGrams)
    }
  } else {
    throw new Error('Unsupported Action')
  }
}

export { sourdoughReduder }
export type { SourdoughState, SourdoughActions }

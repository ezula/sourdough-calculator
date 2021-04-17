type SourdoughState = {
  water: number
  sourdough: number
  salt: number
}

type CalculateAction = {
  type: 'calc'
  flour: number
  hydration: number
  saltPercentage: number
}

type SourdoughActions = CalculateAction;

const sourdoughReduder = (_state: SourdoughState, action: SourdoughActions) => {
  if (action.type === 'calc') {
    const { flour, hydration, saltPercentage } = action;
    return {
      water: Math.floor(flour * hydration / 100),
      sourdough: Math.floor(flour * 0.1),
      salt: Math.floor(flour * (saltPercentage / 100))
    }
  } else {
    throw new Error('Unsupported Action')
  }
}

export { sourdoughReduder }
export type { SourdoughState, SourdoughActions }

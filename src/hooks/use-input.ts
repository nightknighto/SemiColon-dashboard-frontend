import { useReducer, FormEvent } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}

interface stateType {
  value: string
  isTouched: boolean
}

interface actionType {
  value?: string
  type: 'INPUT' | 'BLUR' | 'RESET'
}

const inputStateReducer = (state: stateType, action: actionType) => {
  if (action.type === 'INPUT' && action.value) {
    return { value: action.value, isTouched: state.isTouched }
  }

  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true }
  }

  if (action.type === 'RESET') {
    return initialInputState
  }

  return initialInputState
}

const useInput = (validateValue: (val: string) => boolean) => {
  const [inputState, inputStateDispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    inputStateDispatch({ type: 'INPUT', value: event.currentTarget.value })
  }

  const inputBlurHandler = () => {
    inputStateDispatch({ type: 'BLUR' })
  }

  const reset = () => {
    inputStateDispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput

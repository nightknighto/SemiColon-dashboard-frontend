import { useReducer, FormEvent } from 'react'

interface stateType {
  value: string
  isTouched: boolean
  returnedWrong?: boolean
}

interface actionType {
  value?: string
  type: 'INPUT' | 'BLUR' | 'RESET' | 'WRONG'
}

const initialInputState: stateType = {
  value: '',
  isTouched: false,
  returnedWrong: false,
}

const inputStateReducer = (state: stateType, action: actionType) => {
  if (action.type === 'INPUT' && action.value) {
    return {
      value: action.value,
      isTouched: state.isTouched,
      returnedWrong: false,
    }
  }

  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true }
  }

  if (action.type === 'WRONG') {
    return { value: state.value, isTouched: true, returnedWrong: true }
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
  const hasError =
    inputState.returnedWrong || (!valueIsValid && inputState.isTouched)

  const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    inputStateDispatch({ type: 'INPUT', value: event.currentTarget.value })
  }

  const inputBlurHandler = () => {
    inputStateDispatch({ type: 'BLUR' })
  }

  const reset = () => {
    inputStateDispatch({ type: 'RESET' })
  }

  const returnWrong = () => {
    inputStateDispatch({ type: 'WRONG' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    returnWrong,
  }
}

export default useInput

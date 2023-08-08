import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../contexts/CycleContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions"></datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

export default NewCycleForm

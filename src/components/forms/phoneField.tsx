import React, { KeyboardEvent, useState } from 'react'
import { PhoneFieldProps } from '@/components/forms/types'
import { handleKeyDown, handleNumberInput } from '@/components/forms/functions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export const PhoneField = ({ register, errors }: PhoneFieldProps) => {
  const [error, setError] = useState<string>('')

  return (
    <Label className="mt-8 grid w-full items-center gap-4 text-base font-bold sm:text-xl">
      Numer telefonu *
      <div className="relative w-full font-normal">
        <Input
          id="tel"
          placeholder="Podaj numer telefonu"
          type="text"
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, setError)
          }
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleNumberInput(e)
          }
          inputMode="numeric"
          {...register('tel', {
            minLength: {
              value: 6,
              message: 'Pole musi zawierać co najmniej 6 cyfr',
            },
            maxLength: {
              value: 15,
              message: 'Pole może zawierać maksymalnie 15 cyfr',
            },
            required: 'Numer telefonu jest wymagany',
          })}
        />
        {!error && errors.tel && (
          <p className="absolute -bottom-6 text-xs text-orange-500">
            {`${errors.tel?.message}`}
          </p>
        )}
        {error && (
          <p className="absolute -bottom-6 text-xs text-orange-500">{error}</p>
        )}{' '}
      </div>
    </Label>
  )
}

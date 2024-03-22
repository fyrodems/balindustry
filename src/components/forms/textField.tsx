import React from 'react'
import { TextFieldProps } from '@/components/forms/types'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export const TextField = ({
  register,
  errors,
  requiredMessage,
  fieldName,
  placeholder,
  validateFunction,
  minLength,
  maxLength,
  label,
}: TextFieldProps) => {
  return (
    <>
      <Label className="mt-8 grid w-full items-center gap-4 text-base font-bold sm:text-lg">
        {label}
        <div className="relative w-full font-normal">
          <Input
            type="text"
            placeholder={placeholder}
            id={fieldName}
            {...register(fieldName, {
              required: requiredMessage || false,
              minLength: minLength || undefined,
              maxLength: maxLength || undefined,
              validate: validateFunction || undefined,
            })}
          />
          {errors[fieldName] && (
            <p className="absolute -bottom-6 text-xs text-orange-500">{`${errors[fieldName]?.message}`}</p>
          )}
        </div>
      </Label>
    </>
  )
}

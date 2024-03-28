import { Dispatch, SetStateAction } from 'react'
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

export interface ValidateAllFalseTypes {
  (
    variants: { label: string; id: number }[],
    watch: UseFormWatch<FieldValues>,
    setErrorInfo: React.Dispatch<React.SetStateAction<string>>
  ): boolean
}

export interface ValidateEmailTypes {
  (value: FieldValues['email'], invalidMessage: any): boolean | string
}

type ValidateFunctionProps = ValidateEmailTypes

export interface TextFieldProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  fieldName: string
  placeholder: string
  label: string
  requiredMessage?: string
  validateFunction?: ValidateFunctionProps
  minLength?: { value: number; message: string }
  maxLength?: { value: number; message: string }
}

export type DataTable = {
  label: string
  id: number
}

export interface RadioGroupFieldsProps {
  control: Control
  errors: FieldErrors<FieldValues>
  dataTable: DataTable[]
  fieldName: string
  requiredMessage: string
  watch: UseFormWatch<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

export interface TextareaFieldProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  fieldName: string
  placeholder: string
  requiredMessage: string
}

export interface CheckboxFieldProps {
  label: string
  fieldName: string
  control: Control
  validationFunction: () => void
}

export interface HandleKeyDownProps {
  (
    e: React.KeyboardEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<string>>
  ): void
}

export interface PhoneFieldProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

export interface HandleInputProps {
  (e: React.ChangeEvent<HTMLInputElement>): void
}

export interface DropZoneProps {
  file: File | null
  setFile: Dispatch<SetStateAction<File | null>>
}

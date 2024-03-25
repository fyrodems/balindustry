import { Controller } from 'react-hook-form'
import { CheckboxFieldProps } from '@/components/forms/types'
import { Checkbox } from '@/components/ui/checkbox'

export const CheckboxField = ({
  label,
  fieldName,
  control,
  validationFunction,
}: CheckboxFieldProps) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      key={fieldName}
      defaultValue={false}
      render={({ field: { onChange, value, ref } }) => (
        <div className="flex items-center justify-center gap-2">
          <Checkbox
            onCheckedChange={(e) => {
              onChange(e)
              if (validationFunction) {
                validationFunction()
              }
            }}
            ref={ref}
            checked={value}
            id={fieldName}
          >
            {fieldName}
          </Checkbox>
          <label
            htmlFor={fieldName}
            className="cursor-pointer self-center font-normal"
          >
            {label}
          </label>
        </div>
      )}
    />
  )
}

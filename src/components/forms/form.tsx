'use client'

import { Fragment, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import {
  handleAnchorScroll,
  validateAllFalse,
  validateEmail,
} from '@/components/forms/functions'
import Button from '@/components/common/Button'
import { useToast } from '@/components/ui/use-toast'
import {
  additionalInputsSection,
  radioFieldsSection,
  satinData,
} from '@/components/forms/data'
import { RadioGroupFields } from '@/components/forms/radioGroupFields'
import { TextField } from '@/components/forms/textField'
import { TextareaField } from '@/components/forms/textareaField'
import { CheckboxField } from '@/components/forms/checkboxField'
import { PhoneField } from '@/components/forms/phoneField'
import { DropZone } from '@/components/forms/dropZone'
import { sendForm } from '@/components/forms/sendForm'

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<FieldValues>()
  const { toast } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [errorInfo, setErrorInfo] = useState('')

  const pathname = usePathname()

  const submitForm = async (data: FieldValues) => {
    if (
      pathname.includes('satin') &&
      validateAllFalse(satinData, watch, setErrorInfo)
    ) {
      handleAnchorScroll()
      return
    }
    sendForm(data, file, reset, setFile, setErrorInfo, toast)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
        noValidate
        autoComplete="off"
        id="form"
        className="mx-auto mt-12 w-11/12 max-w-[700px]"
      >
        <div className="flex flex-col gap-4">
          {radioFieldsSection.map(
            ({ sectionPathname, labelText, dataTable, requiredMessage }) =>
              pathname.includes(sectionPathname) && (
                <Fragment key={sectionPathname}>
                  {labelText ? (
                    <p className="text-sm text-neutral-400">{labelText}</p>
                  ) : null}
                  <RadioGroupFields
                    control={control}
                    fieldName="type"
                    requiredMessage={requiredMessage}
                    errors={errors}
                    dataTable={dataTable}
                    watch={watch}
                    setValue={setValue}
                  />
                </Fragment>
              )
          )}
          {pathname.includes('satin') && (
            <>
              <p className="text-sm text-neutral-400">
                Wybierz rodzaj obróbki (możliwość wielokrotnego&nbsp;wyboru):
              </p>
              <div className="relative mx-auto my-2 flex flex-col items-start justify-start gap-3 sm:flex-row sm:gap-6">
                {satinData.map(({ label, id }) => (
                  <CheckboxField
                    control={control}
                    key={id}
                    validationFunction={() =>
                      validateAllFalse(satinData, watch, setErrorInfo)
                    }
                    label={label}
                    fieldName={label}
                  />
                ))}
                <p className="absolute -bottom-10 text-xs text-orange-500 sm:-bottom-6">
                  {errorInfo}
                </p>
              </div>
            </>
          )}
          <div className="gap-8 md:flex">
            <TextField
              requiredMessage="Imię i nazwisko jest wymagane"
              fieldName="name"
              label={'Imię i nazwisko *'}
              placeholder={'Podaj imię i nazwisko'}
              register={register}
              errors={errors}
            />
            <TextField
              requiredMessage="E-mail jest wymagany"
              fieldName="email"
              label={'Email *'}
              placeholder={'Podaj adres e-mail'}
              register={register}
              errors={errors}
              validateFunction={(value: FieldValues['email']) =>
                validateEmail(value, 'E-mail jest nieprawidłowy')
              }
            />
          </div>
          <div className="gap-8 md:flex">
            <PhoneField register={register} errors={errors} />

            {pathname.includes('contact') ? (
              <TextField
                requiredMessage="Temat wiadomości jest wymagany"
                fieldName="topic"
                label={'Temat wiadomości *'}
                placeholder={'Podaj temat wiadomości'}
                register={register}
                errors={errors}
              />
            ) : (
              <TextField
                requiredMessage="Podanie czasu jest wymagane"
                fieldName="time"
                label={'Oczekiwany czas realizacji *'}
                placeholder={'Podaj oczekiwany czas realizacji'}
                register={register}
                errors={errors}
                maxLength={{
                  value: 120,
                  message: 'Pole może zawierać maksymalnie 120 znaków',
                }}
              />
            )}
          </div>
          {additionalInputsSection.map(
            (section, index) =>
              pathname.includes(section.sectionPathname) && (
                <div key={index} className="gap-8 md:flex">
                  {section.fields.map((field, fieldIndex) => (
                    <TextField
                      key={fieldIndex}
                      requiredMessage={field.requiredMessage}
                      fieldName={field.fieldName}
                      label={field.label}
                      placeholder={field.placeholder}
                      register={register}
                      errors={errors}
                    />
                  ))}
                </div>
              )
          )}
          <TextareaField
            requiredMessage="Wiadomość jest wymagana"
            fieldName="message"
            placeholder={'Twoja wiadomość *'}
            register={register}
            errors={errors}
          />
        </div>
        <div className="my-12 grid w-full grid-cols-[1fr] items-center gap-2 sm:mt-4 sm:grid-cols-[70%_auto] sm:gap-8">
          <DropZone file={file} setFile={setFile} />
          <Button
            className="mx-auto my-8"
            disabled={false}
            content="Wyślij"
            onClick={() => {
              watch('type') === undefined && handleAnchorScroll()
              validateAllFalse(satinData, watch, setErrorInfo)
            }}
          />
        </div>
      </form>
    </>
  )
}

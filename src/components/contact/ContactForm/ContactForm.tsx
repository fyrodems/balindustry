/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

'use client'

import { useEffect, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import Button from '@/components/common/Button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

interface FormData {
  name: string
  tel: string
  email: string
  description: string
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const { toast } = useToast()

  const watchAllInputs = watch()

  const submitForm: SubmitHandler<FormData> = async (data) => {
    setIsButtonDisabled(true)

    try {
      await axios.post(
        'https://api.postmarkapp.com/email',
        {
          From: 'info@balindustry.com', // info@balindustry.com
          To: 'info@balindustry.com',
          Cc: `${data.email}`,
          Bcc: 'info@balindustry.com',
          Subject: 'Wiadomość z formularza kontaktowego BAL Engineering',
          Tag: 'kontakt',
          HtmlBody: `<h3>Wiadomość z formularza kontaktowego</h3>
        <p>Od: ${data.email}</p>
        <p>Imię: ${data.name} </p>
        <p>Email: ${data.email} </p>
        <p>Tel: ${data.tel} </p>
        <p>Opis: ${data.description} </p>
        `,
          ReplyTo: 'info@balindustry.com',
          TrackOpens: false,
          TrackLinks: 'None',
        },
        {
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            'X-Postmark-Server-Token': 'a38f4fd9-c260-482a-9ecf-c9e9a3b638b5',
          },
        }
      )

      toast({
        title: 'Dziękujemy za przesłanie zgłoszenia.',
      })
    } catch (error) {
      toast({
        title: 'Ups, coś poszło nie tak! Spróbuj ponownie później',
      })

      console.log(error)
    }

    reset()
    setIsButtonDisabled(false)
  }

  return (
    <div className="contactForm mb-[80px] p-[20px]">
      <div className="contactForm__wrapper">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="form"
          encType="multipart/form-data"
          noValidate
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Imię i nazwisko *</Label>
            <Input
              type="text"
              id="name"
              placeholder="Jan Nowak"
              {...register('name', { required: true, maxLength: 120 })}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="tel">Telefon *</Label>
            <Input
              type="number"
              id="tel"
              placeholder="789567268"
              {...register('tel', {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email" // Change type to email
              id="email"
              placeholder="example@mail.com"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="description">Twoja wiadomość *</Label>
            <Input
              type="textarea" // Change type to textarea
              id="description"
              placeholder="Wpisz wiadomość..."
              {...register('description', { required: true })}
            />
          </div>

          <Button
            className="form__submitButton"
            disabled={isButtonDisabled}
            content="Wyślij wiadomość"
            onClick={() => {
              if (
                errors.name ??
                errors.email ??
                errors.tel ??
                errors.description
              ) {
                toast({
                  title: 'Wypełnij poprawnie wszystkie pola formularza',
                })
              }
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default ContactForm

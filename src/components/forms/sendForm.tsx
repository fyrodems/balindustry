import { Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import { FieldValues } from 'react-hook-form'
import { satinData } from '@/components/forms/data'

export const sendForm = async (
  data: FieldValues,
  file: File | null,
  reset: () => void,
  setFile: (file: File | null) => void,
  setErrorInfo: Dispatch<SetStateAction<string>>,
  toast: ({ title }: { title: string }) => void,
  recipientEmail: string
) => {
  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  async function readFileContent(file: File) {
    const fullFileData = await toBase64(file)

    if (typeof fullFileData !== 'string') {
      throw new Error('Invalid file data')
    }

    const searchTerm = 'base64,'
    const indexOfContent = fullFileData.indexOf(searchTerm)

    const fileContent = fullFileData.slice(indexOfContent + searchTerm.length)

    return fileContent
  }

  try {
    let attachment = {}
    if (file) {
      const fileContent = await readFileContent(file)
      attachment = {
        Name: file.name,
        Content: fileContent,
        ContentType: file.type,
      }
    }

    const renderSelectedLabels = () => {
      const selectedLabels = satinData
        .filter(({ fieldName }) => data[fieldName])
        .map(({ label }) => label)
      return selectedLabels.join(', ')
    }

    await axios.post(
      'https://api.postmarkapp.com/email',
      {
        From: 'info@balindustry.com',
        To: `${recipientEmail}`,
        Cc: `${data.email}`,
        Bcc: 'info@balindustry.com',
        Subject:
          data.type || renderSelectedLabels() !== ''
            ? `BAL Industry - zamówienie na ${renderSelectedLabels() !== '' ? renderSelectedLabels() : data.type}`
            : 'Wiadomość z formularza kontaktowego BAL Industry ',
        Tag: 'zamówienie',
        HtmlBody: `<h3>Wiadomość z formularza kontaktowego</h3>
      <p>Od: ${data.email}</p>
      <p>Imię: ${data.name} </p>
      <p>Email: ${data.email} </p>
      <p>Tel: ${data.tel} </p>
      ${data.topic && <p>Temat: {data.topic} </p>}
      ${data.paintshops && <p>Wybrane technologie malowania: ${data.paintshops} </p>}
      <p>Czas_realizacji: ${data.realisation} </p>
      <p>Opis: ${data.description} </p>
      ${renderSelectedLabels() !== '' && <p>Wybrane opcje: {renderSelectedLabels()} </p>}
      ${data.roboticStations && <p>Wybrane rodzaje spawania: {data.roboticStations} </p>}
      ${data.paintshops && <p>Wybrane technologie malowania: ${data.paintshops} </p>}
      ${data.maxDimensions && <p>Maksymalne gabaryty detalu: ${data.maxDimensions} </p>}
      ${data.weight && <p>Masa detali: ${data.weight} </p>}
      ${data.temperature && <p>Wymagana temperatura pracy ciągłej: ${data.temperature} </p>}
      ${data.windowDimensions && <p>Oczekiwane wymiary okna pieca: ${data.windowDimensions} </p>}
      ${data.quantity && <p>Oczekiwana liczba szuflad: ${data.quantity} </p>}
      ${data.sheetDimensions && <p>Maksymalne wymiary arkuszy: ${data.sheetDimensions} </p>}
      `,
        ReplyTo: `${data.email}`,
        TrackOpens: false,
        TrackLinks: 'None',
        Attachments: [attachment],
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
  }
  reset()
  setFile(null)
  setErrorInfo('')
}

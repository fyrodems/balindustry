import { useRef } from 'react'
import { DropZoneProps } from '@/components/forms/types'
import './styles.css'

export const DropZone = ({ file, setFile }: DropZoneProps) => {
  const labelRef = useRef<HTMLDivElement>(null)

  const onDragOver = () =>
    labelRef.current && labelRef.current.classList.add('dragover')
  const onDragLeave = () =>
    labelRef.current && labelRef.current.classList.remove('dragover')
  const onDrop = () =>
    labelRef.current && labelRef.current.classList.remove('dragover')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null
    setFile(selectedFile)
  }

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      ref={labelRef}
      className="relative flex w-full cursor-pointer items-center justify-center rounded-md border-[2px]  border-dashed  border-input bg-background p-5
text-sm  ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {!!file ? null : (
        <label
          className="relative text-base text-muted-foreground "
          htmlFor="dropInput"
        >
          Dodaj plik
        </label>
      )}
      <input
        id="dropInput"
        name="Plik"
        type="file"
        className=" absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
        title={!!file ? `Załadowano plik ${file?.name}` : 'Nie wybrano pliku'}
        onChange={handleInputChange}
      />
      <p className="m-0 ml-2 text-xs leading-[31px] text-black">{file?.name}</p>
    </div>
  )
}

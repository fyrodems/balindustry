import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import DropFileInput from '../../atoms/DropFileInput/DropFileInput';
import axios from 'axios';
import Button from '../../atoms/Button/Button';
import InputField from '../../atoms/InputField/InputField';
import error_icon from '../../../assets/icons/error_icon.svg';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import MetaTags from '../../atoms/MetaTags/MetaTags';

function ContactForm({ sectionData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const {
    namePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    descriptionPlaceholder,
    filePlaceholder,
    submitButton,
    formTitle,
    messageSentText,
    messageNotSentMessage,
  } = sectionData;

  const watchAllInputs = watch();

  const submitForm = async (data) => {
    setIsButtonDisabled(true);

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });

    async function readFileContent() {
      const fullFileData = await toBase64(file);

      const searchTerm = 'base64,';
      const indexOfContent = fullFileData.indexOf(searchTerm);

      const fileContent = fullFileData.slice(indexOfContent + 7);

      return fileContent;
    }

    const newFile = file;
    let fileContent;
    let attachment;
    try {
      if (newFile !== '' && newFile !== undefined) {
        fileContent = await readFileContent();

        attachment = {
          Name: file.name,
          Content: fileContent,
          ContentType: file.type,
        };
      } else {
        fileContent = '';
        attachment = {};
      }

      await axios.post(
        'https://api.postmarkapp.com/email',
        {
          From: 'info@balindustry.com',
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
          Attachments: [attachment],
        },
        {
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            'X-Postmark-Server-Token': 'a38f4fd9-c260-482a-9ecf-c9e9a3b638b5',
          },
        }
      );

      setMessage(messageSentText);
    } catch (e) {
      console.log(e);
      setMessage(messageNotSentMessage);
    }
    reset();
    setIsButtonDisabled(false);
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setFile('');
  };

  return (
    <div className="contactForm">
      <div className="contactForm__wrapper">
        <MetaTags
          title="Skontaktuj się z BAL Industry - Twoim partnerem w przemyśle"
          description="Masz pytania lub potrzebujesz wsparcia? Skorzystaj z naszego formularza kontaktowego. Jesteśmy ekspertami w dziedzinie automatyki i przemysłu."
        />

        <SectionTitle title={formTitle} />
        <form onSubmit={handleSubmit(submitForm)} className="form" encType="multipart/form-data" noValidate>
          <div className="form__shortInputsWrapper">
            <div className="form__shortInputsContainer">
              <InputField
                type="text"
                name="Imię"
                placeholder={namePlaceholder}
                id="name"
                classForInput={`${watchAllInputs.name?.length > 0 ? 'contactForm__input-filled' : ''} ${
                  errors.name ? 'contactForm__input-error' : ''
                }`}
                reactHookData={{ ...register('name', { required: true, maxLength: 120 }) }}
              />
              {errors.name ? <img className="form__errorIcon" src={error_icon} alt="Error" /> : null}
            </div>
          </div>
          <div className="form__shortInputsWrapper">
            <div className="form__shortInputsContainer">
              <InputField
                type="number"
                name="Tel"
                placeholder={phonePlaceholder}
                id="phone"
                classForInput={`${watchAllInputs.tel?.length > 0 ? 'contactForm__input-filled' : ''} ${
                  errors.tel ? 'contactForm__input-error' : ''
                }`}
                reactHookData={{ ...register('tel', { required: true, minLength: 6, maxLength: 12 }) }}
              />
              {errors.tel ? <img className="form__errorIcon" src={error_icon} alt="Error" /> : null}
            </div>
            <div className="form__shortInputsContainer">
              <InputField
                type="email"
                name="Email"
                placeholder={emailPlaceholder}
                id="mail"
                classForInput={`${watchAllInputs.email?.length > 0 ? 'contactForm__input-filled' : ''} ${
                  errors.email ? 'contactForm__input-error' : ''
                }`}
                reactHookData={{ ...register('email', { required: true, pattern: /^\S+@\S+$/i }) }}
              />
              {errors.email ? <img className="form__errorIcon" src={error_icon} alt="Error" /> : null}
            </div>
          </div>
          <div className="form__description">
            <InputField
              type="textarea"
              name="description"
              placeholder={descriptionPlaceholder}
              id="textarea"
              classForInput={`${watchAllInputs.description?.length > 0 ? 'contactForm__input-filled' : ''} ${
                errors.description ? 'contactForm__input-error' : ''
              }`}
              reactHookData={{ ...register('description', { required: true }) }}
            />
            {errors.description ? <img className="form__errorIcon" src={error_icon} alt="Error" /> : null}
          </div>
          <div className="form__dropAndSendContainer">
            <DropFileInput file={file} setFile={setFile} filePlaceholder={filePlaceholder} />
            <span></span>
            <Button
              name="send-form"
              type="submit"
              isDefault={false}
              content={submitButton.toUpperCase()}
              textColor={'var(--buttons-hover-text)'}
              background={'var(--BAL-mainColor)'}
              className="form__submitButton"
              disabled={isButtonDisabled}
            />
          </div>
          {message !== '' ? (
            <div className="form__message">
              <span>{message}</span>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

import { ContactField } from '@/components/contact/ContactField'

const Intro = () => (
  <div>
    <div>
      <h3 className="text-balance text-2xl font-bold text-gray-950 sm:text-3xl">
        Skontaktuj się z nami
      </h3>
      <span className="my-4 block max-w-[335px] text-balance text-sm sm:text-base">
        Prześlij nam e-mail lub rozpocznij rozmowę, wypełniając poniższy
        formularz.
      </span>
    </div>
    <div className="flex flex-col justify-center">
      <h3 className="mb-4 mt-8 text-balance text-xl font-bold text-gray-950 sm:text-2xl">
        Skontaktuj się z&nbsp;nami bezpośrednio!
      </h3>
      <ContactField
        title={
          <p>
            Skontaktuj się z&nbsp;Robertem Mrozikiem w&nbsp;przypadku
            zapytań&nbsp;dotyczących
            <span className="font-semibold">
              {' '}
              działu robotyzacji lub&nbsp;spawalnictwa.
            </span>
          </p>
        }
        emailAddress="r.mrozik@balindustry.com"
        phoneNumber="+48510790214"
      />
      <ContactField
        title={
          <p>
            Skontaktuj się z&nbsp;Jakubem Sobiszem w&nbsp;przypadku
            zapytań&nbsp;dotyczących
            <span className="font-semibold">
              {' '}
              montażu lakierni,magazynu pionowego blach, obróbki powierzchni,
              pieców&nbsp;komorowych.
            </span>
          </p>
        }
        emailAddress="j.sobisz@balindustry.com"
        phoneNumber="+48508790879"
      />
    </div>
  </div>
)

export default Intro

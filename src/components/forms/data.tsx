export const mainFormData = [
  { label: 'Gięcie', id: 0 },
  { label: 'Spawanie', id: 1 },
  { label: 'Zgrzewanie', id: 2 },
  { label: 'Malowanie', id: 3 },
  { label: 'Obróbka CNC', id: 4 },
  { label: 'Walcowanie', id: 5 },
  { label: 'Obróbka i\u00A0malowanie elementów z\u00A0płyt\u00A0MDF', id: 6 },
  { label: 'Spawanie wielkogabarytowe', id: 7 },
]

export const satinData = [
  { label: 'Satynowanie', fieldName: 'satinizing', id: 0 },
  { label: 'Zatępianie krawędzi', fieldName: 'blunting', id: 1 },
  { label: 'Szlifowanie', fieldName: 'grinding', id: 2 },
]

export const roboticStationsData = [
  { label: 'TIG', id: 0 },
  { label: 'MIG', id: 1 },
  { label: 'Laser', id: 2 },
  { label: 'Inne', id: 3 },
]
export const paintshopsData = [
  { label: 'Mokre', id: 0 },
  { label: 'Proszek', id: 1 },
]

export const radioFieldsSection = [
  {
    sectionPathname: 'forms/form',
    labelText: '',
    dataTable: mainFormData,
    requiredMessage: 'Wybierz sposób obróbki',
  },
  {
    sectionPathname: 'robotic-stations',
    labelText: 'Wybierz rodzaj spawania:',
    dataTable: roboticStationsData,
    requiredMessage: 'Wybierz rodzaj spawania',
  },
  {
    sectionPathname: 'paintshops',
    labelText: 'Wybierz technologię malowania:',
    dataTable: paintshopsData,
    requiredMessage: 'Wybierz technologię malowania',
  },
]

export const additionalInputsSection = [
  {
    sectionPathname: 'robotic-stations',
    fields: [
      {
        requiredMessage: 'Maksymalne gabaryty są wymagane',
        fieldName: 'maxDimensions',
        label: 'Maksymalne gabaryty detalu *',
        placeholder: 'Podaj maksymalne gabaryty detalu',
      },
      {
        requiredMessage: 'Masa detali jest wymagana',
        fieldName: 'weight',
        label: 'Masa detali *',
        placeholder: 'Podaj masę detali',
      },
    ],
  },
  {
    sectionPathname: 'furnaces',
    fields: [
      {
        requiredMessage: 'Temperatura pracy jest wymagana',
        fieldName: 'temperature',
        label: 'Wymagana temperatura pracy ciągłej\u00A0*',
        placeholder: 'Podaj wymaganą temperaturę',
      },
      {
        requiredMessage: 'Oczekiwane wymiary są wymagane',
        fieldName: 'windowDimensions',
        label: 'Oczekiwane wymiary okna pieca *',
        placeholder: 'Podaj oczekiwane wymiary okna',
      },
    ],
  },
  {
    sectionPathname: 'paintshops',
    fields: [
      {
        requiredMessage: 'Maksymalne gabaryty są wymagane',
        fieldName: 'maxDimensions',
        label: 'Maksymalne gabaryty detalu *',
        placeholder: 'Podaj maksymalne gabaryty detalu',
      },
      {
        requiredMessage: 'Masa detali jest wymagana',
        fieldName: 'weight',
        label: 'Masa detali *',
        placeholder: 'Podaj masę detali',
      },
    ],
  },
  {
    sectionPathname: 'warehouses',
    fields: [
      {
        requiredMessage: 'Oczekiwana liczba szuflad jest wymagana',
        fieldName: 'quantity',
        label: 'Oczekiwany liczba szuflad *',
        placeholder: 'Podaj oczekiwaną liczbę szuflad',
      },
      {
        requiredMessage: 'Maksymalne wymiary arkuszy są wymagane',
        fieldName: 'sheetDimensions',
        label: 'Maksymalne wymiary arkuszy *',
        placeholder: 'Podaj maksymalne wymiary arkuszy',
      },
    ],
  },
]

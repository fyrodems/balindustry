export const units = {
  /**
   * Przypisanie odpowiednich jednostek na podstawie parametru przekazanego z header pliku
   * @param {*} insunits - przekazany parametr z header pliku
   * @returns
   */
  getUnitFromHeader(insunits: number) {
    let unitsName = ''
    const arrayUnitSize = [
      { id: 0, name: 'brak jednostek' },
      { id: 1, name: 'cal' },
      { id: 2, name: 'ft' },
      { id: 3, name: 'mile' },
      { id: 4, name: 'mm' },
      { id: 5, name: 'cm' },
      { id: 6, name: 'm' },
      { id: 7, name: 'km' },
      { id: 8, name: 'mikro cale' },
      { id: 9, name: 'mile' },
      { id: 10, name: 'jardy' },
      { id: 11, name: 'angstron' },
      { id: 12, name: 'nanometry' },
      { id: 13, name: 'mikrony' },
      { id: 14, name: 'decymetry' },
      { id: 15, name: 'dekametry' },
      { id: 16, name: 'hektometry' },
      { id: 17, name: 'gigametry' },
      { id: 18, name: 'jednostki astronomiczne' },
      { id: 19, name: 'lata świetlne' },
      { id: 20, name: 'parseki' },
    ]

    for (const unit of arrayUnitSize) {
      if (unit.id === insunits) {
        unitsName = unit.name
      }
    }

    return unitsName
  },
}

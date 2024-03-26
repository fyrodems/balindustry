import { type IEntity } from 'dxf-parser'
import { type ArrayAllLength } from './interfaces'

export const circle = {
  /**
   * Wyliczanie długości
   * @param {*} entity - dane z typem circle
   * @param {*} arrayAllLength -tablica z długościami potrzebne do wyświetlenia
   * @returns
   */
  getLength(entity: IEntity, arrayAllLength: ArrayAllLength[]) {
    const totalLength = 2 * Math.PI * entity.radius
    arrayAllLength.push({ type: entity.type, length: totalLength })
    return totalLength
  },
}

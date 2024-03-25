import { type IEntity } from 'dxf-parser'
import { type ArrayAllLength, type Polyline, type Arc } from './interfaces'

export const arc = {
  /**
   * Wyliczanie długości
   * @param {*} entity - dane z typem arc
   * @param {*} arrayAllLength -tablica z długościami potrzebne do wyświetlenia
   * @returns
   */
  getLength(entity: IEntity, arrayAllLength: ArrayAllLength[]) {
    const radius = entity.radius
    const startAngle = entity.startAngle
    const endAngle = entity.endAngle
    const totalLength = radius * Math.abs(endAngle - startAngle)
    arrayAllLength.push({ type: entity.type, length: totalLength })
    return totalLength
  },

  /**
   * Zmiana arc na polyline
   * @param {*} arc - entity przekazane z typem arc
   * @param {*} polyline - tablica verticals
   */
  getPolyline(arc: Arc, polyline: Polyline[]) {
    const startAngle = arc.startAngle
    const endAngle = arc.endAngle
    const center = arc.center
    const radius = arc.radius
    const angle = endAngle - startAngle
    const bulge = Math.tan(angle / 4)
    const x = center.x + radius * Math.cos(angle)
    const y = center.y + radius * Math.sin(angle)
    polyline.push({ x, y, bulge, handle: arc.handle })
  },
}

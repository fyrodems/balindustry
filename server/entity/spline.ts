import { type IEntity } from 'dxf-parser'
import { type ArrayAllLength } from './interfaces'

export const spline = {
  /**
   * Wyliczanie długości
   * @param {*} entity
   * @param {*} arrayAllLength
   * @returns
   */
  getLength(entity: IEntity, arrayAllLength: ArrayAllLength[]) {
    let totalLength = 0
    for (let i = 0; i < entity.controlPoints.length - 1; i++) {
      const dx = entity.controlPoints[i].x - entity.controlPoints[i + 1].x
      const dy = entity.controlPoints[i].y - entity.controlPoints[i + 1].y
      totalLength += Math.hypot(dx, dy)
    }

    arrayAllLength.push({ type: entity.type, length: totalLength })
    return totalLength
  },
}

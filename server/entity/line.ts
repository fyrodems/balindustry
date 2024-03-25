import { type IEntity } from 'dxf-parser'
import { type ArrayAllLength, type Entity, type Vertice } from './interfaces'

export const line = {
  /**
   * Wyliczanie długości
   * @param {*} entity
   * @param {*} arrayAllLength
   * @returns
   */
  getLength(entity: IEntity, arrayAllLength: ArrayAllLength[]) {
    const dx = entity.vertices[1].x - entity.vertices[0].x
    const dy = entity.vertices[1].y - entity.vertices[0].y
    const totalLength = Math.hypot(dx, dy)
    arrayAllLength.push({ type: entity.type, length: totalLength })
    return totalLength
  },
  /**
   * Zamiana line na polyline
   * @param {*} entity
   * @param {*} polyline
   * @returns
   */
  getPolyline(entity: Entity, polyline: Vertice[]) {
    for (const vertice of entity.vertices) {
      const line = vertice
      line.handle = entity.handle
      polyline.push(line)
    }

    return polyline
  },
}

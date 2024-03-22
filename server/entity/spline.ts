import { type ArrayAllLength, type Entity } from './interfaces'

// interface ArrayAllLength {
//   type: string
//   length: number
// }

// interface Vertice {
//   type: string
//   handle: string
//   ownerHandle: string
//   layer: string
//   bulge: number
//   x: number
//   y: number
//   z: number
// }

// interface Entity {
//   type: string
//   vertices: Vertice[]
//   handle: string
//   ownerHandle: string
//   layer: string
//   shape: boolean
//   includesCurveFitVertices: boolean
//   includesSplineFitVertices: boolean
//   is3dPolyline: boolean
//   is3dPolygonMesh: boolean
//   is3dPolygonMeshClosed: boolean
//   isPolyfaceMesh: boolean
//   hasContinuousLinetypePattern: boolean
//   radius: number
//   center: {
//     x: number
//     y: number
//     z: number
//   }
//   startAngle: number
//   endAngle: number
//   controlPoints: Array<{
//     x: number
//     y: number
//   }>
// }

export const spline = {
  /**
   * Wyliczanie długości
   * @param {*} entity
   * @param {*} arrayAllLength
   * @returns
   */
  getLength(entity: Entity, arrayAllLength: ArrayAllLength[]) {
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

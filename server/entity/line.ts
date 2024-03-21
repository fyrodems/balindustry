/* eslint-disable unicorn/prefer-modern-math-apis */
interface ArrayAllLength {
  type: string
  length: number
}

interface Vertice {
  type: string
  handle: string
  ownerHandle: string
  layer: string
  bulge: number
  x: number
  y: number
  z: number
}

interface Entity {
  type: string
  vertices: Vertice[]
  handle: string
  ownerHandle: string
  layer: string
  shape: boolean
  includesCurveFitVertices: boolean
  includesSplineFitVertices: boolean
  is3dPolyline: boolean
  is3dPolygonMesh: boolean
  is3dPolygonMeshClosed: boolean
  isPolyfaceMesh: boolean
  hasContinuousLinetypePattern: boolean
  radius: number
  center: {
    x: number
    y: number
    z: number
  }
  startAngle: number
  endAngle: number
}

export const line = {
  /**
   * Wyliczanie długości
   * @param {*} entity
   * @param {*} arrayAllLength
   * @returns
   */
  getLength(entity: Entity, arrayAllLength: ArrayAllLength[]) {
    const dx = entity.vertices[1].x - entity.vertices[0].x
    const dy = entity.vertices[1].y - entity.vertices[0].y
    const totalLength = Math.sqrt(dx * dx + dy * dy)
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

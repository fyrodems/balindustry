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
}

export const circle = {
  /**
   * Wyliczanie długości
   * @param {*} entity - dane z typem circle
   * @param {*} arrayAllLength -tablica z długościami potrzebne do wyświetlenia
   * @returns
   */
  getLength(entity: Entity, arrayAllLength: ArrayAllLength[]) {
    const totalLength = 2 * Math.PI * entity.radius
    arrayAllLength.push({ type: entity.type, length: totalLength })
    return totalLength
  },
}

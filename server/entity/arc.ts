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

export const arc = {
  /**
   * Wyliczanie długości
   * @param {*} entity - dane z typem arc
   * @param {*} arrayAllLength -tablica z długościami potrzebne do wyświetlenia
   * @returns
   */
  getLength(entity: Entity, arrayAllLength: ArrayAllLength[]) {
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
  getPolyline(arc, polyline) {
    const startAngle = arc.startAngle
    const endAngle = arc.endAngle
    const center = arc.center
    const radius = arc.radius
    const angle = endAngle - startAngle
    const bulge = Math.tan(angle / 4)
    const x = center.x + radius * Math.cos(angle)
    const y = center.y + radius * Math.sin(angle)
    polyline.push({ x, y, bulge: bulge, handle: arc.handle })
  },
}

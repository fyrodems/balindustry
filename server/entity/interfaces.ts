// nie miałem wszystkich danych, więc możliwe, że gdzieś typ się nie zgadza
export interface ArrayAllLength {
  type: string
  length: number
  elements?: number[]
}

export interface Vertice {
  type: string
  handle: string
  ownerHandle: string
  layer: string
  bulge: number
  x: number
  y: number
  z: number
}

export interface Segment {
  vertices: {
    startPoint: {
      x: number
      y: number
    }
    endPoint: {
      x: number
      y: number
    }
  }
  length: number
  bulge?: number
}

export interface Polyline {
  x: number
  y: number
  bulge: number
  handle: () => void /* brak danych, co to jest  */
}

export interface Arc {
  radius: number
  center: {
    x: number
    y: number
    z: number
  }
  startAngle: number
  endAngle: number
  handle: () => void /* brak danych, co to jest  */
}

export interface Entity {
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
  controlPoints: Array<{
    x: number
    y: number
  }>
}

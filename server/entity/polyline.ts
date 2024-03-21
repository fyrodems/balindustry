/* eslint-disable unicorn/prefer-modern-math-apis */
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
}

interface ArrayAllLength {
  type: string
  length: number
  elements: number[]
}

interface Segment {
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

export const polyline = {
  // Wyliczanie długości
  getLength(entity: Entity, arrayAllLength: ArrayAllLength[]) {
    console.log('sisisi')
    console.log(arrayAllLength)
    const polyLineArr = []
    let totalLength = 0
    const vertices = entity.vertices
    const sorted = vertices.sort((a, b) => a.handle.localeCompare(b.handle))
    const segments = this.createSegments(sorted)
    for (const seg of segments) {
      if (seg.bulge) {
        const arc = this.calculateArcLength(seg.bulge, seg.length)
        totalLength += this.round(arc)
        polyLineArr.push(this.round(arc))
      } else {
        totalLength += seg.length
        polyLineArr.push(seg.length)
      }
    }

    arrayAllLength.push({
      type: entity.type,
      length: totalLength,
      elements: polyLineArr,
    })
    return totalLength
  },
  /**
   * Zaokrąglanie liczby
   * @param {*} value
   * @returns
   */
  round(value: number) {
    return Math.round(value * 10_000) / 10_000
  },
  /**
   * Zamiana kąta
   * @param {*} angle
   * @returns
   */
  toDegrees(angle: number) {
    return angle * (180 / Math.PI)
  },
  /**
   * Zamiana kąta na radian
   * @param {*} angle
   * @returns
   */
  toRadians(angle: number) {
    return angle * (Math.PI / 180)
  },

  calculateArcLength(bulge: number, length: number) {
    const halfLength = length / 2
    const sagitta = bulge * halfLength
    const counterRec = Math.sqrt(halfLength ** 2 + sagitta ** 2)
    const alpha = this.toDegrees(Math.asin(sagitta / counterRec))
    const theta = 4 * alpha
    const beta = Math.cos(this.toRadians(180 - (90 + theta / 2)))
    const radius = this.round(halfLength / beta)
    const arcLength = (theta * radius * Math.PI) / 180
    return arcLength
  },
  createSegments(vertices: Vertice[]) {
    const segments: Segment[] = []
    for (let i = 0; i <= vertices.length - 1; i++) {
      if (i === vertices.length - 1) {
        const dx = vertices[i].x - vertices[0].x
        const dy = vertices[i].y - vertices[0].y
        segments.push({
          vertices: {
            startPoint: {
              x: this.round(vertices[i].x),
              y: this.round(vertices[i].y),
            },
            endPoint: {
              x: this.round(vertices[0].x),
              y: this.round(vertices[0].y),
            },
          },
          length: this.round(Math.sqrt(dx * dx + dy * dy)),
        })
      } else {
        const dx = vertices[i].x - vertices[i + 1].x
        const dy = vertices[i].y - vertices[i + 1].y
        segments.push({
          vertices: {
            startPoint: {
              x: this.round(vertices[i].x),
              y: this.round(vertices[i].y),
            },
            endPoint: {
              x: this.round(vertices[i + 1].x),
              y: this.round(vertices[i + 1].y),
            },
          },
          length: this.round(Math.sqrt(dx * dx + dy * dy)),
        })
      }
    }

    for (let i = 0; i <= vertices.length - 1; i++) {
      if (vertices[i].bulge) {
        if (vertices[i].bulge > 0) segments[i].bulge = vertices[i].bulge
        else if (i === 0) {
          segments[vertices.length - 1].bulge = vertices[i].bulge
        } else {
          segments[i].bulge = vertices[i].bulge
        }
      }
    }

    return segments
  },
  /**
   * Wyliczanie pola dla polyline
   * @param {*} polyline- dane z punktami dla polyline
   * @param {*} isPolyline- infomacja czy są polyline
   * @returns wyliczone pole
   */
  calculatePolylineArea(
    polyline: Array<[number, number]>,
    isPolyline: boolean
  ) {
    let area = 0
    let returnValue
    if (isPolyline) {
      for (let i = 0; i < polyline.length; i++) {
        const j = (i + 1) % polyline.length

        // Wyznaczanie parametrów X
        const xParam = polyline[i][0] * polyline[j][1]

        // Wyznaczanie parametrów Y
        const yParam = polyline[j][0] * polyline[i][1]

        const wartosc = xParam - yParam
        area += Math.abs(wartosc)
      }

      returnValue = Math.abs(area / 2)
    } else {
      const origin = polyline[0]
      for (let i = 1; i < polyline.length - 1; i++) {
        const [x1, y1] = polyline[i]
        const [x2, y2] = polyline[i + 1]
        const base = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        let height = 0
        if (base !== 0) {
          height =
            Math.abs(
              x1 * y2 -
                x2 * y1 +
                x2 * origin[1] -
                x1 * origin[1] +
                y1 * origin[0] -
                y2 * origin[0]
            ) / base
        }

        area += Math.abs(0.5 * base * height)
      }

      returnValue = Math.abs(area)
    }

    return returnValue
  },
  /**
   * Weryfikacja czy punkty dwóch polyline należą do siebie
   * Sprawdza czy wszystkie punkty z jednego polyline należa do polyline drugiego
   * @param {*} polyline - punkty pierwszego polyline jako tablica
   * @param {*} polygon - punkty drugiego polyline jako tablica
   * @returns true/false
   */

  polylineInPolygon(
    polyline: Array<[number, number]>,
    polygon: Array<[number, number]>
  ) {
    let inInside = false
    for (let i = 0; i < polyline.length; i++) {
      const point = polyline[i]
      if (this.pointInPolygon(point, polygon)) {
        inInside = true
        i = polyline.length
      }
    }

    return inInside
  },
  /**
   * Weryfikacja czy zadany punkt należy do polyline
   * @param {*} point - badany punkt
   * @param {*} polygon - polyline w którym weryfikujemy czy dany punkt należy
   * @returns true/false
   */
  pointInPolygon(point: [number, number], polygon: Array<[number, number]>) {
    let isInside = false
    const [x, y] = point
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i]
      const [xj, yj] = polygon[j]
      const intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) {
        isInside = !isInside
      }
    }

    return isInside
  },
}

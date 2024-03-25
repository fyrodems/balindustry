/* eslint-disable no-lonely-if */
/* eslint-disable unicorn/switch-case-braces */
import fs from 'node:fs'
import { Helper } from 'dxf'
import { DxfParser, type IDxf } from 'dxf-parser'
import { parseString, toSVG } from 'dxf2svg'
import { arc } from './entity/arc'
import { line } from './entity/line'
import { polyline } from './entity/polyline'
import { circle } from './entity/circle'
import { spline } from './entity/spline'
import { type File, type FileData } from './interfaces'
import { units } from './units'
import { type ArrayAllLength, type Entity } from './entity/interfaces'

// import { ellipse } from './entity/ellipse.ts'

// const dxfParser = new DxfParser()
// const dxf = dxfParser.parseSync(
//   fs.readFileSync('./src/TestModels/dxf.dxf', 'utf8')
// )
// let totalArea = 0
// Iteracja przez każdą linię i łuk i dodanie ich długości do sumy.
// dxf.entities.forEach((entity) => {
//   if (entity.type === 'POLYLINE') {
//     const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y])
//     totalArea += getPolygonArea(vertices)
//   } else if (entity.type === 'LWPOLYLINE') {
//     const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y])
//     totalArea += getPolygonArea(vertices)
//   } else if (entity.type === 'CIRCLE') {
//     const radius = entity.radius
//     totalArea += Math.PI * radius * radius
//   } else if (entity.type === 'ARC') {
//     const radius = entity.radius
//     const angle = entity.endAngle - entity.startAngle
//     totalArea += (Math.PI * radius * radius * angle) / 360
//   } else if (entity.type === 'ELLIPSE') {
//     const a = entity.majorAxisEndPoint.x
//     const b = entity.majorAxisEndPoint.y
//     totalArea += Math.PI * a * b
//   }
// })

// Funkcja obliczająca pole powierzchni wieloboku
// function getPolygonArea(vertices) {
//   let sum = 0
//   for (let i = 0; i < vertices.length; i++) {
//     const j = (i + 1) % vertices.length
//     sum += vertices[i][0] * vertices[j][1] - vertices[i][1] * vertices[j][0]
//   }

//   return Math.abs(sum / 2)
// }

// Wyświetl wynik w konsoli
// console.log('Pole powierzchni modelu:', totalArea)

export const dxfParse = {
  /**
     * Przygotowanie na podstawie danych pliku odpowiedniego obiektu z wyznaczonymi wartościami
     * Obiekt zwracany:
     * {
        fileName: "",
        fileContent: {},
        path: "",
        units: "",
        totalLength: 111,
        arrayLength: [],
        modelJson: null,
        quantity: 1,
        material: null,
        thickness: null,
        density: null,
        isReady: false,
        totalArea: 222,
      }
     * @param {*} file - dane pliku otrzymane ze strony internetowej
     * @param {*} arrReturnData - tablica z obiektami
     * @returns
     */
  parse(file: File, arrReturnData: FileData[]) {
    const pathNewFile = 'uploads/' + file.name.replace('dxf', 'svg')
    // Parsowanie pliku
    const dxf = this.parseFile(file)
    // Obliczenie długości dla sparsowanego pliku
    const objServerData: {
      units: string
      totalLength: string
      arrayLength: Array<{ type: string; length: number; elements?: number[] }>
    } = this.getTotalLength(dxf)
    // Obliczanie pola dla sparsowanego pliku
    const totalArea = this.getArea(file.path)
    // Usunięcie pliku (działa tylko w systemach Windows)
    this.deleteFile(file)
    // Przypisanie obiektu do tablicy
    if (dxf) {
      arrReturnData.push({
        // fileName: file.originalname,
        fileName: file.name,
        fileContent: dxf,
        path: pathNewFile,
        units: objServerData.units,
        totalLength: objServerData.totalLength,
        arrayLength: objServerData.arrayLength,
        modelJson: null,
        quantity: 1,
        material: null,
        thickness: null,
        density: null,
        isReady: false,
        totalArea,
      })
    }

    return arrReturnData
  },
  /**
   * Konwersja pliku na plik dxf na svg i parsowanie do odpowiedniego obiektu
   * @param {*} file - otrzymany plik
   * @returns skonwertowany plik dxf do odpowiedniego modelu
   */
  parseFile(file: File) {
    // Konwersja pliku dxf do svg
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const parsed = parseString(fs.readFileSync(file.path, 'utf8'))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const svg = toSVG(parsed)
    // Scieżka do nowego pliku svg
    const pathNewFile = 'uploads/' + file.name.replace('dxf', 'svg')
    fs.writeFileSync(pathNewFile, `${svg.svg}  </svg>`, 'utf8')
    // Konwersja pliku do odpowiedniego modelu
    const dxfParser = new DxfParser()
    const dxf = dxfParser.parseSync(fs.readFileSync(file.path, 'utf8'))
    return dxf
  },

  /**
   * Wyznaczamy z odpowiednich danych obwód dla pliku
   * @param {*} dxf - skonwersowany plik
   */
  getTotalLength(dxf: IDxf | null) {
    let totalLength = 0
    const arrayAllLength: ArrayAllLength[] = []
    // Pobranie jednostki na podstawie parametru w headerze pliku dxf
    const unitsName = units.getUnitFromHeader(dxf.header.$INSUNITS)
    // Wyznaczanie długości dla poszczególnych elementów

    if (dxf) {
      for (const entity of dxf.entities) {
        switch (entity.type) {
          case 'LINE':
            totalLength += line.getLength(entity, arrayAllLength)
            break
          case 'ARC':
            totalLength += arc.getLength(entity, arrayAllLength)
            break
          case 'POLYLINE':
            totalLength += polyline.getLength(entity, arrayAllLength)
            break
          case 'CIRCLE':
            totalLength += circle.getLength(entity, arrayAllLength)
            break
          case 'SPLINE':
            totalLength += spline.getLength(entity, arrayAllLength)
            break
          default:
        }
      }
    }

    // Przygotowanie odpowiedniego obiektu
    const objServerData = {
      units: unitsName,
      totalLength: totalLength + ' ',
      arrayLength: arrayAllLength,
    }
    return objServerData
  },
  /**
   * Usuwanie pliku z serwera
   * @param {*} file - plik który chcemy usunąc
   */
  deleteFile(file: File) {
    fs.rmSync(file.path, {
      force: true,
    })
  },
  /**
   * Obliczanie pola
   * @param {*} file- ścieżka do pliku
   */
  getArea(pathFile: string) {
    // Zastosowanie parsera dxf
    const helper = new Helper(fs.readFileSync(pathFile, 'utf8'))
    const { entities }: { entities: Entity[] } = helper.parsed
    const entityArrayAfterLayer: Array<{
      layerName: string
      areaListArray: number[]
      lengthAll: number
    }> = []
    // Weryfikacja czy mamy  w elementach modelu polyline i LwPolyliine
    // Inny sposób obliczania pola w zależności od zawartości
    const polylineArr = entities.filter(
      (polylineArrEnt) =>
        polylineArrEnt.type === 'POLYLINE' ||
        polylineArrEnt.type === 'LWPOLYLINE'
    )
    let isPolyline = false
    if (polylineArr.length === 0) {
      isPolyline = true
    }

    // Tworzenie tablicy z podziałem na layer w celu weryfikacji czy wszystko jest w jednym
    for (let a = 0; a < helper.toPolylines().polylines.length; a++) {
      let searchLayerBln = false
      if (entityArrayAfterLayer.length > 0) {
        for (const element of entityArrayAfterLayer) {
          if (element.layerName === entities[a].layer) {
            element.lengthAll += polyline.calculatePolylineArea(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              helper.toPolylines().polylines[a].vertices,
              isPolyline
            )
            element.areaListArray.push(
              polyline.calculatePolylineArea(
                helper.toPolylines().polylines[a].vertices,
                isPolyline
              )
            )
            searchLayerBln = true
          }
        }
      }

      if (!searchLayerBln) {
        const ob: {
          layerName: string
          areaListArray: number[]
          lengthAll: number
        } = { layerName: '', areaListArray: [], lengthAll: 0 }

        ob.layerName = entities[a].layer
        const areaListArray = []
        areaListArray.push(
          polyline.calculatePolylineArea(
            helper.toPolylines().polylines[a].vertices,
            isPolyline
          )
        )
        ob.areaListArray = areaListArray
        ob.lengthAll = polyline.calculatePolylineArea(
          helper.toPolylines().polylines[a].vertices,
          isPolyline
        )
        entityArrayAfterLayer.push(ob)
      }
    }
    // Gdy mamy jeden layer

    let area = 0
    if (entityArrayAfterLayer.length === 1) {
      let inInside = false

      // Ustawienie pola jako element który ma największe pole w przypadku gdy polyline są wewnątrz
      area = Math.max(...entityArrayAfterLayer[0].areaListArray)
      for (let z = 0; z < helper.toPolylines().polylines.length - 1; z++) {
        inInside = polyline.polylineInPolygon(
          helper.toPolylines().polylines[z].vertices,
          helper.toPolylines().polylines[z + 1].vertices
        )
      }

      // W przypadku na zewnątrz jest to suma wszystkich pól
      area = entityArrayAfterLayer[0].lengthAll
      if (!inInside) {
        area = Math.max(...entityArrayAfterLayer[0].areaListArray)
      }
    } else {
      // W przypadku większej liczby layerów to sprawdzamy czy są polyline
      if (polylineArr.length === 0) {
        let max = 0
        for (const element of entityArrayAfterLayer) {
          if (element.lengthAll > max) {
            max = element.lengthAll
          }
        }

        area = max / 2
      } else {
        let max = 0
        for (const element of entityArrayAfterLayer) {
          if (element.lengthAll > max) {
            max = element.lengthAll
            // aaa = element.areaListArray <- nie rozumiem, co tu miało być
          }
        }

        area = max

        for (const entity of entityArrayAfterLayer[0].areaListArray) {
          if (entity !== max) {
            area -= entity
          }
        }
      }
    }

    return area
  },
}

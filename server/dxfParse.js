const { DxfParser } = require('dxf-parser')
const { parseString, toSVG } = require('dxf2svg')
const fs = require('fs')
const line = require('./entity/line.js')
const arc = require('./entity/arc.js')
const polyline = require('./entity/polyline.js')
const circle = require('./entity/circle.js')
const spline = require('./entity/spline.js')
const ellipse = require('./entity/ellipse.js')
const units = require('./units.js')

const Helper = require('dxf').Helper

const dxfParser = new DxfParser()
const dxf = dxfParser.parseSync(
  fs.readFileSync('./src/TestModels/dxf.dxf', 'utf-8')
)
let totalArea = 0
// Iteracja przez każdą linię i łuk i dodanie ich długości do sumy.
dxf.entities.forEach((entity) => {
  if (entity.type === 'POLYLINE') {
    const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y])
    totalArea += getPolygonArea(vertices)
  } else if (entity.type === 'LWPOLYLINE') {
    const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y])
    totalArea += getPolygonArea(vertices)
  } else if (entity.type === 'CIRCLE') {
    const radius = entity.radius
    totalArea += Math.PI * radius * radius
  } else if (entity.type === 'ARC') {
    const radius = entity.radius
    const angle = entity.endAngle - entity.startAngle
    totalArea += (Math.PI * radius * radius * angle) / 360
  } else if (entity.type === 'ELLIPSE') {
    const a = entity.majorAxisEndPoint.x
    const b = entity.majorAxisEndPoint.y
    totalArea += Math.PI * a * b
  }
})

// Funkcja obliczająca pole powierzchni wieloboku
function getPolygonArea(vertices) {
  let sum = 0
  for (let i = 0; i < vertices.length; i++) {
    const j = (i + 1) % vertices.length
    sum += vertices[i][0] * vertices[j][1] - vertices[i][1] * vertices[j][0]
  }
  return Math.abs(sum / 2)
}

// Wyświetl wynik w konsoli
console.log('Pole powierzchni modelu:', totalArea)

module.exports = {
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
  parse: function (file, arrReturnData) {
    let dxf, objServerData, totalArea
    const patnNewFile = 'uploads/' + file.filename + '.svg'
    //Parsowanie pliku
    dxf = this.parseFile(file)
    //Obliczenie długości dla sparsowanego pliku
    objServerData = this.getTotalLength(dxf)
    // Obliczanie pola dla sparsowanego pliku
    totalArea = this.getArea(file.path)
    // Usunięcie pliku (działa tylko w systemach Windows)
    this.deleteFile(file)
    //Przypisanie obiektu do tablicy
    arrReturnData.push({
      // fileName: file.originalname,
      fileName: file.name,
      fileContent: dxf,
      path: patnNewFile,
      units: objServerData.units,
      totalLength: objServerData.totalLength,
      arrayLength: objServerData.arrayLength,
      modelJson: null,
      quantity: 1,
      material: null,
      thickness: null,
      density: null,
      isReady: false,
      totalArea: totalArea,
    })
    return arrReturnData
  },
  /**
   * Konwersja pliku na plik dxf na svg i parsowanie do odpowiedniego obiektu
   * @param {*} file - otrzymany plik
   * @returns skonwertowany plik dxf do odpowiedniego modelu
   */
  parseFile: function (file) {
    // Konwersja pliku dxf do svg
    const parsed = parseString(fs.readFileSync(file.path, 'utf-8'))
    const svg = toSVG(parsed)
    // Scieżka do nowego pliku svg
    const patnNewFile = 'uploads/' + file.filename + '.svg'
    fs.writeFileSync(patnNewFile, svg.svg + '  </svg>', 'utf-8')
    // Konwersja pliku do odpowiedniego modelu
    const dxfParser = new DxfParser()
    const dxf = dxfParser.parseSync(fs.readFileSync(file.path, 'utf-8'))
    return dxf
  },

  /**
   * Wyznaczamy z odpowiednich danych obwód dla pliku
   * @param {*} dxf - skonwersowany plik
   */
  getTotalLength: function (dxf) {
    let totalLength = 0
    let arrayAllLength = []
    //Pobranie jednostki na podstawie parametru w headerze pliku dxf
    let unitsName = units.getUnitFromHeader(dxf.header.$INSUNITS)

    //Wyznaczanie długości dla poszczególnych elementów
    dxf.entities.forEach((entity) => {
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
    })

    //Przygotowanie odpowiedniego obiektu
    let objServerData = {
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
  deleteFile: function (file) {
    fs.rmSync(file.path, {
      force: true,
    })
  },
  /**
   * Obliczanie pola
   * @param {*} file- ścieżka do pliku
   */
  getArea: function (pathFile) {
    //Zastosowanie parsera dxf
    const helper = new Helper(fs.readFileSync(pathFile, 'utf-8'))
    const { entities } = helper.parsed

    let entityArrayAfterLayer = []
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
      if (entityArrayAfterLayer.length !== 0) {
        for (let b = 0; b < entityArrayAfterLayer.length; b++) {
          if (entityArrayAfterLayer[b].layerName === entities[a].layer) {
            entityArrayAfterLayer[b].lengthAll +=
              polyline.calculatePolylineArea(
                helper.toPolylines().polylines[a].vertices,
                isPolyline
              )
            entityArrayAfterLayer[b].areaListArray.push(
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
        let ob = {}
        ob.layerName = entities[a].layer
        let areaListArray = []
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
        for (let a = 0; a < entityArrayAfterLayer.length; a++) {
          if (entityArrayAfterLayer[a].lengthAll > max) {
            max = entityArrayAfterLayer[a].lengthAll
          }
        }
        area = max / 2
      } else {
        for (let a = 0; a < entityArrayAfterLayer.length; a++) {
          if (entityArrayAfterLayer[a].lengthAll > max) {
            max = entityArrayAfterLayer[a].lengthAll
            aaa = entityArrayAfterLayer[a].areaListArray
          }
        }
        area = max
        for (
          let a = 0;
          a < entityArrayAfterLayer[0].areaListArray.length;
          a++
        ) {
          if (entityArrayAfterLayer[0].areaListArray[a] !== max) {
            area = area - entityArrayAfterLayer[0].areaListArray[a]
          }
        }
      }
    }
    return area
  },
}

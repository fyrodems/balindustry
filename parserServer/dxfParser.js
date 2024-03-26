const DxfParser = require("dxf-parser");
const fs = require("fs");

const dxfParser = new DxfParser();
const dxf = dxfParser.parseSync(
  fs.readFileSync("./src/TestModels/dxf.dxf", "utf-8")
);
let totalArea = 0;
// Iteracja przez każdą linię i łuk i dodanie ich długości do sumy.
dxf.entities.forEach((entity) => {
  if (entity.type === "POLYLINE") {
    const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y]);
    totalArea += getPolygonArea(vertices);
  } else if (entity.type === "LWPOLYLINE") {
    const vertices = entity.vertices.map((vertex) => [vertex.x, vertex.y]);
    totalArea += getPolygonArea(vertices);
  } else if (entity.type === "CIRCLE") {
    const radius = entity.radius;
    totalArea += Math.PI * radius * radius;
  } else if (entity.type === "ARC") {
    const radius = entity.radius;
    const angle = entity.endAngle - entity.startAngle;
    totalArea += (Math.PI * radius * radius * angle) / 360;
  } else if (entity.type === "ELLIPSE") {
    const a = entity.majorAxisEndPoint.x;
    const b = entity.majorAxisEndPoint.y;
    totalArea += Math.PI * a * b;
  }
});

// Funkcja obliczająca pole powierzchni wieloboku
function getPolygonArea(vertices) {
  let sum = 0;
  for (let i = 0; i < vertices.length; i++) {
    const j = (i + 1) % vertices.length;
    sum += vertices[i][0] * vertices[j][1] - vertices[i][1] * vertices[j][0];
  }
  return Math.abs(sum / 2);
}

// Wyświetl wynik w konsoli
console.log("Pole powierzchni modelu:", totalArea);

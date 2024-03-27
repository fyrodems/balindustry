// /* eslint-disable new-cap */
// import fs from 'node:fs'
// import {
//   BufferGeometry,
//   BufferAttribute,
//   Float32BufferAttribute,
//   Color,
//   MeshPhongMaterial,
//   EdgesGeometry,
//   LineSegments,
//   LineBasicMaterial,
//   Mesh,
// } from 'three'
// // import NodeThreeExporter from '@injectit/threejs-nodejs-exporters'
// import { type FileData, type File } from './interfaces'
// import { type Occt } from '@/serverTypes/serverTypes'
// const occtimportjs = require('../public/occt-import-js')()

// export const stpParse = {
//   parse(file: File, arrReturnData: FileData[]) {
//     occtimportjs.then((occt: Occt) => {
//       const fileContent = fs.readFileSync(file.path)
//       const result = occt.ReadStepFile(fileContent, null)
//       let edges
//       let object
//       let line
//       let material = null
//       // process the geometries of the result
//       for (const resultMesh of result.meshes) {
//         const geometry = new BufferGeometry()
//         geometry.setAttribute(
//           'position',
//           new Float32BufferAttribute(resultMesh.attributes.position.array, 3)
//         )
//         if (resultMesh.attributes.normal) {
//           geometry.setAttribute(
//             'normal',
//             new Float32BufferAttribute(resultMesh.attributes.normal.array, 3)
//           )
//         }
//         const index = Uint32Array.from(resultMesh.index.array)
//         geometry.setIndex(new BufferAttribute(index, 1))
//         if (resultMesh.color) {
//           const color = new Color(
//             resultMesh.color[0],
//             resultMesh.color[1],
//             resultMesh.color[2]
//           )
//           material = new MeshPhongMaterial({ color })
//         } else {
//           material = new MeshPhongMaterial({ color: 0xcccccc })
//         }
//         edges = new EdgesGeometry(geometry)
//         line = new LineSegments(
//           edges,
//           new LineBasicMaterial({ color: 0xffffff })
//         )
//         const mesh = new Mesh(geometry, material)
//         object = mesh
//       }

//       const patnNewFile = 'uploads/' + file.name.replace('stp', 'gltf')
//       // const exporter = new NodeThreeExporter()

//       // const onComplete = (buffer) => {
//       //   // do what you want with your model ex. save
//       //   fs.writeFileSync(patnNewFile, buffer)
//       // }

//       // new NodeThreeExporter().generate('gltf', object, onComplete)

//       // exporter.generate('gltf', object, onComplete)
//       fs.readFile(file.path, 'utf8', function (err, data) {
//         // Display the file content
//         arrReturnData.push({
//           fileName: file.name,
//           fileContent: data,
//           path: patnNewFile,
//           units: 0,
//           totalLength: 0,
//           arrayLength: [],
//           modelJson: object,
//           quantity: null,
//           material: null,
//           thickness: null,
//           isReady: false,
//           totalArea: null,
//         })
//       })
//     })

//     return arrReturnData
//   },
// }

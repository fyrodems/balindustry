import fs from 'node:fs'
import THREE from 'three'
import NodeThreeExporter from '@injectit/threejs-nodejs-exporters'
import occt from 'occt-import-js'

const occtimportjs = occt()

occtimportjs.then((occt) => {
  const targetObject = new THREE.Object3D()
  const fileUrl = './1.stp'
  const fileContent = fs.readFileSync(fileUrl)
  const result = occt.ReadStepFile(fileContent, null)

  let object
  // process the geometries of the result
  for (const resultMesh of result.meshes) {
    const geometry = new THREE.BufferGeometry()

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(resultMesh.attributes.position.array, 3)
    )
    if (resultMesh.attributes.normal) {
      geometry.setAttribute(
        'normal',
        new THREE.Float32BufferAttribute(resultMesh.attributes.normal.array, 3)
      )
    }

    const index = Uint32Array.from(resultMesh.index.array)
    geometry.setIndex(new THREE.BufferAttribute(index, 1))

    let material = null
    if (resultMesh.color) {
      const color = new THREE.Color(
        resultMesh.color[0],
        resultMesh.color[1],
        resultMesh.color[2]
      )
      material = new THREE.MeshPhongMaterial({ color: color })
    } else {
      material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
    }

    const mesh = new THREE.Mesh(geometry, material)
    targetObject.add(mesh)
    object = mesh
  }

  const exporter = new NodeThreeExporter()
  const onComplete = (buffer) => {
    // do what you want with your model ex. save
    fs.writeFileSync('./model.gltf', buffer)
  }

  exporter.generate('gltf', object, onComplete)

  if (targetObject instanceof THREE.Object3D) {
    var bbox = new THREE.Box3().setFromObject(targetObject)

    console.log(bbox.getSize(new THREE.Vector3()))
  }
})

export const stpParse = {
  parse(file, arrReturnData) {
    occtimportjs.then((occt) => {
      const fileContent = fs.readFileSync(file.path)
      const result = occt.ReadStepFile(fileContent, null)
      let edges
      let object
      let line
      let material = null
      // process the geometries of the result
      for (const resultMesh of result.meshes) {
        let geometry = new THREE.BufferGeometry()

        geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(
            resultMesh.attributes.position.array,
            3
          )
        )
        if (resultMesh.attributes.normal) {
          geometry.setAttribute(
            'normal',
            new THREE.Float32BufferAttribute(
              resultMesh.attributes.normal.array,
              3
            )
          )
        }
        const index = Uint32Array.from(resultMesh.index.array)
        geometry.setIndex(new THREE.BufferAttribute(index, 1))

        if (resultMesh.color) {
          const color = new THREE.Color(
            resultMesh.color[0],
            resultMesh.color[1],
            resultMesh.color[2]
          )
          material = new THREE.MeshPhongMaterial({ color: color })
        } else {
          material = new THREE.MeshPhongMaterial({ color: 0xcccccc })
        }
        edges = new THREE.EdgesGeometry(geometry)
        line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0xffffff })
        )
        const mesh = new THREE.Mesh(geometry, material)
        object = mesh
      }
      const patnNewFile = 'uploads/' + file.filename + '.gltf'
      const exporter = new NodeThreeExporter()
      const onComplete = (buffer) => {
        // do what you want with your model ex. save
        fs.writeFileSync(patnNewFile, buffer)
      }
      exporter.generate('gltf', object, onComplete)
      fs.readFile(file.path, 'utf8', function (err, data) {
        // Display the file content
        arrReturnData.push({
          fileName: file.originalname,
          fileContent: data,
          path: patnNewFile,
          units: 0,
          totalLength: 0,
          arrayLength: [],
          modelJson: object,
          quantity: null,
          material: null,
          thickness: null,
          isReady: false,
          totalArea: null,
        })
      })
    })

    return arrReturnData
  },
}

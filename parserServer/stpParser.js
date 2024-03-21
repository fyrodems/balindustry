/* const THREE = require("three");
const NodeThreeExporter = require("@injectit/threejs-nodejs-exporters");
const fs = require("fs");
const occtimportjs = require("occt-import-js")();

occtimportjs.then((occt) => {
  let targetObject = new THREE.Object3D();
  let fileUrl = "./1.stp";
  let fileContent = fs.readFileSync(fileUrl);
  let result = occt.ReadStepFile(fileContent, null);

  let object;
  // process the geometries of the result
  for (let resultMesh of result.meshes) {
    let geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(resultMesh.attributes.position.array, 3)
    );
    if (resultMesh.attributes.normal) {
      geometry.setAttribute(
        "normal",
        new THREE.Float32BufferAttribute(resultMesh.attributes.normal.array, 3)
      );
    }
    const index = Uint32Array.from(resultMesh.index.array);
    geometry.setIndex(new THREE.BufferAttribute(index, 1));

    let material = null;
    if (resultMesh.color) {
      const color = new THREE.Color(
        resultMesh.color[0],
        resultMesh.color[1],
        resultMesh.color[2]
      );
      material = new THREE.MeshPhongMaterial({ color: color });
    } else {
      material = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    }

    const mesh = new THREE.Mesh(geometry, material);
    targetObject.add(mesh);
    object = mesh;
  }

  const exporter = new NodeThreeExporter();
  const onComplete = (buffer) => {
    // do what you want with your model ex. save
    fs.writeFileSync("./model.gltf", buffer);
  };

  exporter.generate("gltf", object, onComplete);

  if (targetObject instanceof THREE.Object3D) {
    var bbox = new THREE.Box3().setFromObject(targetObject);

    console.log(bbox.getSize(new THREE.Vector3()));
  }
});
 */

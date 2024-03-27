// typy napisane w celu zlikwidowania błędów na serwerze,są na 100% źle ~Michał

declare module 'dxf2svg' {
  export function parseString(arg: string): string {
    return arg.length
  }

  export function toSVG(arg: string): { svg: string } {
    return arg.length
  }
}
/* 
declare module '@injectit/threejs-nodejs-exporters' {
  export function helloWorld(arg: string): string {
    return arg.length
  }

  export default helloWorld
}

interface ReadStepFileResult {
  success: boolean
  root: {
    name: string
    meshes: any[]
    children: Array<[Object]>
  }
  meshes: Array<{
    name: string
    attributes: {
      position: { array: number[] }
      normal: { array: number[] }
    }
    index: { array: number[] }
    color: number[]
    brep_faces: any[]
  }>
}

export interface Occt {
  ReadStepFile: (arg1: Buffer, arg2: null) => ReadStepFileResult
}

declare module 'occt-import-js' {
  export async function mainFunction(): Promise<Occt> {
    return {
      ReadStepFile: (arg1, arg2) => ({
        success: true,
        root: { name: '', meshes: [], children: [[Object]] },
        meshes: [
          {
            name: 'PRO-000083039',
            attributes: {
              position: {
                array: [
                  4.428_445_798_825_62e-17, -0.120_536_679_047_035_2,
                  0.992_708_874_244_766_7,
                ],
                normal: {
                  array: [4.428_445_798_825_62e-17, -0.120_536_679_047_035_2],
                },
              },
              index: [Object],
              color: [Array],
              brep_faces: [Array],
            },
          },
        ],
      }),
    }
  }

  export default mainFunction
}
 */

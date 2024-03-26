// typy napisane w celu zlikwidowania błędów na serwerze,są na 100% źle ~Michał

declare module 'dxf2svg' {
  export function parseString(arg: string): string {
    return arg.length
  }

  export function toSVG(arg: string): { svg: string } {
    return arg.length
  }
}

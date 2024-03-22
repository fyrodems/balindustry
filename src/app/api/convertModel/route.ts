/* eslint-disable unicorn/switch-case-braces */
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { type NextRequest, NextResponse } from 'next/server'
// import { ellipse } from '../../../../server/entity/ellipse.ts'
// import stpParse from '../../../../server/stpParse'
import { dxfParse } from '../../../../server/dxfParse'

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const files = formData.getAll('files') as File[]

  let arrReturnData = []
  if (files.length > 0) {
    for await (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())

      await writeFile(path.join(process.cwd(), 'uploads/' + file.name), buffer)

      const fileWithPath = {
        size: file.size,
        type: file.type,
        name: file.name,
        lastModified: file.lastModified,
        path: path.join(process.cwd(), 'uploads/' + file.name),
      }

      switch (file.name.split('.')[1]) {
        case 'dxf':
          arrReturnData = dxfParse.parse(fileWithPath, arrReturnData)
          break
        case 'stp':
          //   arrReturnData = stpParse.parse(req.files[a], arrReturnData)
          break
        default:
          break
      }
    }

    return NextResponse.json(arrReturnData)
  }
}

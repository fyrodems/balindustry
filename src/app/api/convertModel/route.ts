/* eslint-disable unicorn/switch-case-braces */
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { type NextRequest, NextResponse } from 'next/server'
import { stpParse } from '../../../../server/stpParse'
import { dxfParse } from '../../../../server/dxfParse'
import { type FileData } from '../../../../server/interfaces'

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const files = formData.getAll('files') as File[]

  let arrReturnData: FileData[] = []
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
          console.log(arrReturnData)
          break
        case 'stp':
          arrReturnData = stpParse.parse(fileWithPath, arrReturnData)
          break
        default:
          break
      }
    }

    return NextResponse.json(arrReturnData)
  }
}

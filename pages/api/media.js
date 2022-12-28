import path from 'path'
import fs from 'fs'

const getFiles = async () => {
  return new Promise((res, rej) => {
    fs.readdir(path.resolve('./public/uploads'), (err, files) => {
      if (err) throw err
      res(files)
    })
  })
}

export default function handler(req, res) {
  // const files = await getFiles()
  // res.status(200).json({ media: files })
  res.status(200).json({ media: { name: 'John Doo' } })
}

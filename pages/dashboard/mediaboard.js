import path from 'path'
import fs from 'fs'
import { MediaContainer } from '../../components/containers/media-container'

export default function Page({ media }) {
  console.log('the media files:', media)
  return <MediaContainer />
}

const getMediaFiles = async () => {
  return new Promise((res, rej) => {
    fs.readdir(path.resolve('./public/uploads'), (err, files) => {
      if (err) throw err
      res(files)
    })
  })
}

export const getStaticProps = async () => {
  const files = await getMediaFiles()

  return {
    props: { media: files },
  }
}

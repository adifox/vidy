// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      console.log('SOME REQUEST:', req)
      console.log('THE FILE NAME:', file)
      return cb(null, file.originalname)
    },
  }),
})

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.log('THE ERRORS - REQ BODY:', req.file)
    console.log('THE FUKK WITH THE ERRORS:', error)
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.single('file'))

apiRoute.post((req, res) => {
  console.log('IN THE POST:::', req.body)
  res.status(200).json({ data: 'succes' })
})

export default apiRoute

export const config = {
  api: {
    bodyParser: false,
  },
}

// export default function handler(req, res) {
//   console.log('THE REQ BODY:', req.body.title)
//   console.log('THE SEND FILE:', req.file)
//   res.status(200).json({ name: 'John Doe' })
// }

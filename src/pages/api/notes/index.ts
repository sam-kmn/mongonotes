// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Note from '../../../models/Note'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {

    case 'GET': {
      try {
        const notes = await Note.find({})
        res.status(200).json({ success: true, data: notes })
      } catch (error) { res.status(400).json({ success: false }) }
      break 
    }

    case 'POST': {
      try {
        const note = await Note.create(req.body)
        res.status(201).json({ success: true, data: note })
      } catch (error) { res.status(400).json({ success: false }) }
      break
    }
  
    default: {
      res.status(400).json({ success: false }) 
      break
    }
  }
}

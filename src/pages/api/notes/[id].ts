// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Note from '../../../models/Note'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query

  switch (req.method) {

    case 'GET': {
      try {

        const note = await Note.findById(id)
        if (!note) return res.status(400).json({ success: false })
        res.status(200).json({ success: true, data: note })

      } catch (error) { res.status(400).json({ success: false }) }
      break 
    }

    case 'PUT': {
      try {

        const note = await Note.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })
        if (!note) return res.status(400).json({ success: false })
        res.status(200).json({ success: true, data: note })

      } catch (error) { res.status(400).json({ success: false }) }
      break 
    }

    case 'DELETE': {
      try {
        
        const deleteNote = await Note.deleteOne({ _id: id })
        if (!deleteNote) return res.status(400).json({ success: false })
        res.status(200).json({ success: true})
        
      } catch (error) { res.status(400).json({ success: false }) }
      break 
    }
  
    default: {
      res.status(400).json({ success: false }) 
      break
    }
  }
}

import {useState} from 'react'
import Link from 'next/link'
import Modal from '../components/Modal'
import { NoteType } from '../models/Note'

const note = {
  title: '',
  description: ''
}

interface Props {
  header: string,
  submit: (data: NoteType) => void,
  inputData?: NoteType
}

const InputModal = (Props: Props) => {

  const {header, submit, inputData=note} = Props
  const [data, setData] = useState(inputData)

  const editData = (evt: any) => {
    setData({...data, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = async (evt:any) => {
    evt.preventDefault()
    submit(data)
  }


  return (
    <Modal>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
        <header className="text-center font-semibold text-2xl mb-5">{header}</header>
        <input name='title' value={data.title} onChange={editData} required type="text" placeholder="Title" className="border rounded p-2 " />
        <textarea name='description' value={data.description} onChange={editData} required className="border rounded p-2 max-h-20" placeholder="Description" cols={30} rows={3}></textarea>
        <div className="flex justify-end items-center gap-2">
          <Link href={'/'}><button className="border rounded px-3 py-1 border-neutral-500  hover:bg-neutral-500 hover:text-white transition duration-200">Cancel</button></Link>
          
          <button type='submit' className="border rounded px-3 py-1 border-neutral-500  hover:bg-neutral-500 hover:text-white transition duration-200">Submit</button>
        </div>
      </form>
    </Modal>
  )
}

export default InputModal
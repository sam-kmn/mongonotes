import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import InputModal from "../../components/InputModal"
import Modal from "../../components/Modal"
import NoteSkeleton from "../../components/NoteSkeleton"
import { NoteType } from "../../models/Note"

const Note = () => {

  const router = useRouter()
  const { id } = router.query
  const [edit, setEdit] = useState(false)
  const [data, setData] = useState<NoteType | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  const editNote = async (data: NoteType) => {
    if (!process.env.NEXT_PUBLIC_URL) return
    try {
      const res = await (await fetch(process.env.NEXT_PUBLIC_URL + data._id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
      })).json()
      
      if (!res.success) return router.push('/error')
      setData(res.data)
      setEdit(false)
      
    } catch (error) {
      alert(error)
    }
    
  }

  const deleteNote = async () => {
    if (!process.env.NEXT_PUBLIC_URL) return
    try {
      const res = await (await fetch(process.env.NEXT_PUBLIC_URL + id, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
      })).json()
      
      if (!res.success) throw Error('Something went wrong')
      router.push('/')

    } catch (error) {
      alert(error)
      router.push('/error')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!process.env.NEXT_PUBLIC_URL) return
      setLoading(true)
      const response = await (await fetch(process.env.NEXT_PUBLIC_URL + id)).json()
      if (!response.success) return router.push('/error')
      setData(response.data)
      setLoading(false) 
    }

    if (id) fetchData()
  }, [id])

  if (loading) return <NoteSkeleton />
  if (edit) return <InputModal header="Edit this note" submit={editNote} inputData={data} />
  else if (data) return (
    <Modal>
      <h1 className="font-semibold text-lg">{data.title}</h1>
      <p>{data.description}</p>
      <div className="flex justify-end items-center gap-4 mt-5">
        <button onClick={() => setEdit(true)} className="border rounded px-3 py-1 border-neutral-500  hover:bg-neutral-500 hover:text-white transition duration-200">Edit</button>
        <button onClick={deleteNote} className="border rounded px-3 py-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-200">Delete</button>
      </div>
    </Modal>
  )
}

export default Note
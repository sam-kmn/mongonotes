import { useRouter } from 'next/router'
import InputModal from '../components/InputModal'
import { NoteType } from '../models/Note'

const Add = () => {

  const router = useRouter()

  const submit = async (data: NoteType) => {
    
    if (!process.env.NEXT_PUBLIC_URL) return
    try {
      const res = await (await fetch(process.env.NEXT_PUBLIC_URL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
      })).json()

      if (res.success) router.push('/')
      
    } catch (error) {
      alert(error)
    }
    
  }


  return <InputModal header='Create new note' submit={submit} />
}

export default Add
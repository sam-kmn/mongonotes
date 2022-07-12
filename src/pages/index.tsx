import Link from 'next/link'
import { NoteType } from '../models/Note'

export const getServerSideProps = async () => {

  const notes = []

  try {
    const response = await (await fetch('http://localhost:3000/api/notes/')).json()
    if (response.success) notes.push(...response.data)    
  } catch (error) {
    console.log(error);
  }


  return {
    props: {
      notes: notes
    }
  }
}

const Home = ({notes}: {notes: NoteType[]}) => {
  
  if (notes) return (
    <main className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 p-5'>
      {notes.map(note => (
        <Link key={note._id}  href={'/note/'+note._id}>
          <div className='p-4 py-10 rounded-lg shadow-lg cursor-pointer bg-white hover:scale-105 transition duration-150'>
            <header className='text-center text-xl font-semibold'>{note.title}</header>
          </div>
        </Link>
      ))}
    </main>
  )
  else return (
    <div className='text-center text-3xl'>There are no notes.</div>
  )
}

export default Home

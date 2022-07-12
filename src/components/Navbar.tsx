import Link from "next/link"

const Navbar = () => {

  return (
    <div className="w-screen p-3 text-white bg-blue-600">
      <nav className="container mx-auto flex justify-between items-center"> 
        <Link href={'/'}>
          <button className="font-bold text-2xl">MongoNotes</button>
        </Link>
        <Link href={'/add'}>
          <button className="border rounded-lg px-3 py-1 hover:bg-white hover:text-blue-600 hover:font-semibold transition duration-200">Add note</button>
        </Link>
      </nav>
    </div>
  )

}

export default Navbar

const Modal = ({children}: {children: any}) => {

  return (
    <main className="w-full flex-1 flex justify-center items-center shadow-2xl p-5 ">
      <div className="flex-1 flex flex-col gap-3 max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-5">
        {children}
      </div>
    </main>
  )
}

export default Modal
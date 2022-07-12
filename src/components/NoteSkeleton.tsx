import Modal from "./Modal"

const LineSkelet = ({className}: {className?: string}) => {
  return <div className={`${className} rounded-full p-2 bg-neutral-200 animate-pulse`}></div>
}

const NoteSkeleton = () => {

  return (
    <Modal>
      <LineSkelet className="w-1/2 mb-2 p-3" />
      <LineSkelet  />
      <LineSkelet  />
      <LineSkelet  />
      <div className="flex justify-end items-center gap-4 mt-5">
        <LineSkelet className="py-4 px-10" />
        <LineSkelet className="py-4 px-10" />
      </div>
    </Modal>
  )
}

export default NoteSkeleton
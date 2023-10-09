import Image from "next/image"

const Loading = () => {
  return (
    <div className='z-40 absolute justify-center items-center flex w-full h-full left-0 top-0 text-6xl bg-white'>
      <div className="relative h-auto w-auto">
        <Image priority className='object-contain' width={400} height={300} src='/static/loading.gif' alt='loading' />
      </div>
    </div>
  )
}

export default Loading

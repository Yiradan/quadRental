import Image from 'next/image';

interface CoverImageProps{
  title: string;
  subTitle?: string;
}

const CoverImage = ({title,subTitle}:CoverImageProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[50vh]
    shadow-xl shadow-gray-600">
      <Image
        priority
        src='/static/background.jpg'
        alt='background-image'
        fill
        className='z-[-1] object-cover bg-center w-full h-auto opacity-50'
      />
      <div className="title text-center justify-center">
        <h1 className='text-white'>{title}</h1>
        <h2></h2>
      </div>
    </div>
  )
}

export default CoverImage

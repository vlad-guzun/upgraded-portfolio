import Image from "next/image"

const TopSection = () => {
  return (
    <div className='my-16 sm:my-24 md:my-32'>
        <div className='flex items-center justify-end'>
            <div className='mr-4 sm:mr-8 text-right'>
                <span className='text-2xl sm:text-3xl md:text-4xl text-slate-300 font-bold tracking-wide'>
                    Vlad Guzun
                </span>
                <p className='text-sm sm:text-base text-slate-500'>
                    Web developer
                </p>
            </div>
            <div>
                <Image 
                      className='rounded-full'
                      src={'/logo.gif'}
                      height={100}
                      width={100}
                      alt='profile_pic'
                />
            </div>              
        </div>
    </div>
  )
}

export default TopSection
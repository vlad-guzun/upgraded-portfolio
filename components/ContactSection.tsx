import TitleHeader from "./TitleHeader"
import Image from "next/image"
import Link from "next/link"

const ContactSection = () => {
  return (
    <div className='mb-12'>
        <TitleHeader title='Contact'/>
        <div className='text-base mb-4 text-gray-200'>
            Job offers?, write or call.
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='py-4 pl-4 rounded-xl bg-slate-900 group'>
                <div className='flex items-center cursor-default'>
                    <div className='w-8'>
                        <Image 
                              className='group-hover:-rotate-12 transition ease-in-out duration-75'
                              src={'/gmail.png'}
                              alt="gmail_icon"
                              height={45}
                              width={45}
                        />
                    </div>
                    <div className='ml-4'>
                        <Link href={'#'}
                            className='text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-75'
                        >
                            vladguzun20022@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
            <div className='py-4 pl-4 rounded-xl bg-slate-900 group'>
                <div className='flex items-center cursor-default'>
                    <div className='w-8'>
                        <Image 
                              className='group-hover:-rotate-12 transition ease-in-out duration-75'
                              src={'/phone.png'}
                              alt="phone_icon"
                              height={45}
                              width={45}
                        />
                    </div>
                    <div className='ml-4'>
                        <Link href={'#'}
                            className='text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-75'
                        >
                            RO:0746018887 MD:79830340
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default ContactSection
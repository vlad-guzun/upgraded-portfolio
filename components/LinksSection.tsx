import Link from "next/link"
import Image from "next/image"
import TitleHeader from "./TitleHeader"

const LinksSection = () => {

    const links = [
        {
            url: 'https://linkedin.com/in/vlad-guzun',
            icon: '/linkedin2.png',
            label: 'LinkedIn',
        },
        {
            url: 'https://github.com/vlad-guzun',
            icon: '/github5.png',
            label: 'Github',
        },
        {
            url: 'https://m.facebook.com/profile.php?id=100008429952927',
            icon: '/facebook.png',
            label: 'Facebook',
        },
        {
            url: 'https://www.instagram.com/vladguzun_/',
            icon: '/instagram.webp',
            label: 'Instagram',
        },
    ]

  return (
    <div>
        <TitleHeader title='Links'/>
        <div className='text-base mb-4 text-gray-200'>
            Check out my socials
        </div>
        <div>
            {links.map((link,idx) => (
                <Link href={link.url} key={idx} className='flex items-center w-full rounded-xl p-1.5 mb-2 bg-slate-900 group hover:bg-slate-800 transition-shadow duration-75'>
                    <div className='flex w-full text-center'>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 items-center flex'>
                            <Image src={link.icon}
                                    height={30}
                                    width={30}
                                    alt={link.label}
                                    className='p-0.5 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150'
                            />
                        </div>
                        <h2 className='flex justify-center items-center font-bold w-full text-sm text-gray-200 -ml-10 group-hover:tracking-widest ease-in-out duration-75'>
                            {link.label}
                        </h2>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default LinksSection
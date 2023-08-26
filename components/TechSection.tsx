import TitleHeader from "./TitleHeader"
import Image from "next/image"

const TechSection = () => {
    {/*CHANGE ALL HERE , ADD A MAP, DOWNLOAD ALL THE ICONS, I DO NOT KNOW WHY THE FUCK DOESNT WORK WITH THE NEXT.CONFIG*/}
    const technologies = [
        {
            name: 'Javascript',
            href_img: '/javascript.png',
        },
        {
            name: 'Typescript',
            href_img: '/typescript.png',
        },
        {
            name: 'React.js',
            href_img: '/react.webp',
        },
        {
            name: 'Next.js',
            href_img: '/nextjs.png',
        },
        {
            name: 'Node.js',
            href_img: '/nodejs.png',
        },
        {
            name: 'MongoDB',
            href_img: '/mongodb.png',
        },
        {
            name: 'PostgreSQL',
            href_img: '/postgresql.png',
        },
        {
            name: 'GraphQL',
            href_img: '/graphql.png',
        },
        {
            name: 'GIT',
            href_img: '/git.png',
        },
        {
            name: 'GitHub',
            href_img: '/github.png',
        },
        {
            name: 'Windows',
            href_img: '/windows7.png'
        },
        {
            name: 'Linux',
            href_img: '/linux.png',
        },
        {
            name: 'Powershell',
            href_img: '/powershell.png',
        },
    ]
  return (
    <div>
        <TitleHeader title='Technologies' />
        <div className='text-base mb-4 text-gray-200'>
            Tech I use in most of my projects.
        </div>
        <div className='flex flex-wrap'>
            {technologies.map(tech => (
                <div className='flex py-1 sm:py-1.5 px-2 sm:px-3 md:px-4 mr-2 mb-2 bg-slate-900 rounded-xl items-center group duration-100'>
                    <Image  
                            className='w-10 h-10 sm:w-12 p-1 sm:h-12 group-hover:-rotate-[20deg] transition-all ease-in-out duration-75'
                            src={tech.href_img}
                            alt={'js'}
                            height={45}
                            width={45}
                    />
                    <span className='ml-2 sm:ml-3 md:ml-4 text-gray-200 text-sm tracking-wide font-bold cursor-default'>{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechSection
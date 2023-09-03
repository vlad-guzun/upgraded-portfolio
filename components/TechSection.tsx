import TitleHeader from "./TitleHeader"
import Image from "next/image"

const TechSection = () => {
    const technologies = [
        {
            name: 'HTML',
            href_img: '/html.png',
        },
        {
            name: 'CSS',
            href_img: '/css.png',
        },
        {
            name: 'Tailwind',
            href_img: '/tailwind.png',
        },
        {
            name: 'SCSS',
            href_img: '/scss.png',
        },
        {
            name: 'Javascript',
            href_img: '/javascript.png',
        },
        {
            name: 'Typescript',
            href_img: '/typescript2.svg',
        },
        {
            name: 'React.js',
            href_img: '/react.webp',
        },
        {
            name: 'React Native',
            href_img: '/react.webp',
        },
        {
            name: 'Next.js',
            href_img: '/nextjs.png',
        },
        {
            name: 'Angular',
            href_img: '/angular.png',
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
            name: 'Prisma',
            href_img: '/prisma.png',
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
        {
            name: 'Cloud',
            href_img: '/cloud.png',
        },
    ]
  return (
    <div>
        <TitleHeader title='Technologies' />
        <div className='text-base mb-4 text-gray-200'>
            Tech I use in most of my projects.
        </div>
        <div className='flex flex-wrap'>
            {technologies.map((tech,idx) => (
                <div key={idx} className='flex py-1 sm:py-1.5 px-2 sm:px-3 md:px-4 mr-2 mb-2 bg-slate-900 rounded-xl items-center group duration-100'>
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
        <h1>Willing to learn <span className='text-blue-500'>anything required</span> by the job very fast and be productive <span className='text-blue-500'>within days</span>.</h1>
    </div>
  )
}

export default TechSection
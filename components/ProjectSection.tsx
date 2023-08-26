import Link from "next/link"
import TitleHeader from "./TitleHeader"
import Image from "next/image"

const ProjectSection = () => {

    const  projects = [
        {
            'thumbnail': '/project1.jpg',
            'name': 'Real-Time-Messages',
            'description': 'Frontend created with Next.js | Backend with prisma & supabase',
            'live': 'https://working-real-time-app.vercel.app/',
            'github': 'https://github.com/vlad-guzun/WORKING-REAL-TIME-APP',
            'icon-live': '/live.png',
            'icon-gihub': '/github2.webp',
        },
        {
            'thumbnail': '/project2.jpg',
            'name': 'Shopping Cart',
            'description': 'UI created with Next.js, Redux as the state-management',
            'live': 'https://shopping-cart-fontend.vercel.app/',
            'github': 'https://github.com/vlad-guzun/shopping-cart-fontend',
            'icon-live': '/live.png',
            'icon-gihub': '/github2.webp',
        },
        {
            'thumbnail': '/ibm.png',
            'name': 'Complex events management app',
            'description': 'The application was created using the MERN stack, in a team of 4 during the IBM internship',
            'live': 'https://github.com/CoroianMarius/IBM-summer-practice-backend',
            'github': 'https://github.com/CoroianMarius/IBM-summer-practice-backend',
            'icon-live': '/live.png',
            'icon-gihub': '/github2.webp',
        },
    ]
    
  return (
    <div className='mt-12 mb-12'>
        <TitleHeader title='Projects'/>
        <div className='text-base mb-4 text-gray-200'>
            Some of my projects
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2'>
            {projects.map((project,idx) => (
                <div key={idx} className='bg-slate-900 rounded-xl'>
                    <div style={{backgroundImage: `url('${project.thumbnail}')`}} className='bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl relative'>
                        <div className='aspect-video bg-gradient-to-b from-transparent to-black'>
                            <div className='absolute bottom-0 left-0'>
                                <h3 className='text-xl font-bold text-gray-200 m-2 group-hover:invisible'>
                                    {project.name}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='mb-4'>
                            <p className='text-gray-200 text-sm'>
                                {project.description}
                            </p>
                        </div>
                        <div className='flex flex-row'>
                            <div className='basis-1/2 flex'>
                                <Link href={project.live} className='bg-gray-900 w-full flex items-center justify-center text-center py-3 rounded-lg mr-1 hover:bg-gray-500'>
                                    <span className='text-sm font-normal text-gray-200 tracking-wide ml-3'>Live</span>
                                </Link>
                            </div>
                            <div className='basis-1/2 flex'>
                                <Link href={project.github} className='bg-gray-900 w-full flex items-center justify-center text-center py-3 rounded-lg mr-1 hover:bg-gray-500'>
                                    <span className='text-sm font-normal text-gray-200 tracking-wide ml-3'>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectSection
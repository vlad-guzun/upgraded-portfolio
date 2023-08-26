import TitleHeader from "./TitleHeader"

const ExperienceSection = () => {

    const experience = [
        {
            'time_range': '06/2023 - 08/2023',
            'company': 'IBM',
            'description': 'Events application',
            'projects': [
                {
                 'description': 'Implemented the backend with Node.js/Express'
                },
                {
                 'description': 'Created the UI with Next.js and react libraries'
                },
                {
                    'description': 'Collaborated in a team of 4'
                }
            ]
        },
        
    ]


  return (
    <div className='mb-2'>
        <TitleHeader title='Experience'/>
        <div className='text-base mb-4 text-gray-200'>
            Below is my description of my professional experience 
        </div>
        <ul className='list-inside lg:list-outside list-disc text-gray-200'>
            {experience.map(item => (
                <li className='mb-10'>
                    <div className='text-lg font-medium mb-3 text-gray-300'>
                        {item.time_range} <br className='block sm:hidden' /> <span className='text-blue-600 pl-4 sm:pl-0'>
                            {'>>'} {item.company}
                        </span>
                    </div>
                    <div>
                        <p className='text-sky-800'><b>{item.description}</b></p>
                    </div>
                    <div>
                        <p>Tasks in the project</p>
                    </div>
                    <div className='ml-8 mt-4'>
                        <ul className='list-disc'>
                            {item.projects.map((singleProj,idx) => (
                                <li key={idx}>{singleProj.description}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceSection
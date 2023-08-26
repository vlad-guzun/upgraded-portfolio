import TitleHeader from "./TitleHeader"

const InformationSection = () => {
    const information = [
        {
            label: 'name',
            value: 'Vlad Guzun',
        },
        {
            label: 'birthday',
            value: '7 March 2002',
        },
        {
            label: 'current_location',
            value: 'Timisoara,Romania',
        },
        {
            label: 'languages',
            value: 'English,Romanian'
        },
        {
            label: 'experience',
            value: '1 year',
        },
        {
            label: 'status',
            value: <span className='text-blue-600'>Open to oportunities</span>,
        },

    ]
  return (
    <div className='mb-12'>
        <TitleHeader title="My JSON"/>
        <div className='text-gray-200 cursor-default'>
            {information.map((info,idx) => (
                <div key={idx}>
                    <div className='flex flex-row mb-4'>
                        <div className='basis-1/3'>
                            <p>'
                                <span className='text-blue-400'>_</span>{info.label}
                            '</p>
                        </div>
                        <div className='basis-2/3'>
                            <p>: '{info.value}'</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InformationSection
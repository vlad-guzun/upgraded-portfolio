import TitleHeader from "./TitleHeader";

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
            value: 'Timisoara, Romania',
        },
        {
            label: 'languages',
            value: ['English', 'Romanian'], 
        },
        {
            label: 'experience',
            value: '3 months IBM Internship',
        },
        {
            label: 'status',
            value: <span className='text-blue-600'>Open to opportunities</span>,
        },
    ];

    return (
        <div className='mb-12'>
            <TitleHeader title="My JSON"/>
            <div className='text-gray-200 cursor-default'>
                {information.map((info, idx) => (
                    <div key={idx}>
                        <div className='flex flex-row mb-4'>
                            <div className='basis-1/3'>
                                <p>
                                    <span className='text-blue-400'>_{info.label}</span>
                                </p>
                            </div>
                            <div className='basis-2/3'>
                                {Array.isArray(info.value) ? (
                                    <p>: [<span className='text-gray-200'>'{info.value.join("', '")}'</span>]</p>
                                ) : (
                                    <p>: '{info.value}'</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InformationSection;

import TitleHeader from "./TitleHeader"

const HobbiesSection = () => {
  return (
    <div className='mb-12 mt-12'>
        <TitleHeader title='Hobbies & Interests'/>
        <div className='text-base mb-4 text-gray-200'>
            My hobbies and interests.
        </div>
        <div className='text-base text-slate-400 font-medium cursor-default'>
        <span className='underline decoration-2 decoration-purple-400'>Coding</span> ,
            <span className='underline decoration-2 decoration-lime-400'>New Tech</span> , 
            <span className='underline decoration-2 decoration-amber-400'> Hiking</span> ,
            <span className='underline decoration-2 decoration-red-400'> Personal development</span>
        </div>
    </div>
  )
}

export default HobbiesSection
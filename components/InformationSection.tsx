import React from "react"
import TitleHeader from "./TitleHeader"

interface Information {
  full_name: string
  birthday: {
    year: number
    month: string
    day: number
  };
  current_location: {
    country: string
    city: string
  };
  languages: string[]
  experience: {
    type: string
    duration: string
    company: string
  };
  status: string
  core_value: string
}

const InformationSection = () => {
  const information: Information = {
    full_name: 'Vlad Guzun',
    birthday: {
      year: 2002,
      month: 'March',
      day: 7,
    },
    current_location: {
      country: 'Romania',
      city: 'Timisoara',
    },
    languages: ['English', 'Romanian'],
    experience: {
      type: 'Internship',
      duration: '2 months',
      company: 'IBM',
    },
    status: 'Open to work',
    core_value: "The only way to do great work is to love what you do.",
  };

  const postmanBlue = '#9cdcfe';
  const postmanOrange = '#ce9178';
  const white = '#FFFFFF';

  const formattedJson = (
    <pre>
      {'{\n'}
      {Object.entries(information).map(([key, value], index, array) => (
        <React.Fragment key={key}>
          <span style={{ color: postmanBlue }}>{`  "${key}": `}</span>
          {key === 'languages' ? (
            <span>
              <span style={{ color: white }}>[</span>
              {Array.isArray(value) ? (
                <span style={{ color: postmanOrange }}>{value.map((v) => `"${v}"`).join(', ')}</span>
              ) : (
                <span style={{ color: postmanOrange }}>{`"${value}"`}</span>
              )}
              <span style={{ color: white }}>]</span>
            </span>
          ) : key === 'birthday' ? (
            <span style={{ color: postmanOrange }}>
              {' '}
              <span style={{ color: white }}>{'{\n'}</span>
              <span style={{ color: postmanBlue }}>{'    "year": '}</span>
              <span style={{ color: '#b5cea8' }}>{value.year}</span>
              <span style={{ color: white }}>,</span> 
              <br />
              <span style={{ color: postmanBlue }}>{'    "month": '}</span>
              <span style={{ color: postmanOrange }}>{`"${value.month}"`}</span>
              <span style={{ color: white }}>,</span> 
              <br />
              <span style={{ color: postmanBlue }}>{'    "day": '}</span>
              <span style={{ color: '#b5cea8' }}>{value.day}</span>
              <br />
              <span style={{ color: white }}>{'  }'}</span>
            </span>
          ) : key === 'experience' ? (
            <span style={{ color: postmanOrange }}>
              {' '}
              <span style={{ color: white }}>{'{\n'}</span>
              <span style={{ color: postmanBlue }}>{'    "type": '}</span>
              <span style={{ color: postmanOrange }}>"{value.type}",</span>
              <br />
              <span style={{ color: postmanBlue }}>{'    "duration": '}</span>
              <span style={{ color: postmanOrange }}>{`"${value.duration}",`}</span> 
              <br />
              <span style={{ color: postmanBlue }}>{'    "company": '}</span>
              <span style={{ color: postmanOrange }}>"{value.company}"</span>
              <br />
              <span style={{ color: white }}>{'  }'}</span>
            </span>
          ) : key === 'current_location' ? (
            <span style={{ color: postmanOrange }}>
              {' '}
              <span style={{ color: white }}>{'{\n'}</span>
              <span style={{ color: postmanBlue }}>{'    "country": '}</span>
              <span style={{ color: postmanOrange }}>"{value.country}"</span>
              <span style={{ color: white }}>,</span> 
              <br />
              <span style={{ color: postmanBlue }}>{'    "city": '}</span>
              <span style={{ color: postmanOrange }}>"{value.city}"</span>
              <br />
              <span style={{ color: white }}>{'  }'}</span>
            </span>
          ) : (
            <span style={{ color: postmanOrange }}>{typeof value === 'string' ? `"${value}"` : JSON.stringify(value)}</span>
          )}
          {index < array.length - 1 ? ',' : ''}
          <br />
        </React.Fragment>
      ))}
      {'}'}
    </pre>
  );

  return (
    <div className='mb-12'>
      <TitleHeader title="JSON Info"/>
      {formattedJson}
    </div>
  );
};

export default InformationSection;

import TitleHeader from "./TitleHeader"
import React from "react"

const InformationSection = () => {
  const information = {
    full_name: 'Vlad Guzun',
    birthday: '7 March 2002',
    current_location: 'Timisoara',
    languages: ['English', 'Romanian'],
    experience: '2 months IBM Internship',
    status: 'Open to opportunities',
  };

  const postmanBlue = '#9cdcfe'
  const postmanOrange = '#ce9178'
  const white = '#FFFFFF'

  const formattedJson = (
    <pre>
      {'{\n'}
      {Object.entries(information).map(([key, value], index, array) => (
        <React.Fragment key={key}>
          <span style={{ color: postmanBlue }}>{`  "${key}": `}</span>
          {key === 'languages' ? (
            <span>
              <span style={{ color: white }}>[</span>
              <span style={{ color: postmanOrange }}>{value.map(v => `"${v}"`).join(', ')}</span>
              <span style={{ color: white }}>]</span>
            </span>
          ) : key === 'current_location' ? (
            <span style={{ color: postmanOrange }}>
              {' '}
              <span style={{ color: white }}>{'{\n'}</span>
              <span style={{ color: postmanBlue }}>{'    "country": '}</span>
              <span style={{ color: postmanOrange }}>"Romania",</span>
              <br />
              <span style={{ color: postmanBlue }}>{'    "city": '}</span>
              <span style={{ color: postmanOrange }}>{`"${value}"`}</span>
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
  )
}

export default InformationSection

import TitleHeader from "./TitleHeader"
import React from "react"

const InformationSection = () => {
  const information = {
    name: 'Vlad Guzun',
    birthday: '7 March 2002',
    current_location: 'Timisoara, Romania',
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
      <TitleHeader title="Abstract Info"/>
      {formattedJson}
    </div>
  )
}

export default InformationSection

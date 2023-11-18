import React from "react";
import TitleHeader from "./TitleHeader";

interface Information {
  full_name: string;
  birthday: {
    year: number;
    month: string;
    day: number;
  };
  location: {
    home_country: string;
    currently_living: string;
    city: string;
  };
  languages: string[];
  experience: {
    type: string;
    duration: string;
    company: string;
  };
  status: string;
  core_value: string;
}

const InformationSection = () => {
  const information: Information = {
    full_name: 'Vlad Guzun',
    birthday: {
      year: 2002,
      month: 'March',
      day: 7,
    },
    location: {
      home_country: 'Moldova', 
      currently_living: 'Romania', 
      city: 'Timisoara',
    },
    languages: ['English', 'Russian','Romanian'],     
    experience: {
      type: 'Internship',
      duration: '2 months',
      company: 'IBM',
    },
    status: 'Open to work',
    core_value: "The only way to do\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t great work is to love\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t what you do.",
  };
  
  const postmanBlue = '#9cdcfe';
  const postmanOrange = '#ce9178';
  const white = '#FFFFFF';

  const formattedJson = (
    <pre>
      {'{\n'}
      <span style={{ color: postmanBlue }}>{`  "full_name": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.full_name}",\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "birthday": `}</span>
      {'{\n'}
      <span style={{ color: postmanBlue }}>{`    "year": `}</span>
      <span style={{ color: '#b5cea8' }}>{`${information.birthday.year},\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "month": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.birthday.month}",\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "day": `}</span>
      <span style={{ color: '#b5cea8' }}>{`${information.birthday.day}\n`}</span>
      <span style={{ color: white }}>{`  },\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "location": `}</span>
      {'{\n'}
      <span style={{ color: postmanBlue }}>{`    "home_country": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.location.home_country}",\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "currently_living": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.location.currently_living}",\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "city": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.location.city}"\n`}</span>
      <span style={{ color: white }}>{`  },\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "languages":  `}</span>
      {'[\n'}
      <span style={{ color: postmanOrange }}>{`    "${information.languages[0]}",\n`}</span>
      <span style={{ color: postmanOrange }}>{`    "${information.languages[1]}",\n`}</span>
      <span style={{ color: postmanOrange }}>{`    "${information.languages[2]}"\n`}</span>
      <span style={{ color: white }}>{`  ],\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "experience": `}</span>
      {'{\n'}
      <span style={{ color: postmanBlue }}>{`    "type": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.experience.type}",\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "duration": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.experience.duration}",\n`}</span>
      <span style={{ color: postmanBlue }}>{`    "company": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.experience.company}"\n`}</span>
      <span style={{ color: white }}>{`  },\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "status": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.status}",\n`}</span>

      <span style={{ color: postmanBlue }}>{`  "core_value": `}</span>
      <span style={{ color: postmanOrange }}>{`"${information.core_value.replace(/\t/g, ' ')}"\n`}</span>

      {'}\n'}
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

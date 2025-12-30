import { useState } from 'react'
import './App.css'
import {Header} from './components/Header.jsx'
import { Builder } from './components/Builder.jsx'
import { Resume } from './components/Resume.jsx'

function App() {
  const [cvData, setCvData] = useState({
    'personal': {
      'name': 'Freddie Kruger',
      'number': '012-345-6798',
      'email': 'readyfreddie@gmail.com',
      'linkedIn': 'https://www.linkedin.com/in/freddie-kruger/',
      'portfolio': 'https://github.com/freddie-kruger',
    },
    'education': {
        'school': 'Ohio State University',
        'location': 'Columbus, Ohio',
        'degree': 'Bachelor of Science in Criminology',
        'start': 'Sept 1974',
        'end': 'Apr 1978',
        'bullets': [
        {
          'id': crypto.randomUUID(),
          'text': 'CGPA: 4.00, Deans List(1974-1978).'
        },
        {
           'id': crypto.randomUUID(),
           'text': 'Received the Ohio State University “Nightmare Studies Excellence Award” for dedication to dream research.'
        }
      ],
    },
    
    'experience': [
      {
        'id': crypto.randomUUID(),
        'title': 'Field Analyst - Criminal Patterns',
        'start': 'Sept 1978',
        'end': 'Jun 1984',
        'company': 'Springwood Independent Research',
        'location': 'Springwood, Ohio',
        'bullets': [
          {
            'id': crypto.randomUUID(),
            'text': 'Studied behavioral patterns of local criminal activity for case analysis.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Developed expertise in nocturnal surveillance and evasion tactics.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Documented methodologies of high-risk individuals for theoretical research purposes.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Analyzed crime scene dynamics to understand psychological triggers and patterns.'
          }
        ],
      },
      {
        'id': crypto.randomUUID(),
        'title': 'Night Operations Research Assistant',
        'start': 'Jul 1984',
        'end': 'Dec 1989',
        'company': 'Dreamscape Behavioral Lab',
        'location': 'Springwood, Ohio',
        'bullets': [
          {
            'id': crypto.randomUUID(),
            'text': 'Monitored and recorded nocturnal activity for patterns in sleep behavior and subconscious responses.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Assisted in the development of theoretical models for fear conditioning and nightmare induction.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Conducted field observations to correlate environmental factors with high-risk behavioral tendencies.'
          },
          {
            'id': crypto.randomUUID(),
            'text': 'Prepared detailed reports and visual analyses for senior researchers on anomalous activity trends.'
          }
        ],
      }

    ],
    'projects': [
      {
        'id': crypto.randomUUID(),
        'title': '',
        'technologies': '',
        'bullets': [{'id': crypto.randomUUID(), 'text': ''}],
      },
    ],
    'skills': [
      {
        'id': crypto.randomUUID(),
        'skillGroup': '',
        'skills': '',
      },
    ],

  
  })

  return (
    <div className='App'>
        <Header />
        <div className='Content'>
          <Builder cvData={cvData} setCvData={setCvData} />
          <Resume cvData={cvData} />
        </div>
    </div>
  )
}

export default App

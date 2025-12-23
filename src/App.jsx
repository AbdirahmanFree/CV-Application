import { useState } from 'react'
import './App.css'
import {Header} from './components/Header.jsx'
import { Builder } from './components/Builder.jsx'
import { Resume } from './components/Resume.jsx'

function App() {
  const [cvData, setCvData] = useState({
    'personal': {
      'name': 'Freddie Kruger',
      'number': '012-345-798',
      'email': 'readyfreddie@gmail.com',
      'linkedIn': 'https://www.linkedin.com/in/freddie-kruger/',
      'portfolio': 'https://github.com/freddie-kruger',
    },
    'education': {
        'id': crypto.randomUUID(),
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
        'title': '',
        'start': '',
        'end': '',
        'company': '',
        'location': '',
        'bullets': [],
      },
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

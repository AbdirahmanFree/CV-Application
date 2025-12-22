import { useState } from 'react'
import './App.css'
import {Header} from './components/Header.jsx'
import { Builder } from './components/Builder.jsx'
import { Resume } from './components/Resume.jsx'

function App() {
  const [cvData, setCvData] = useState({
    'personal': {
      'name': '',
      'number': '',
      'email': '',
      'linkedIn': '',
      'portfolio': '',
    },
    'education': {
        'id': crypto.randomUUID(),
        'school': '',
        'location': '',
        'degree': '',
        'start': '',
        'end': '',
        'bullets': [],
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
        'bullets': [],
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

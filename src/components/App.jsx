import { useState } from 'react'
import '../styles/App.css'
import {Header} from './Header.jsx'

function App() {
  const [cvData, setCvData] = useState({
    'personal': {
      'name': '',
      'number': '',
      'email': '',
      'linkedIn': '',
      'gitHub': '',
    },
    'education': [
      {
        'id': crypto.randomUUID(),
        'school': '',
        'location': '',
        'degree': '',
        'start': '',
        'end': '',
        'bullets': [],
      },
    ],
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
    </div>
  )
}

export default App

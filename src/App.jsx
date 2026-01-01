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
        'title': 'Distributed File Storage System',
        'tech': 'C++, POSIX, TCP/IP, Multithreading',
        'bullets': [
          {
            'id': crypto.randomUUID(), 
            'text': 'Designed and implemented a distributed file storage system supporting concurrent clients, enabling reliable file upload, download, replication, and deletion across multiple nodes using low-level socket programming'
          },
          {
            'id': crypto.randomUUID(), 
            'text': 'Built a fault-tolerant architecture with heartbeat-based node monitoring and automatic failover, ensuring high availability and data consistency under node failures'
          },
          {
            'id': crypto.randomUUID(), 
            'text' : 'Optimized file chunking and transfer protocols to reduce network overhead and improve throughput, demonstrating strong understanding of systems programming and networking concepts'
          }
          


        ],
      },
      {
        'id': crypto.randomUUID(),
        'title': 'Real-Time Chat Application',
        'tech': 'Java, Spring Boot, WebSockets, PostgreSQL',
        'bullets': [
          {
            'id': crypto.randomUUID(),
            'text': 'Developed a scalable real-time messaging platform using WebSockets to support low-latency, bidirectional communication between thousands of concurrent users',
           },
           {
            'id': crypto.randomUUID(),
            'text': 'Implemented secure authentication and authorization using JWTs and role-based access control, protecting private conversations and user data'
           },
           {
            'id': crypto.randomUUID(),
            'text': 'Designed relational database schemas and optimized queries to efficiently store message history, user presence, and conversation metadata'
           }

        ]
      }
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

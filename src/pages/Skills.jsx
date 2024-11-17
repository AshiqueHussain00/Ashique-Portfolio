import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaUserTie
} from 'react-icons/fa'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef(null)

  const skillsData = [
    {
      name: 'HTML5',
      level: 90,
      aos: 'fade-right',
      icon: <FaHtml5 size={40} className='text-orange-500' />
    },
    {
      name: 'CSS3',
      level: 85,
      aos: 'fade-right',
      icon: <FaCss3Alt size={40} className='text-blue-500' />
    },
    {
      name: 'JavaScript',
      level: 75,
      aos: 'fade-right',
      icon: <FaJsSquare size={40} className='text-yellow-500' />
    },
    {
      name: 'Vite + ReactJS',
      level: 80,
      aos: 'fade-right',
      icon: <FaReact size={40} className='text-cyan-500' />
    },
    {
      name: 'Tailwind CSS',
      level: 88,
      aos: 'fade-right',
      icon: (
        <div className='flex items-center justify-center w-10 h-10 text-center text-white bg-blue-500 rounded-full'>
          T
        </div>
      )
    },
    {
      name: 'Python',
      level: 80,
      aos: 'fade-right',
      icon: <FaPython size={40} className='text-yellow-500' />
    },
    {
      name: 'MySQL',
      level: 70,
      aos: 'fade-right',
      icon: <FaDatabase size={40} className='text-blue-600' />
    },
    {
      name: 'Project Management',
      level: 85,
      aos: 'fade-right',
      icon: <FaProjectDiagram size={40} className='text-green-500' />
    }
  ]

  const softSkillsData = [
    {
      name: 'Adaptability',
      level: 90,
      icon: <FaUserTie size={40} className='text-blue-700' />
    },
    {
      name: 'Leadership',
      level: 85,
      icon: <FaUserTie size={40} className='text-indigo-700' />
    },
    {
      name: 'Multi-Tasking',
      level: 80,
      icon: <FaUserTie size={40} className='text-purple-700' />
    },
    {
      name: 'Teamwork',
      level: 75,
      icon: <FaUserTie size={40} className='text-teal-700' />
    },
    {
      name: 'Project Management',
      level: 85,
      icon: <FaProjectDiagram size={40} className='text-green-600' />
    }
  ]

  useEffect(() => {
    AOS.init()
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  return (
    <section className='relative w-full'>
      <div className='w-11/12 mx-auto sm:w-10/12'>
        <h1
          className='mb-2 text-2xl font-bold text-center md:text-3xl'
          data-aos="fade-left"
          data-aos-duration="600"
        >
          My Skills
        </h1>
        <div
          className='flex flex-col items-center w-full max-w-6xl gap-16 px-8 mx-auto text-white-100 md:flex-row skills md:gap-24'
          ref={skillsRef}
          data-aos='fade-up'
        >
          {/* Left side: Linear skill bars */}
          <div className='w-full md:w-1/2'>
            <ul className='space-y-1'>
              {skillsData.map((skill, index) => (
                <li
                  key={index}
                  data-aos={skill.aos}
                  data-aos-delay={index * 100}
                  className='gap-2'
                >
                  <div className='flex p-2 transition-all transform rounded-full shadow-lg duration-600 hover:scale-105 hover:shadow-blue-500'>
                    <div className='flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white-100 sm:w-12 sm:h-12'>
                      {skill.icon}
                    </div>
                    <div className='ml-3'>
                      <h3 className='font-sans text-sm sm:text-base'>
                        {skill.name}
                      </h3>
                      <div className='h-2 bg-gray-700 border border-gray-800 rounded shadow-lg w-[16rem] sm:w-[20rem]'>
                        <div
                          className='h-full bg-blue-500'
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 3s ease-in-out'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Circular progress bars */}
          <div
            className='w-full md:w-1/2'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
              {softSkillsData.map((softSkill, index) => (
                <div
                  key={index}
                  className='relative flex flex-col items-center'
                  data-aos='zoom-in-up'
                  data-aos-delay={index * 100}
                >
                  <div className='p-4 transition-all transform rounded-lg shadow-lg duration-600 hover:scale-105 hover:shadow-blue-500'>
                    <div className='relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24'>
                      <svg
                        width='100%'
                        height='100%'
                        viewBox='0 0 36 36'
                        className='circular-progress'
                      >
                        <circle
                          cx='18'
                          cy='18'
                          r='15.915'
                          stroke='#2d2d2d'
                          strokeWidth='3'
                          fill='none'
                        />
                        <circle
                          cx='18'
                          cy='18'
                          r='15.915'
                          stroke='#4A90E2'
                          strokeWidth='3'
                          fill='none'
                          strokeDasharray={`${
                            isVisible
                              ? (softSkill.level * 2 * Math.PI * 15.915) / 100
                              : 0
                          }, 1000`}
                          strokeDashoffset='25.1327'
                          style={{
                            transition: 'stroke-dasharray 2.5s ease-in-out'
                          }}
                        />
                      </svg>
                      <div className='absolute flex items-center justify-center w-10 h-10 bg-opacity-50 rounded-full bg-black-900 text-white-100'>
                        {softSkill.icon}
                      </div>
                    </div>
                    <p className='mt-2 font-sans text-sm text-center text-white-100'>
                      {softSkill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

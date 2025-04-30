import React from 'react'
import { useRef } from 'react'
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import ScrollBtn from './Home/ScrollBtn'
import '../style/Home.scss'

const Home = () => {
  
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div className='Home'>
      <div className='section1'>
        <Section1 />
        <ScrollBtn scrollToRef={section2Ref}  ctop={false}/>
      </div>
      <div className='section1' ref={section2Ref} >
        <Section2 />
        <ScrollBtn scrollToRef={section3Ref} ctop={true}/>
      </div>
      <div className='section1' ref={section3Ref} >
        <Section3 />
        <ScrollBtn ctop={true}/>
      </div>
    </div>
  )
}

export default Home
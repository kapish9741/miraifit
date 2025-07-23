import React from 'react'
import Timeline from '../components/layout/MiraifitTimeline.jsx'
import Tweet from '../components/layout/Tweet.jsx'

const About = () => {
  return (
    <>
      <section className="w-screen pt-[10vh] flex flex-col items-center justify-center"><Timeline /></section>
      <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><Tweet /></section>
    </>
  )
}

export default About
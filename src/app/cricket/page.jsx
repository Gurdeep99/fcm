import React from 'react'
import CricketScoreDisplay from '../components/CricketScoreDisplay'
import CricketScoreForm from '../components/CricketScoreUpdater'

const page = () => {
  return (
    <>
     <CricketScoreForm />
     <CricketScoreDisplay />
    </>
  )
}

export default page
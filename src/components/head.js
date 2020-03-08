import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
  return (
    <Helmet title={`Anchieta | ${title}`} />
  )
}

export default Head
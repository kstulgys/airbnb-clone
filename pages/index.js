import App from '../components/App'
import { withApollo } from '../lib/apollo'
import Listings from '../components/Listings'
import Hero from '../components/Hero'
import { useState } from 'react'

function IndexPage() {
  return (
    <App>
      <Hero />
      <Listings />
    </App>
  )
}

export default withApollo(IndexPage)

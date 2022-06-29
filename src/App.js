import React from 'react'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Toggle from './components/Toggle/Toggle'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import MyProjects from './components/MyProjects/MyProjects'
import Contacts from './components/Contacts/Contacts'

export const App = () => {
  return (
    <>
    <Header />
    <Toggle />
    <Banner />
    <About />
    <Skills />
    <MyProjects />
    <Contacts />
    </>
  )
}

export default App;
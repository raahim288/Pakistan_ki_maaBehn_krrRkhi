import React from 'react'

import Home from './Home'
import { Form, Route, Routes } from 'react-router-dom'
import Forms from './Forms'

const App = () => {
  return (
    <>
<h1>Helo</h1>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='form' element={<Forms/>}/>
</Routes>

    </>
  )
}

export default App
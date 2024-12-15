import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Logout from './pages/Logout'

import AddEmployee from './components/emploee/Add'
import AddUser from './components/usermanager/Add'
import Layout from './components/main/Layout'

import Employee from './pages/Employee'
import UserManager from './pages/UserManager'
import NotFound from './pages/NotFound'

import IfAuthenticate from './components/IfAuthenticate'

function App() {
  return(
    <Router>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
  
        <Route path='/login' element={<Login/>}/>
  
        <Route path='/logout' element={<Logout/>}/>

        <Route path="/employee" element={
          <IfAuthenticate>
            <Layout>
                <Employee/>
            </Layout>
          </IfAuthenticate>
        }/>

        <Route path="/employee/add" element={
          <IfAuthenticate>
            <Layout>
                <AddEmployee/>
            </Layout>
          </IfAuthenticate>
        }/>

        <Route path="/usermanager" element={
          <IfAuthenticate>
            <Layout>
                <UserManager/>
            </Layout>
          </IfAuthenticate>
        }/>

        <Route path="/usermanager/add" element={
          <IfAuthenticate>
            <Layout>
                <AddUser/>
            </Layout>
          </IfAuthenticate>
        }/>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App

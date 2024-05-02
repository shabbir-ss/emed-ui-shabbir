import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './Login'
import Registraion from './Registration'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Profile from './Profile'
import Cart from './Cart'
import Medicine from './Medicine'
import MedicineDisplay from './MedicineDisplay'
import AdminDashboard from './AdminDashboard'
import AdminOrders from './AdminOrders'
import CustomerList from './CustomerList'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
        <Route path='/' elememt={<Login/>}/>
        <Route path='/registraion' elememt={<Registraion/>}/>
        <Route path='/dashboard' elememt={<Dashboard/>}/>
        <Route path='/orders' elememt={<Orders/>}/>
        <Route path='/profile' elememt={<Profile/>}/>
        <Route path='/cart' elememt={<Cart/>}/>
        <Route path='/products' elememt={<MedicineDisplay/>}/>

        <Route path='/admindashboard' elememt={<AdminDashboard/>}/>
        <Route path='/adminorders' elememt={<AdminOrders/>}/>
        <Route path='/customers' elememt={<CustomerList/>}/>
        <Route path='/medicine' elememt={<Medicine/>}/>
        </Routes>
    </Router>
    
  )
}

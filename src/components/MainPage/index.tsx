import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import Tabnav from '../Tabnav'

function MainPage() {
    return (
        <>
            <Header />
            <LogoutButton/>
            <Tabnav />
            <Footer/>
        </>
    )
}

export default MainPage
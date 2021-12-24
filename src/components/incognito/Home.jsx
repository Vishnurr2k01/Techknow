import React, { useContext, useState } from 'react'
import Chat from './chat'

import Navbar from './Navbar'

import Navigation from './navigation'
import Channels from './Channels'
import '../stylesheet/mainstyle.css'
import { nameContext } from '../../store/name'
import Blog from './Blog'
const Home = () => {
    const [head, setHead] = useState('Html');

    return (
        <div>

            <Navigation />



            <Navbar head={head} useHead={setHead} />

            <Chat head={head} setHead={setHead} />
            <Channels />
        </div>
    )
}

export default Home

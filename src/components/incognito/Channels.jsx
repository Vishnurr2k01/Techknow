import React from 'react'
import '../stylesheet/channels.css'
const Channels = () => {
    return (
        <div className='right-navigation' style={{width: "250px"}}>
           <ul className="list-group">
            <li className="list-group-item active" aria-current="true" style={{backgroundColor: "#755EE4", textAlign: 'center', fontSize: '1.5rem'}}>Channels</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Resources</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Tutorials</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Blogs</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Doubts</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Open Source</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Internships</li>
            <li className="list-group-item active" aria-current='true' style={{backgroundColor: '#00062A', textAlign: 'center', padding: '15px'}}>Hackathons</li>
    
            
           </ul> 
        </div>
    )
}

export default Channels

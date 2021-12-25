import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { auth, db } from '../../firebase/config';
import { AuthContext } from '../../store/firebasecontext';
import { nameContext } from '../../store/name';
import '../stylesheet/chat.css'
import { FiSettings } from 'react-icons/fi'
import { BiDotsVerticalRounded } from 'react-icons/bi'



function Chat(props) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState()
    const { user } = useContext(AuthContext)
    const { name } = useContext(nameContext);
    const d = new Date()
    let ida = d.toString()
    var head = name.toString()
    var title = head.toUpperCase()
    const curr_user = auth.currentUser.uid


    const func = () => {
        db.collection('serverdata').doc(`${name}`).collection('messages').orderBy('createdAt').limit(20).get()
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => {
                    console.log(doc.data());
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                console.log(data);
                setMessages(data)
            });
    }

    useEffect(() => {
        func();
    }, [db, name])

    const handleOnChange = (e) => {
        setNewMessage(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        if (db) {
            db.collection('serverdata').doc(`${name}`).collection('messages').add({
                text: newMessage,
                createdAt: d,
                ida: curr_user
            }).then(() => func());
            setNewMessage('')
        }
    }

    console.log(curr_user)
    return (
        <div className="chat">
            <div className="chathead"><div className=""><h2> {title} </h2></div>
                <div className="icons">
                    <FiSettings />
                    <BiDotsVerticalRounded />
                </div>

            </div>

            <div className="messages">

                {messages.map(({ id, text, ida }) => (

                    <div className={ida == curr_user ? 'my' : 'someone'}>

                        <p>user : {ida}</p>
                        {/* <p>{createdAt}</p> */}



                        <h4>{text}</h4>
                    </div>
                ))}

                {/* {messages.map((use)=>{
                <div className={use.id==user.uid ? 'my' : 'someone'}>
                <p>user : {user.uid}</p>
               

              
<h4>{use.text}</h4>
                </div>
            })} */}
            </div>

            <div className="textbox">
                <input id="textbox" type="text" value={newMessage} onChange={handleOnChange} />
                <button className="btn1" type="submit" onClick={handleOnSubmit} disabled={!newMessage} >Send</button>
            </div>
        </div>
    )
}

export default Chat

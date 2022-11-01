import React, { useState } from 'react';
import './faq.css'
import Plus from './plus-circle.png'
import Less from './Icon.png'

const FAQ = ({question, answer})=>{
    const [show, setShow] = useState(false,{});
    const handleClick = ()=>{
        if (show === false){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    return(
        <div className={show ? 'faq_main show' : 'faq_main'} onClick={handleClick}>
            <div className='question'>
                <h3>{question}</h3>
                <img src={Plus} alt="show more" className='add'/>
                <img src={Less} alt="show less" className='sub'/>
            </div>
            <div className='answer'>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FAQ;
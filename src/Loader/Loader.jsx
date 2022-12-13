import React from 'react'
import { useState } from 'react'
import '../Styles/style.css'

export default function Loader() {

    const [loadingText, setLoadingText] = useState(["Loading some Thanos level JS!!!!", "Getting Ready...", "Almost There"])
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className='loading-text'>{loadingText[Math.floor(Math.random() * 3)]}</div>
            <div className='loading-line'></div>
        </div>
    )
}

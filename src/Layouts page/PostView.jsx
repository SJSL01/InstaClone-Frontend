import React, { useContext } from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from "react";
import '../Styles/style.css'
import camera from './camera.png'
import icon from './HeadIcon.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReloadContext from '../Context/Reload';
import Loader from '../Loader/Loader';



export default function Postview() {


    const { reload } = useContext(ReloadContext)

    const [UserData, setUserData] = useState([])

    useEffect(() => {

        const getData = async () => {
            const result = await axios.get('https://igcloneserver.onrender.com/getPosts')
            // console.log(result.data);
            setUserData(result.data.reverse())
        }
        getData()

    }, [reload])




    return (
        <div className={`main`}>
            <header className='header'>
                <div className='headICON'>
                    <img src={icon} alt="icon" />
                    <h1>InstaClone</h1>
                </div>

                <button style={{ border: 0, cursor: "pointer", backgroundColor: "transparent" }}>
                    <Link to={"/createPost"}>
                        <img src={camera} alt="camera" className='camera' />
                    </Link>
                </button>


            </header>
            {UserData.length ? <Card UserData={UserData} /> : <Loader />}
        </div>
    )
}

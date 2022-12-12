import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import FileBase64 from "react-file-base64"
import { useNavigate } from 'react-router-dom'
import ReloadContext from '../Context/Reload';
import "../Styles/style.css"

export default function CreatePost() {

    const navigate = useNavigate()

    const { reload, setReload } = useContext(ReloadContext)

    const [PostData, setPostData] = useState({
        author: "",
        location: "",
        description: "",
        image: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setPostData({ ...PostData, [name]: value })
    }


    const handlePost = async (e) => {
        e.preventDefault()
        console.log(PostData);
        const result = await axios.post("https://igcloneserver.onrender.com/createPost", PostData)
        console.log(result);
        navigate("/postView")
        setReload(!reload)
    }

    return (
        <div className='create-post-container'>

            <div className='image-preview'>
                {PostData.image && <img src={PostData.image} alt="" />}
                {!PostData.image && <div>Select a image to preview.</div>}
            </div>

            <div>

                <form className='create-post'>

                    <FileBase64
                        multiple={false}
                        onDone={({ base64 }) => {
                            setPostData({ ...PostData, image: base64 })
                        }} />


                        <div>
                    <input style={{marginRight:"10px"}} type="text" onChange={handleInput} value={PostData.author} placeholder="Author" name="author" />
                    <input  style={{marginLeft:"10px"}} type="text" onChange={handleInput} value={PostData.location} placeholder="Location" name="location" />
                        </div>



                    <input type="text" onChange={handleInput} value={PostData.description} placeholder="Description" name="description" />


                    <button onClick={handlePost} type='submit'>
                        Post
                    </button>

                </form>
            </div>
        </div>
    )
}

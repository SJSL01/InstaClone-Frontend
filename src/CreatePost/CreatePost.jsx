import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import FileBase64 from "react-file-base64"
import { useNavigate } from 'react-router-dom'
import ReloadContext from '../Context/Reload';
import "../Styles/style.css"
import toast, { Toaster } from 'react-hot-toast';

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
        // console.log(PostData);
        toast.success("Posting....")

        try {
            const result = await axios.post("https://igcloneserver.onrender.com/createPost", PostData)
            console.log(result);
            toast.success("Posted")
            navigate("/postView")
            setReload(!reload)
            
        } catch (error) {
            toast.error("Max File Size Should Be 5mb")
            toast.error("Try Again!!!")
            // console.log(error);
        }

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
                        <input style={{ marginRight: "10px" }} type="text" onChange={handleInput} value={PostData.author} placeholder="Author" name="author" />
                        <input style={{ marginLeft: "10px" }} type="text" onChange={handleInput} value={PostData.location} placeholder="Location" name="location" />
                    </div>



                    <input type="text" onChange={handleInput} value={PostData.description} placeholder="Description" name="description" />



                    <button onClick={handlePost} type="submit" >Post</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                            success: {
                                duration: 4000,
                                theme: {
                                    primary: 'green',
                                    secondary: 'black',
                                },
                            },
                        }}
                    />



                </form>
            </div>
        </div>
    )
}

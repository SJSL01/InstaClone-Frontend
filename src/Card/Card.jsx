import like from './like.png'
import share from './share.png'
import '../Styles/style.css'
const Card = ({ UserData }) => {

    console.log({ UserData });
    console.log(UserData.PostImage)
    return (
        <>
            {UserData.map((data, idx) => {
                return (
                    <div className="card-Container" key={idx}>

                        <div className='cardHead'>
                            <div>
                                <div className="Uname">{data.name}</div>
                            </div>
                            <div className="more">...</div>
                        </div>

                        <div className="location">{data.location}</div>

                        <div className='imgPOST'>
                            <img className='post_image' src={data.PostImage} alt="postImg" />
                        </div>

                        <div className='like_share_date'>

                            <div>
                                <img src={like} alt="like" style={{ "marginRight": "10px" }} />
                                <img src={share} alt="share" />

                            </div>
                            <span>{data.date}</span>
                        </div>
                        <span className='like'>{data.likes} likes</span>
                        <div className='desc' style={{ "fontSize": "20px" }} >{data.description}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;
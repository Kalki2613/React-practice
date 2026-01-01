import { useState } from "react";
export default function LikeBtn(){
    let [isLiked, setIsLiked]=useState(false);
    let  toggleLike = () => {
        setIsLiked(!isLiked);
    }
    let likeStyle={color:"red"};
    return (
      <div>
        <p onClick={toggleLike}>
            {isLiked ? (<i style={likeStyle} className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)}
        </p>
      </div>
    );
}
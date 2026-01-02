import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
    const [comments, setComments] = useState([
        { userName: "Alice", remarks: "Great post!", ratings: 5 },
        { userName: "Bob", remarks: "Very informative.", ratings: 4 },
        { userName: "Charlie", remarks: "I learned a lot.", ratings: 5 }
    ]);

    let addNewComment = (newComment) => {
        setComments((currComments) => [...currComments, newComment]);
    }

    return (
        <>
            <h3>ALL Comments!</h3>

            <p>Total Comments: {comments.length}</p>

            {comments.map((comment, index) => (
                <div key={index} className="Comment">
                    <span>{comment.remarks}</span>
                    <span> ({comment.ratings})</span> <br></br>
                    <span>--<b> {comment.userName}</b></span>
                </div>
            ))}
            <hr></hr>
            <CommentsForm addNewComment={addNewComment} />
        </>
        
    );
}

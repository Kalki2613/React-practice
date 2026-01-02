
import { useState } from "react";
import {useFormik} from "formik";
import Comment from "./Comment.jsx";

const validate = (values) => {
    const errors = {};
    if (!values.userName) {
        errors.userName = "User Name can't be blank";
    }
    if (!values.remarks) {
        errors.remarks = "Remarks can't be blank";
    }       
    if (values.ratings < 1 || values.ratings > 5) {
        errors.ratings = "Ratings must be between 1 and 5";
    }
    return errors;
};
export default function CommentsForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     userName:"",
    //     remarks:"",
    //     ratings:5
    // });

    // let handleInputChange=(event)=>{
    //     setFormData((currData)=>{
    //        return {...currData, 
    //         [event.target.name]:event.target.value
    //       };
    //     });     
    // };

    // let handleSubmit=(event)=>{
    //     addNewComment(formData);
    //     event.preventDefault();
    //     console.log(formData);
    //     setFormData({   
    //         userName:"",
    //         remarks:"",
    //         ratings:5
    //     });
    // }

    const formik=useFormik({
        initialValues:{
            userName:"",
            remarks:"",     
            ratings:5
        },
        validate,
        onSubmit:(values)=>{
            alert(JSON.stringify(values, null,2));
        },
    });

    
    return (
     <div>
        <h2>Give a Comments!</h2>
        <form onSubmit={formik.handleSubmit}>{/*onSubmit={handleSubmit*/}
            <div>
                <label htmlFor="userName">User Name:</label> &nbsp;
                {/* <input type="text" name="userName" placeholder="enter username" value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})}/> */}
                <input type="text" id="userName" name="userName" placeholder="enter username" value={formik.values.userName} onChange={formik.handleChange}/>
            </div>
            {formik.errors.userName ? <div style={{color:'red'}}>{formik.errors.userName}</div> : null}
            <br></br>
            <div>
                <label htmlFor="remarks">Remarks:</label> &nbsp;
                {/* <textarea name="remarks" placeholder="your remarks" value={formData.remarks} onChange={(e) => setFormData({...formData, remarks: e.target.value})}></textarea> */}
                <textarea name="remarks" id="remarks" placeholder="your remarks" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
            </div>
            {formik.errors.remarks ? <div style={{color:'red'}}>{formik.errors.remarks}</div> : null}
            <div>
                <label htmlFor="ratings">Ratings:</label> &nbsp;
                {/* <input type="number" name="ratings" min={1} max={5} value={formData.ratings} onChange={(e) => setFormData({...formData, ratings: e.target.value})} /> */}
                <input type="number" id="ratings" name="ratings" min={1} max={5} value={formik.values.ratings} onChange={formik.handleChange} />
            </div>
            {formik.errors.ratings ? <div style={{color:'red'}}>{formik.errors.ratings}</div> : null}
            <br></br>
            <button type="submit">Add Comment</button>
        </form>
     </div>
    );
}
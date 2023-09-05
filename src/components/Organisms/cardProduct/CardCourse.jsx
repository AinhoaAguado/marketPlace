import React from "react";
import "./cardProduct.css"

import AddCourseForm from "../AddCourseFORM/AddCourseForm";

const CardCourse = () => {
    return (
        <>
        <button type="submit" className="btn btnBlue" onClick={AddCourseForm}>Add Course</button>
        </>
    )
}

export default CardCourse
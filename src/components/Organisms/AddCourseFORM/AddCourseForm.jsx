import "./AddCourseForm.css"
import { useForm } from "react-hook-form";


const AddCourseForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="name" />
      <input {...register("description")} placeholder="description" />
      <input {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img" />
    
      <input type="submit" />
    </form>   
  )
}

export default AddCourseForm;




import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Nav from "../navBar/Nav";
import Footer from "../Footer/Footer";
import Button from "../../Atoms/Button";



const AddCourseForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    <Nav />
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="name" />
      <input {...register("description")} placeholder="description" />
      <input {...register("price")} placeholder="price" />
      <input type="file" placeholder="img" />
    
      <input type="submit" />
    </form>   

    <Link to="/"><Button text="Back" style="btn btnBlue" /></Link>
    <Footer />
    </>
  )
}

export default AddCourseForm;




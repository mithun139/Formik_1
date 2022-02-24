import {useFormik, Field, Form} from "formik";
let todos_list = [];
const Registration = () => {
    const formik = useFormik({
        initialValues:{
            email:"initValues@gmail.com",
            password:""
        },
        onSubmit(values){
            console.log("form Submit");
            if (localStorage.getItem("Todos")) {
                todos_list = JSON.parse(localStorage.getItem("Todos"));
                let todo = {
                    Email:formik.values.email,
                    Password:formik.values.password,
                    Age:formik.values.age,
                    Fullname:formik.values.fullname
                }
                todos_list.push(todo);
                localStorage.setItem("Todos", JSON.stringify(todos_list));
            }
            else {
                let todo = {
                    Email:formik.values.email,
                    Password:formik.values.password,
                    Age:formik.values.age,
                    Fullname:formik.values.fullname
                }
                todos_list.push(todo);
                let todoToJson = JSON.stringify(todos_list);
                localStorage.setItem("Todos", todoToJson);
            } 
        },
        validate(){
            const errors={};
            if(formik.values.email.length<=5){
                errors.email = "Should be more than 5 chracters";
            }
            if(formik.values.email.length>=30){
                errors.email = "Should be less than than 30 chracters";
            }
            if(formik.values.password.length<=4){
                errors.password = "Should be more than 4 characters";
            }
            if(formik.values.password.length>=20){
                errors.password = "Should be less than 20 characters";
            }
            if(formik.values.age<=18){
                errors.age = "Age should be greater than 18"
            }
            if(formik.values.age>=120){
                errors.age = "Age should be less than 120"
            }
            if(formik.values.fullname.length<=5){
                errors.fullname = "Should be more than 5 characters"
            }
            if(formik.values.fullname.length>=20){
                errors.fullname = "Should be less than 20 characters"
            }
            return errors;
        },
    });
    console.log(formik);
    return(
        <form onSubmit={formik.handleSubmit} className="form-group col-lg-4 mx-auto" noValidate>
            
            <input type="email" name="email" className="form-control my-2" value={formik.values.email} placeholder="Enter Email Id" onChange={formik.handleChange}/>
            <div className="text-danger">
                
                {formik.errors.email ? formik.errors.email : null}
            </div>
            <input type="password" name="password" className="form-control my-2" value={formik.values.password} placeholder="Enter Password" onChange={formik.handleChange}/>
            <div className="text-danger">
                {formik.errors.password ? formik.errors.password : null}
            </div>
            <input type="number" name="age" className="form-control my-2" value={formik.values.age} placeholder="Enter Age" onChange={formik.handleChange}/>
            <div className="text-danger">
                {formik.errors.age ? formik.errors.age : null}
            </div>
            <input type="text" name="fullname" className="form-control my-2" value={formik.values.fullname} placeholder="Enter Full Name" onChange={formik.handleChange}/>
            <div className="text-danger">
                {formik.errors.fullname ? formik.errors.fullname : null}
            </div>
            <span>{formik.touched["password"] && formik.errors["password"]}</span>
            <button className="btn btn-primary">Submit</button>

        </form>
        
    );
}
export default Registration;
import React,{useState,useEffect} from "react";
import './Formanil.css';
 

import { useFormik } from "formik";
import * as Yup from "yup";
 


export default function App() {
  
  const [isMouseOver,setMouseOver]= useState(false)
const handleMouseOver=()=>{
  setMouseOver(true)
}
const handleMouseOut=()=>{
  setMouseOver(false)
}
const [email,setEmail]=useState('')
const handleChange=(e)=>{
  setEmail(e.target.value)
}
useEffect(()=>{
  document.title=`${email}`
})
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
 

  return (
    <div className="App">
      <h1>Validation with Formik + Yup</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p>{formik.errors.confirm_password}</p>
          )}
        </div>
        <input type="text" onChange={handleChange} value={email}/>
        <p>{email}</p>
        <div>
          <button type="submit" style={{backgroundColor:isMouseOver?'red':'green'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
        </div>
      </form>
    </div>
  );
}
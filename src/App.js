import React, { useState } from "react";
import {useForm} from "react-hook-form";
import "./App.css";


export default function App() {

    const {register, formState:{errors}, handleSubmit} = useForm()

    const [field, setField] = useState()
    const [submitted, setSubmit] = useState(false)

    const onSubmit = (data) => {
        setField(data)
        setSubmit(true)
    }

    return(
        <div className="form-container">
            <form className="main-form" onSubmit={handleSubmit(onSubmit)}>

                {submitted?<div className="success-msg">Registration succesfull!</div>:null}


                <input
                    id="first-name"
                    placeholder="firstName"
                    className="form-field"
                    type="firstName"
                    {...register('firstName', {required:"First name required succesful"})}
                />

                <span>{errors.firstName?.message}</span>


                <input
                    id="last-name"
                    placeholder="Last Name"
                    className="form-field"
                    type="lastName"
                    {...register('lastName', {required:"last name required succesful"})}
                />

                <span>{errors.lastName?.message}</span>

                <input
                    id="email-name"
                    placeholder="email"
                    className="form-field"
                    type="email"
                    {...register('email', {required:"email  required succesful"})}
                />

                <span>{errors.email?.message}</span>

                <input
                    id="password"
                    placeholder="password"
                    className="form-field"
                    type="password"
                    {...register('password', {required:"password  required succesful",
                        minLength:{value:4, message:"Min length can be more than 4 characters"},
                        maxLength:{value:20, message:"Max length can be less than 20 characters"},
                    })}
                />

                <span>{errors.password?.message}</span>

                <button type="submit">submit</button>
            </form>
        </div>
    )

}
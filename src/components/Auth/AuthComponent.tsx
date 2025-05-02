"use client"
import {useForm} from "react-hook-form";
import styles from "./Auth.module.css"
import {useRouter} from "next/navigation";
type formProps={
    username:string,
    password:any
}

export const AuthComponent =  () => {
    const {register,handleSubmit,watch,formState:{errors,disabled ,isValid}} =useForm<formProps>();
    const router = useRouter();
    const customHandler = (formData:formProps) => {
      localStorage.setItem('user',
          JSON.stringify({username:formData.username,password:formData.password}))
        router.push('/movies/1')
    }
    return (
        <div className={styles.authWrapper}>
        <form className={styles.authForm} onSubmit={handleSubmit(customHandler)}>
            <p>Login</p>
            <input type={'text'} {...register('username')} required={true}/>
            <input type={"password"} {...register('password')} required={true}/>
            <button className={styles.authButton} disabled={!isValid} >submit</button>
        </form>
        </div>
    );
};
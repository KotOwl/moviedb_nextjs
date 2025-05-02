"use client"

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import styles from './HederForm.module.css'

type formProps = {
    filmName: string
}

export const HeaderFormComponent = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<formProps>();
    const router = useRouter();
    const customHandler = (formData: formProps) => {
        router.push('/movies/1?filmName=' + formData.filmName)
    }
    return (
        <form className={styles.headerForm} onSubmit={handleSubmit(customHandler)}>
            <input className={styles.headerInput} type="text" {...register('filmName')}/>
            <button className={styles.headerFormButton}>&#128269;</button>


        </form>
    );
};
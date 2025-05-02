"use client"
import styles from "@/app/Header.module.css";
import Image from "next/image";

import Link from "next/link";
import icon from "@/app/(public)/img/gwenLogo.jpg"
import {jsonParseTyping} from "@/helpers/jsonParseTyping";
import {useEffect, useState} from "react";

export const HeaderUserComponent = () => {
    const [user, setUser] = useState<{ username: string, password: string }>();
    useEffect(() => {
         setUser(jsonParseTyping<{ username: string, password: string }>(localStorage.getItem('user')))
    }, []);

    return (

        <div className={styles.rigthHeaderComponent}>
            {user ? <div className={styles.authUser}><Image className={styles.icon} src={icon} alt={'userIcon'}/><p>{user.username}</p></div> :
                <ul className={styles.login}>
                    <Link href={'/auth'}>
                        <li>Sing in</li>
                    </Link>
                    <Link href={'/auth'}>
                        <li>Login</li>
                    </Link>
                </ul>}
        </div>
    );
};
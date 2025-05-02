import {HeaderFormComponent} from "@/components/HeaderForm/HeaderFormComponent";
import styles from './Header.module.css'
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/(public)/img/headerLogo.png'
import {jsonParseTyping} from "@/helpers/jsonParseTyping";
import {HeaderUserComponent} from "@/components/HeaderUserComponent";


export const Header = () => {


    return (
        <header className={styles.header}>
            <div className={styles.leftHeaderComponent}>
            <Link href={'/'}>
                <Image className={styles.logo} src={logo} alt=""
                width={80}
                       height={80}
                />

            </Link>
                <HeaderFormComponent/>
            <ul className={styles.info}>
                <li>About us</li>
                <li>Home</li>
                <li>Favourite</li>
                <li>Info</li>
            </ul>
            </div>

            <HeaderUserComponent/>
        </header>
    );
};
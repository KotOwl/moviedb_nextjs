import styles from './Footer.module.css'
import logo from '@/app/(public)/img/headerLogo.png'
import Image from "next/image";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_left}>
                    <Image src={logo} alt="Logo" className={styles.logo}/>
                    <p>© 2025 MovieWorld. All rights reserved.</p>
                </div>

                <div className={styles.footer_links}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy</a>
                </div>

                <div className={styles.footer_social}>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};
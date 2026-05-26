import styles from "./Footer.module.css";

const Footer = () => {
    console.log("Footer : ", styles);
    return <footer className={styles.card}>Footer</footer>;
};

export default Footer;
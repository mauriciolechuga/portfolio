import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile-pic-mlechuga.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import CV from "../../assets/mauricio-lechuga-project-manager.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Mauricio Lechuga"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Mauricio Lechuga</h1>
        <h2>Project Manager / Junior Developer</h2>
        <span>
          <a
            href="https://instagram.com/mlechuga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/mauriciolechuga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a
            href="https://linkedin.com/mlechuga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
        </span>
        <p className={styles.description}>
          I bridge marketing, technology, and project management to help teams
          move smarter and achieve their goals.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Agile" />
        <SkillList src={checkMarkIcon} skill="Project Planning" />
        <SkillList src={checkMarkIcon} skill="Stakeholder Communication" />
        <SkillList src={checkMarkIcon} skill="Risk Management" />
        <SkillList src={checkMarkIcon} skill="Requirements Gathering" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML, CSS, JavaScript" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="SQL / Data Querying" />
        <SkillList src={checkMarkIcon} skill="Google Looker Studio" />
        <SkillList src={checkMarkIcon} skill="Basic API Integration" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Digital Strategy" />
        <SkillList src={checkMarkIcon} skill="Content Planning" />
        <SkillList src={checkMarkIcon} skill="CRM Tools" />
        <SkillList src={checkMarkIcon} skill="Performance Reporting" />
        <SkillList src={checkMarkIcon} skill="Cross-Channel Communication" />
      </div>
    </section>
  );
}

export default Skills;

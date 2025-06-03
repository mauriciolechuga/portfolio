function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="check icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

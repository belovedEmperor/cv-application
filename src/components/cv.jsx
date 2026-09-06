import "../styles/styles.css";

export default function Cv({
  values: {
    name,
    email,
    tel,
    edname,
    major,
    edfrom,
    edto,
    exname,
    title,
    exfrom,
    exto,
    responsibilities,
  },
}) {
  return (
    <div className="cv">
      <h1>{name}</h1>
      <h3>
        {email} - {tel}
      </h3>
      <h2>Education</h2>
      <h3>
        <span>
          {edname} | {major}
        </span>
        <span>
          {edfrom}-{edto}
        </span>
      </h3>
      <h2>Experience</h2>
      <h3>
        <span>
          {exname} | {title}
        </span>
        <span>
          {exfrom}-{exto}
        </span>
      </h3>
      <p className="responsibilities">{responsibilities}</p>
    </div>
  );
}

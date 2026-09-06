export default function Form({
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
  onChange,
}) {
  let handleSubmit = (event) => {
    event.preventDefault();
    document
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = true));
  };
  let handleEdit = (event) => {
    event.preventDefault();
    document
      .querySelectorAll("input")
      .forEach((input) => (input.disabled = false));
  };

  return (
    <form>
      <fieldset>
        <legend>Personal Information</legend>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <label htmlFor="tel">Phone Number:</label>
        <input type="tel" id="tel" name="tel" value={tel} onChange={onChange} />
      </fieldset>

      <hr />

      <fieldset>
        <legend>Education</legend>
        <label htmlFor="edname">School Name:</label>
        <input
          type="text"
          id="edname"
          name="edname"
          value={edname}
          onChange={onChange}
        />
        <label htmlFor="major">Major:</label>
        <input
          type="text"
          id="major"
          name="major"
          value={major}
          onChange={onChange}
        />
        <label htmlFor="edfrom">From:</label>
        <input
          type="date"
          id="edfrom"
          name="edfrom"
          value={edfrom}
          onChange={onChange}
        />
        <label htmlFor="edto">To:</label>
        <input
          type="date"
          id="edto"
          name="edto"
          value={edto}
          onChange={onChange}
        />
      </fieldset>

      <hr />

      <fieldset>
        <legend>Education</legend>
        <label htmlFor="exname">Company Name:</label>
        <input
          type="text"
          id="exname"
          name="exname"
          value={exname}
          onChange={onChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <label htmlFor="exfrom">From:</label>
        <input
          type="date"
          id="exfrom"
          name="exfrom"
          value={exfrom}
          onChange={onChange}
        />
        <label htmlFor="exto">To:</label>
        <input
          type="date"
          id="exto"
          name="exto"
          value={exto}
          onChange={onChange}
        />
        <br />
        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          cols="30"
          rows="10"
          value={responsibilities}
          onChange={onChange}
        ></textarea>
      </fieldset>

      <input type="submit" value="Submit" onClick={handleSubmit} />
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
    </form>
  );
}

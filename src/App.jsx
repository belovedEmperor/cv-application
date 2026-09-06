import Form from "./components/form.jsx";
import Cv from "./components/cv.jsx";
import "./styles/styles.css";
import { useState } from "react";

function App() {
  let [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
    edname: "",
    major: "",
    edfrom: "",
    edto: "",
    exname: "",
    title: "",
    exfrom: "",
    exto: "",
    responsibilities: "",
  });

  let onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <Form values={values} onChange={onChange} />
      <Cv values={values} />
    </div>
  );
}

export default App;

import Form from "react-bootstrap/Form";

function InputMolecules(props) {
  return (
    <>
      {/* {props.label != null ? (
        <label htmlFor={props.name}>{props.label}</label>
      ) : null} */}
      {props.as != null ? (
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          className={`${props.className}`}
          value={props.value}
          name={props.name != null ? props.name : null}
          id={props.id != null ? props.id : null}
          rows={props.rows != null ? props.rows : null}
          as={props.as}
          onChange={props.onchange != null ? props.onchange : null}
        />
      ) : (
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          className={`${props.className}`}
          value={props.value}
          name={props.name != null ? props.name : null}
          id={props.id != null ? props.id : null}
          onChange={props.onchange != null ? props.onchange : null}
        />
      )}
    </>
  );
}

export default InputMolecules;

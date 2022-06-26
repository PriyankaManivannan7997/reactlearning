function InputField(props) {
  return (
    <div className="form-group mt-5">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control mt-3"
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.changeValue(e);
        }}
      />
    </div>
  );
}

export default InputField;

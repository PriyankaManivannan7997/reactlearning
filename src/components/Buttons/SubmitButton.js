function SubmitButton(props) {
  return (
    <button className="btn btn-primary mt-5" type={props.type}>
      {props.buttonText}
    </button>
  );
}

export default SubmitButton;

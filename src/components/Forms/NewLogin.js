import Logo from "../Logo/Logo";
import InputField from "../InputFields/InputField";
import SubmitButton from "../Buttons/SubmitButton";
import { useState } from "react";

function NewLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getData(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12">
          <div className="mt-5 text-center">
            <Logo />
          </div>
          <div className="row">
            <div className="offset-3 col-6">
              <form onSubmit={getData}>
                <InputField
                  type={"email"}
                  id={"email-input"}
                  label={"Email"}
                  placeholder={"Enter Email"}
                  value={email}
                  changeValue={(e) => setEmail(e.target.value)}
                />
                <InputField
                  type={"password"}
                  id={"password-input"}
                  label={"Password"}
                  placeholder={"Enter Password"}
                  changeValue={(e) => setPassword(e.target.value)}
                />
                <div className="text-center">
                  <SubmitButton type={"submit"} buttonText={"Login"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;

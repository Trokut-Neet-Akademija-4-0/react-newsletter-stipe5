import logoMobile from './assets/illustration-sign-up-mobile.svg';
import './Newsletter.css'
import { useEffect, useState } from 'react'
function Newsletter(){

  const initialValidation = {
    name: 0,
    email: 0
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [validationName, setValidationName] = useState(initialValidation.name);
  const [validationEmail, setValidationEmail] = useState(initialValidation.email);
  const [form, setForm] = useState(true)
  const [validationMessageEmail, setValidationMessageEmail] = useState(null)
  const [validationMessageName, setValidationMessageName] = useState(null)
  const [emailSent, setEmailSent] = useState(false)
  const [showNameField, setShowNameField] = useState(false);
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setValidationEmail( 0)
  }

  function handleNameChange(e){
    setName(e.target.value);
  }
  function backToForm() {
    setEmail('');
    setValidationEmail(initialValidation.email);
    setValidationName(initialValidation.name);
    setForm(true);
  }

  function validateEmail(){
    console.log("validateEmail fired")
    const regex =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if (email === '') {
      setValidationEmail(1)
    } else if (regex.test(email) || email === 'test') {
      // setForm(false)
    } else {
      setValidationEmail(2)
    }
    console.log("validation validateEmail", validationEmail)
  }
  function validateName(){
    console.log("validateName fired")
    if (name === '') {
      setValidationName(1)
    } else {
      setValidationName(0)
    }
    console.log("validation validateEmail", validationName)
  }
  function handleSubmission() {
    validateEmail();
    validateName();
  }

  useEffect(() => {
    const _validationMessageEmail =
      validationEmail === 0
        ? ''
        : validationEmail === 1
          ? 'E-Mail ist obligatorisch'
          : validationEmail === 2
            ? 'E-Mail Adresse ungültig'
            : null;
    setValidationMessageEmail(_validationMessageEmail);

    const _validationMessageName =
      validationName === 0
        ? ''
        : validationName === 1
          ? 'Name ist obligatorisch'
          : validationName === 2
            ? 'Name ist ungültig'
            : null;
    setValidationMessageName(_validationMessageName);

  }, [validationName, validationEmail]);

  useEffect(() => {
    console.log("Email value", email)
    email !== '' && setShowNameField(true)
  }, [email]);


  // END OF BUSINESS LOGIC
  return (
    <div>
      {form ? (
        <div className="box-main">
          <img
            className="ilustration mobile"
            src={logoMobile}
            alt="icon list"
          ></img>
          <div className="box-text">
            <h1>Stay update!</h1>
            <h2>
              Join 60,000+ product managers receiving monthly updates on:
            </h2>

            <div>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>
              Product discovery and building what matters
            </div>
            <div>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>
              Measuring to ensure updates are a success
            </div>
            <div>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>And
              much more!
            </div>
            <form>
              <div className="labels">
                <label>E-Mail Adresse</label>
                <label className="validations">{validationMessageEmail}</label>
              </div>
              <input
                id="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                type="email"
                placeholder="email@company.com"
              ></input>
              {showNameField && (
                <>
                <div className="labels">
                  <label>Name</label>
                  <label className="validations">{validationMessageName}</label>
                </div>
                <input
                id="name"
                value={name}
                onChange={(e) => handleNameChange(e)}
                type="text"
                placeholder="Max Müller"
              ></input>
              </>)}

              <a onClick={(e) => handleSubmission(e)} className="btn">
                Zum Newsletter anmelden
              </a>
            </form>
          </div>
          <img
            className="ilustration desktop"
            src="src/assets/illustration-sign-up-desktop.svg"
            alt="icon list"
          ></img>
        </div>
      ) : (
        <div className="box-message">
          <img
            style={{textAlign: 'center'}}
            className="icon-success"
            src="src/assets/icon-success.svg"
            alt="icon success"
          ></img>
          <h1>Danke für die Anmeldung!</h1>
          <p className="msg">
            A confirmation email has been sent to{' '}
            <span>{email}</span>. Please open it and click the
            button inside to confirm your subscription
          </p>
          <div onClick={() => backToForm()} className="btn">
            Dismiss message
          </div>
        </div>
      )}
    </div>
  );
}
export { Newsletter }

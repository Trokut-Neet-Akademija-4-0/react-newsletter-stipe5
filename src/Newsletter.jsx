import logoMobile from './assets/illustration-sign-up-mobile.svg';
import './Newsletter.css'
import { useEffect, useState } from 'react';

function Newsletter() {

const initalEmail = "";
const initalValid = 0;
const initalForm = true;

const [email, setEmail] = useState(initalEmail);
const [valid, setValid] = useState(initalValid);
const [form, setForm] = useState(initalForm);

 function handleChange(e) {
    setEmail(e.target.value);
    setValid(0);
  }
 function backToForm() {
    setEmail(initalEmail);
    setValid(initalValid);
    setForm(initalForm);
  }
 function checkEmail() {
    const regex =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if (email == '') {
      setValid(1);
    } else if (regex.test(email) || email === 'test') {
      setForm(false);
    } else {
      setValid(2);
    }
  }
    const validation =
        valid == 0
        ? ''
        : valid == 1
        ? 'The field is left empty'
        : valid == 2
        ? 'The email address is invalid'
        : null;

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

            <p>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>
              Product discovery and building what matters
            </p>
            <p>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>
              Measuring to ensure updates are a success
            </p>
            <p>
              <img src="src/assets/icon-list.svg" alt="icon list"></img>And
              much more!
            </p>
            <form>
              <div className="labels">
                <label>email address</label>
                <label className="validations">{validation}</label>
              </div>
              <input
                id="email"
                value={email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="email@company.com"
              ></input>
              <btn onClick={() => checkEmail()} className="btn">
                Subscribe to monthly newsletter
              </btn>
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
            className="icon-success"
            src="src/assets/icon-success.svg"
            alt="icon success"
          ></img>
          <h1>Thanks for subscribing!</h1>
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

export {Newsletter};

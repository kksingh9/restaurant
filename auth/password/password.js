import React, { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/AuthContext";

const ProfileForm = () => {
  const enterInputPassword = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = enterInputPassword.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVxMocJNaZfB1DKpsUzh5czeHrq-PoA6w",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
     //console.log(res);
    })
    // .then((data) => {
    //     console.log(data);
    // })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={enterInputPassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

import { useState } from "react";

const Login = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    username: "test@test.com",
    password: "test@test.com",
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        console.log("User Loged In");
      } else {
        console.log("wrong password");
      }
    } else {
      alert("please check you username or Email");
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Email or username</label>
          <input
            type="text"
            placeholder="email or username"
            onChange={(e) => setUnameOrEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;

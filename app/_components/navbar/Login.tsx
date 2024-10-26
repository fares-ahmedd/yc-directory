import { loginAction } from "@/app/_actions/auth";

function Login() {
  return (
    <form action={loginAction}>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

import { logoutAction } from "@/app/_actions/auth";

function Logout() {
  return (
    <form action={logoutAction}>
      <button>Logout</button>
    </form>
  );
}

export default Logout;

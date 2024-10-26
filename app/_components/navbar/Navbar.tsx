import { auth } from "@/auth";
import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import Logo from "./Logo";

async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href={"/startup/create"}>Create</Link>
              <Logout />
              <Link href={`/user/${session.user.id}`}>{session.user.name}</Link>
            </>
          ) : (
            <Login />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

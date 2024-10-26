import Navbar from "../_components/navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;

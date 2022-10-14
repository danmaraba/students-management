import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <section className="section">
        <Outlet />
        <h1>University of Nairobi</h1>
        <h3 className="description">A world class school committed to scholarly excellence!</h3>
      </section>
    </>
  );
}

export default Home;
import { Link, Outlet } from "react-router-dom";

const GeneralPage = () => {

  return (
    <div>
      <header className="text-2xl font-bold">
        <Link to="/">People</Link>
        <Link to="/planets">Planets</Link>
        <Link to="/starships">Starships</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralPage;

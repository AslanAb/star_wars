import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom'

const GeneralPage = () => {
  return (
    <div className="w-full h-screen box-border">
      <header className="w-screen pl-80 pr-96 bg-zinc-900 height-10">
        <div className="flex h-full justify-between w-full">
          <Link to="/">
            <img
              className="h-full min-w-fit hover:brightness-150"
              src="https://i0.wp.com/artsomnia.hu/wp-content/uploads/2018/05/StarWars-e1527688374198.jpg" alt="" />
          </Link>
          <div className="flex w-2/5 min-w-fit justify-between items-center font-mono text-xl font-bold">
            <Link to="/people" className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-green-600 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">People</Link>
            <Link to="/planets" className="w-1/3 h-11 flex justify-center items-center bg-cyan-600 mx-3 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">Planets</Link>
            <Link to="/starships" className="w-1/3 h-11 flex justify-center items-center bg-pink-700 mx-3 rounded-xl hover:-translate-y-1 hover:scale-110 hover:brightness-200 duration-300">Starships</Link>
          </div>
        </div>
      </header>
      <div className="height-90">
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralPage;

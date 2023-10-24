import { IconPlus } from "@tabler/icons-react";

const Nav = ({handleClickOpenModal}) => {
  return (
    <nav className=" flex justify-between  text-lg p-5">
      <h1 className="text-3xl font-bold">Usuario</h1>
      <button
        onClick={handleClickOpenModal}
        className="flex items-center font-bold rounded-md bg-sky-950 p-2  text-white gap-1 hover:bg-blue-500"
      >
        <IconPlus/> Crear usuario
      </button>
    </nav>
  );
};

export default Nav;

import  { useEffect } from "react";
import { useForm } from "react-hook-form";
import { empty_form } from "../constants/user";
import { IconX } from "@tabler/icons-react";



export const UsersForm = ({
  modal,
  setModal,
  createUser,
  userUpdate,
  updateUser,
  setUsersUpdate,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    userUpdate ? updateUser(data, reset) : createUser(data, reset);
  };

  const handleClickCLoseModal = () => {
    setModal(false);
    reset(empty_form)
    setUsersUpdate(null);
  };

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  return (
    <section
      className={`fixed  bg-black/60 top-0 bottom-0 left-0 right-0 flex
     justify-center items-center transition-[opacity_transform] duration-200
      ${
        modal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
      } `}
    >
      
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-4 rounded-md grid gap-3 w-[min(200%,_330px)] relative font-bold "
      >
        <button
          type="button"
          onClick={handleClickCLoseModal}
        className=" absolute top-1 right-2 "
        >
          <IconX/>
        </button>
        <h2 className="text-center text-xl">
          {userUpdate ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <div className="grid text-lg">
          <label htmlFor="name">Nombre</label>
          <input
            className="outline-none  p-2 border-2 border-slate-300 rounded"
            id="first_name" 
            type="text"
            placeholder="ingrese su nombre"
            {...register("first_name")}
          />
         
        </div>
        <div className="grid text-lg">
          <label htmlFor="last_name">Apellido</label>
          <input
            className="rounded p-2 border-2 border-slate-300 outline-none "
            id= "last_name"
            type="text"
            placeholder="Ingrese su apellido"
            {...register( "last_name")}
          />
        </div>
        <div className="grid text-lg" >
          <label htmlFor="email"> Email</label>
          <input
            className="outline-none p-2 border-2 border-slate-300 rounded"
            id= "email"
            type="text"
            placeholder="Ingrese su email"
            {...register("email")}
          />
        </div>
        <div className="grid text-lg">
          <label htmlFor="password"> Contraseña</label>
          <input
            className="outline-none p-2 border-2 border-slate-300 rounded"
            id="password"
            type="password"
            placeholder="Ingrese contraseña"
            {...register("password")}
          />
        </div>
        <div className="grid text-lg">
          <label htmlFor="birthday">Cumpleaños</label>
          <input
            className="outline-none p-2 border-2 border-slate-300 rounded"
            id="birthday"
            type="date"
            placeholder="Cumpleaños"
            {...register("birthday")}
          />
        </div>

        <button className="bg-sky-950 hover:bg-sky-700   text-white p-2 text-lg">
          {userUpdate ? "Guardar Cambios" : "Crear Usuario"}
        </button>
      </form>
    </section>
  );
};

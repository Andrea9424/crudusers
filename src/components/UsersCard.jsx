import { IconEdit, IconTrash } from "@tabler/icons-react";


 const UsersCard = ({ user, deletUser, handleClickUpdate }) => {
  return (
   
    <section className=" border-2 p-4 grid gap-3 rounded-lg  ">
   
   
      
        <h5 className="flex gap-2 items-center ">
          {user.first_name} {user.last_name}
        </h5>
        <ul className=" grid gap-1 "> 
       <hr />
        <li className="text-[#949393] text-lg ">Correo</li>
        <li className="p-1">Email:{user.email}</li>
        <li className="text-[#949393] ">Cumpleaños</li>
        <li className="p-1">Fecha: {user.birthday}</li>
        <hr />
      </ul>
      
      <div className="flex gap-2 justify-end">  
      <button
        onClick={() => deletUser(user.id)}
        className="bg-red-400 p-1 hover:bg-red-600 text-white justify-self-end rounded-sm"
      >
     <IconTrash/>
      </button>
      <button
        onClick={() => handleClickUpdate(user)}
        className="bg-slate-400 hover:bg-slate-600 p-1 text-white ml-2 justify-self-end rounded-sm"
      >
       <IconEdit/>
      </button>
      </div>
    </section>
  
  );
};
 export default UsersCard
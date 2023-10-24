import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { base_url } from "./constants/user";
import { UsersForm } from "./components/UsersForm";
import { empty_form } from "./constants/user";
import UsersList from "./components/UsersList";
import Nav from "./components/Nav";

function App() {
  const [modal, setModal] = useState(false);
  const [userUpdate, setUserUpdate] = useState(null)
  const [users, setUsers] = useState([]);
  
  const getAllUser = () => {
    axios
      .get(base_url + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };
 
  const handleClickOpenModal = () => {
    setModal(true);
  };
  
  

  const createUser = (data, reset) => {
    axios
      .post(base_url + "users/", data)
      .then(() => {
        setModal()
        reset(empty_form)
        getAllUser();
      })
      .catch((err) => console.log(err));
  };

  const deletUser = (id) => {
    axios
      .delete(base_url + `/users/${id}/`)
      .then(() => getAllUser())
      .catch((err) => console.log(err));
  };

  
  
  const  updateUser = (Update, reset) => {
    axios
    .patch(base_url + `users/${userUpdate.id}/`, Update)
    .then(() => {
    getAllUser()
     setModal()
     reset(empty_form)
     setUserUpdate(null)
    })
  .catch((err)=> console.log(err))
  }
  

  const handleClickUpdate = (user) => {
    setModal(true)
    setUserUpdate(user)
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <main className="min-h-screen ">
     <Nav handleClickOpenModal={handleClickOpenModal} />
      <UsersForm
        modal={modal}
        setModal={setModal}
       createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        setUsersUpdate={setUserUpdate}
      />
    
      <UsersList
        users={users}
        
        deletUser={deletUser}
        handleClickUpdate={handleClickUpdate}
        handleClickOpenModal={handleClickOpenModal}

      />
    </main>
  );
}

export default App;

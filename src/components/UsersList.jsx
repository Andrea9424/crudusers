import UsersCard from "./UsersCard";

const UsersList = ({
  users,
  deletUser,
  handleClickUpdate,
  handleClickOpenModal,
}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_370px)] justify-center max-w-[1000px] mx-auto gap-5 py-10 font-bold  ">
      {users.map((user) => (
        <UsersCard
          key={user.id}
          user={user}
          deletUser={deletUser}
          handleClickUpdate={handleClickUpdate}
          handleClickOpenModal={handleClickOpenModal}
        />
      ))}
    </section>
  );
};

export default UsersList;

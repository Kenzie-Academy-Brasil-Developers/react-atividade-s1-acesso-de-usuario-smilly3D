import "./style.css";

const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return isLoggedIn ? (
    <div className="boxContent">
      <h1>Bem-vindo {user} </h1>
      <button onClick={Logout}>Logout</button>
    </div>
  ) : (
    <div className="boxContent">
      <h1>Você não pode acessar essa página</h1>
      <button onClick={Login}>Login</button>
    </div>
  );
};

export default RestrictedPage;

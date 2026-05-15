import User from "./User";

function App() {
  const userData = {
    name : "John",
    email : "john@gmail.com",
    mobile : "4343323212",
    Gender : "Male",
  }
  return ( 
    <div>
      <h1>Hello World</h1>
      <User 
      // name = {userData.name}
      // email = {userData.email}
      // mobile = {userData.email}
      // Gender = {userData.Gender} 
      {...{...userData, age: 25, email: "john123@gmail.com"}}
      />
    </div>
  );
}
export default App;
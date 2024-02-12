import HeroSection from "./HeroSection";
import AddUserForm from "./users/AddUserForm";
import UsersData from "./users/UsersData";

const App = () => {
  return (
    <main>
      <HeroSection />
      <UsersData />
      <AddUserForm />
    </main>
  );
};

export default App;

import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
import gif from "../assets/gif.mp4";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={false} />

      <main className="grid grid-cols-1 md:grid-cols-3 items-center flex-grow px-6 md:px-10">
        
        <div className="hidden md:block"></div>

        <div className="flex justify-center">
          <SignupForm />
        </div>

        <div className="hidden md:flex justify-start pl-4 pt-60">
          <video 
            className="" 
            src={gif} 
            autoPlay 
            muted 
            loop 
          />
        </div>

      </main>
    </div>
  );
};

export default Signup;
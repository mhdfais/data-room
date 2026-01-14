import SigninForm from '../components/SigninForm'
import gif from "../assets/gif.mp4";
import Header from '../components/Header';
import { useState } from 'react';

const Signin = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FEFCFE]">
      <Header isLoggedIn={false} />

      <main className="grid grid-cols-1 md:grid-cols-3 items-center  px-6 md:px-10">
        
        <div className="hidden md:block"></div>

        <div className="flex justify-center">
          <SigninForm onLoadingChange={setLoading} />
        </div>

        {!loading && (
          <div className="hidden md:flex justify-start pl-4 pt-60">
            <video 
              className="" 
              src={gif} 
              autoPlay 
              muted 
              loop 
            />
          </div>
        )}

      </main>
    </div>
  )
}

export default Signin
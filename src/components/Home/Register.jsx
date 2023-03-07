import RegisterCard from "../Common/RegisterCard";

const Register = ()=>{
    return (
        <div
          id="register"
          className="flex flex-col text-white items-center justify-center gap-y-10 px-5 py-10  mt-10"
        >
          <div class="main text-6xl mb-5">
            <span class="webdev text-left">REGISTER</span>
          </div>
        <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center items-center">
            <RegisterCard/>
            <RegisterCard/>
            <RegisterCard/>
        </div>
          
        </div>
      );
}

export default Register
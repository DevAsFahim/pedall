import { Link, useNavigate } from "react-router-dom";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import { useSignupMutation } from "../redux/features/auth/authApi";
import { toast } from "sonner";
import logo from "../assets/logo.png";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Signing up");
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await signup(userData);
      console.log(res);

      toast.success("Signed up successful", { id: toastId, duration: 2000 });
      navigate(`/login`);
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-3 flex-col gap-6 py-10">
      <img className="max-w-[100px] -mb-1" src={logo} alt="logo" />

      <div className="w-full max-w-[400px] px-7 py-9 rounded-2xl bg-muted-body">
        <div className="flex items-center justify-center gap-5 mb-6">
          <h3 className="text-primary-text font-bold text-3xl">Sign up</h3>
        </div>
        <PForm onSubmit={onSubmit}>
          <PInput type="text" name="name" label="Name" />
          <PInput type="text" name="address" label="Address" />
          <PInput type="email" name="email" label="Email" />
          <PInput type="text" name="password" label="Password" />

          <div className="flex items-center justify-center mb-5 gap-4">
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
          </div>

          <button
            type="submit"
            className="bg-primary w-full text-[20px] font-semibold px-8 py-2 rounded-full text-white gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
          >
            Sign up
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default Signup;

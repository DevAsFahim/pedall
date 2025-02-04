import { Link, useNavigate } from "react-router-dom";
import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { TUser } from "../types/user.type";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import logo from "../assets/logo.png";
import { FieldValues, SubmitHandler } from "react-hook-form";

// type TUserData = {
//   email: string;
//   password: string;
// };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in");
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userData);
      const token = res.data.data.accessToken;
      const user = verifyToken(token) as TUser;

      dispatch(setUser({ user, token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-3 py-10 flex-col gap-6">
      <img className="max-w-[100px] -mb-1" src={logo} alt="logo" />

      <div className="w-full max-w-[400px] px-7 py-9 rounded-2xl bg-muted-body">
        <div className="flex items-center justify-center gap-5 mb-6">
          <h3 className="text-primary-text font-bold text-3xl">Welcome back</h3>
        </div>
        <PForm onSubmit={onSubmit}>
          <PInput type="email" name="email" label="Email" />
          <PInput type="text" name="password" label="Password" />

          <div className="flex items-center justify-center mb-5 gap-4">
            <p>New on this website? </p>
            <Link to="/signup">Sign up</Link>
          </div>

          <button
            type="submit"
            className="bg-primary w-full text-[20px] font-semibold px-8 py-2 rounded-full text-white gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
          >
            Login
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default Login;

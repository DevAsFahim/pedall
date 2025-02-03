import PForm from "../components/form/PForm";
import PInput from "../components/form/PInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

type TUserData = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: TUserData) => {
    console.log(data);
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userData);
      console.log(res);

      dispatch(setUser(userData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="">
        <PForm onSubmit={onSubmit}>
          <PInput type="email" name="email" label="Email" />
          <PInput type="text" name="password" label="Password" />

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

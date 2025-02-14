import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../../components/form/PForm";
import PInput from "../../../components/form/PInput";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing Password");

    try {
        const updatedData = {
            oldPassword: data?.oldPassword,
            newPassword: data?.newPassword
        }
        
      const res = await changePassword(updatedData);
      console.log(res);

      toast.success("Password is changed successful", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-3 flex-col gap-6">
      <div className="w-full max-w-[400px] px-7 py-9 rounded-2x">
        <PForm onSubmit={onSubmit}>
          <PInput type="text" name="oldPassword" label="Old Password" />
          <PInput type="text" name="newPassword" label="New Password" />
          <button
            type="submit"
            className="bg-primary w-full text-[20px] font-semibold px-8 py-2 rounded-full text-white gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
          >
            Change Password
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default ChangePassword;

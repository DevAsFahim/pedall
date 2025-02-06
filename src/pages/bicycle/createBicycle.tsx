import { Link } from "react-router-dom";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { toast } from "sonner";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Input, Form } from "antd";
import PSelect from "../../components/form/PSelect";
import { useAddBicycleMutation } from "../../redux/features/bicycle/bicycleApi";
import { useUploadImageMutation } from "../../redux/api/imgbbApi";

const CreateBicycle = () => {
  const [uploadImage] = useUploadImageMutation();
  const [addBicycle] = useAddBicycleMutation();

  const bicycleType = ["Mountain", "Road", "Hybrid", "BMX", "Electric"];

  const bicycleTypeOptions = bicycleType.map((item) => ({
    value: item,
    label: item,
  }));

  const { TextArea } = Input;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating bicycle");

    const res = await uploadImage(data.image);
    const imageUrl = res.data.data.image.url;

    try {
      const bicycleData = {
        name: data.name,
        brand: data.brand,
        image: imageUrl,
        model: data.model,
        price: Number(data.price),
        type: data.type,
        description: data.description,
        quantity: Number(data.quantity),
      };
      const res = await addBicycle(bicycleData);
      console.log(res);

      toast.success("Bicycle is created successful", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-3 flex-col gap-6 py-10">
      <div className="w-full max-w-[400px] px-7 py-9 rounded-2x">
        <PForm onSubmit={onSubmit}>
          <PInput type="text" name="name" label="Product Name" />
          <PInput type="text" name="brand" label="Product Brand" />
          <PInput type="text" name="model" label="Product Model" />

          <div className="flex gap-5">
            <div className="flex-1">
              <PInput type="text" name="price" label="Product Price" />
            </div>
            <div className="flex-1">
              <PInput type="text" name="quantity" label="Quantity" />
            </div>
          </div>
          <PSelect
            options={bicycleTypeOptions}
            name="type"
            label="Product Type"
          />

          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Product Image">
                <Input
                  type="file"
                  value={value?.fileName}
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </Form.Item>
            )}
          />

          <Controller
            name="description"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Product Description">
                <TextArea
                  value={value}
                  {...field}
                  onChange={(e) => onChange(e.target.value)}
                />
              </Form.Item>
            )}
          />

          <div className="flex items-center justify-center mb-5 gap-4">
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
          </div>

          <button
            type="submit"
            className="bg-primary w-full text-[20px] font-semibold px-8 py-2 rounded-full text-white gap-4 hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer"
          >
            Add Product
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default CreateBicycle;

import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label?: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  placeholder?: string;
};

const PSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
  placeholder,
}: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            size="large"
            style={{ width: "100%" }}
            {...field}
            options={options}
            disabled={disabled}
            placeholder={placeholder}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PSelect;

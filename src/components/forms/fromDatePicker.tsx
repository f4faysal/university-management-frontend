import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "middle" | "small";
};

const FromDatePicker = ({ onChange, name, label, size }: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();
  const handelOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            style={{ width: "100%" }}
            size={size}
            value={dayjs(field.value)}
            onChange={handelOnChange}
          />
        )}
      />
    </div>
  );
};

export default FromDatePicker;

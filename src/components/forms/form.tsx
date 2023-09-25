
import { ReactElement } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormContextProps = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactElement | ReactElement;
  submitHandler: SubmitHandler<any>;
} & FormContextProps;

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  const formConfig: FormContextProps = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    {
      reset;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;

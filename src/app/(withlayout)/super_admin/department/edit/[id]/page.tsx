"use client";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import AcationBar from "@/components/ui/acationBar";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import {
  useDeleteDepartmentMutation,
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentsApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

type IDPorps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDPorps) => {
  const { role } = getUserInfo() as any;

  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating department...");
    try {
      await updateDepartment({ id, body: values }).unwrap();
      message.success("Department updated successfully");
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const dafaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          { lable: "Department", path: `/${role}/department` },
          { lable: "Edit Department" },
        ]}
      />

      <AcationBar title="Update Department"> </AcationBar>

      <Form submitHandler={onSubmit} defaultValues={dafaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="title"
              label="Title"
              placeholder="Department Title"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;

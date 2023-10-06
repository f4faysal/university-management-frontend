"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentsApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const { role } = getUserInfo() as any;

  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding department...");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          {
            lable: "Manage Department",
            path: `/${role}/department`,
          },
          { lable: "Create Department" },
        ]}
      />

      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
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

export default CreateDepartmentPage;

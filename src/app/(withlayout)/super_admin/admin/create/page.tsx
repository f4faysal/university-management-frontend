"use client";

import FormTextArea from "@/components/forms/FormTextArea";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import FormSelectField from "@/components/forms/formSelectField";
import FromDatePicker from "@/components/forms/fromDatePicker";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import UploadImage from "@/components/ui/uploadImage";
import { bloodGropuOptions, genderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentsApi";
import { adminSchema } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;

  const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });

  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();

  //@ts-ignore
  const departments: IDepartment[] = data?.departments;

  const departmentOptions =
    departments &&
    departments?.map((department) => {
      return {
        label: department?.title,
        value: department?.id,
      };
    });

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      console.log(formData);
      await addAdminWithFormData(formData);
      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          {
            lable: "Admin",
            path: `/${role}/admin`,
          },
          { lable: "Create Admin" },
        ]}
      />

      <h1>Create Admin</h1>

      <div>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Admin Information
              </p>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.name.firstName"
                    size="large"
                    label="First Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.name.middleName"
                    size="large"
                    label="Middle Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.name.lastName"
                    size="large"
                    label="Last Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="password"
                    name="password"
                    size="large"
                    label="Password"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="admin.gender"
                    options={genderOptions}
                    label="Gender"
                    placeholder="Select"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="admin.managementDepartment"
                    options={departmentOptions}
                    label="Department"
                    placeholder="Select"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <UploadImage name="file" />
                </Col>
              </Row>
            </div>

            {/* basic info */}
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Basic Information
              </p>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="email"
                    name="admin.email"
                    size="large"
                    label="Email address"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.contactNo"
                    size="large"
                    label="Contact No."
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.emergencyContactNo"
                    size="large"
                    label="Emergency Contact No."
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FromDatePicker
                    name="admin.dateOfBirth"
                    label="Date of birth"
                    size="large"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="admin.bloodGroup"
                    options={bloodGropuOptions}
                    label="Blood group"
                    placeholder="Select"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="admin.designation"
                    size="large"
                    label="Designation"
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormTextArea
                    name="admin.presentAddress"
                    label="Present address"
                    rows={4}
                  />
                </Col>

                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormTextArea
                    name="admin.permanentAddress"
                    label="Permanent address"
                    rows={4}
                  />
                </Col>
              </Row>
            </div>
            <Button htmlType="submit" type="primary">
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;

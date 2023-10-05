"use client";

import FormTextArea from "@/components/forms/FormTextArea";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import FormSelectField from "@/components/forms/formSelectField";
import FromDatePicker from "@/components/forms/fromDatePicker";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import UploadImage from "@/components/ui/uploadImage";
import {
  bloodGropuOptions,
  genderOptions,
  managementDepartmentOptions,
} from "@/constants/global";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
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
        <Form submitHandler={onSubmit}>
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid #d9d9d9",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px 20px",
              }}
            >
              Admin Infromation
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
                  label="Frist Name"
                  size="large"
                  name="admin.name.firstName"
                  placeholder="Enter frist name"
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
                  label="Middle Name"
                  size="large"
                  name="admin.name.middleName"
                  placeholder="Enter middle name"
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
                  label="Last Name"
                  size="large"
                  name="admin.name.lastName"
                  placeholder="Enter last name"
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
                  label="Password"
                  size="large"
                  name="admin.password"
                  placeholder="Enter password"
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
                  label="Gender"
                  placeholder="Select"
                  size="large"
                  name="admin.gender"
                  options={genderOptions}
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
                  label="Management Department"
                  placeholder="Select"
                  size="large"
                  name="admin.managementDepartment"
                  options={managementDepartmentOptions}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          {/* -------------------Basic Infromation----------------------- */}
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid #d9d9d9",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px 20px",
              }}
            >
              Basic Infromation
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
                  label="Email Address"
                  size="large"
                  name="admin.email"
                  placeholder="exmpole@email.com"
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
                  type="phone"
                  label="Contact Number"
                  size="large"
                  name="admin.contactNo"
                  placeholder="Enter contact number"
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
                  type=""
                  label="Emergency Contact Number"
                  size="large"
                  name="admin.emergencyContactNo"
                  placeholder="Enter emergency contact number "
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
                  size="large"
                  name="admin.dateOfBirth"
                  label="Date of birth"
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
                  label="Blood Group"
                  placeholder="Select"
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGropuOptions}
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
                  label="Designation"
                  size="large"
                  name="admin.designation"
                  placeholder="Enter designation"
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

          <Button type="primary" htmlType="submit">
            {" "}
            Submit{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;

"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import loginImage from "../../assets/Fingerprint-cuate.png";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          Frist login your accunt
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <>
              <div>
                <FormInput
                  name="id"
                  type="text"
                  size="large"
                  placeholder="User ID"
                  label="User ID"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;

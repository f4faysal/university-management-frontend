"use client";
import { Layout } from "antd";

import UMBreadcrumb from "./umBreadcrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <UMBreadcrumb
        items={[
          {
            lable: `${base}`,
            path: `${base}`,
          },
          {
            lable: `student`,
            path: `${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;

"use client";

import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateDepartmentPage = () => {
  const { role } = getUserInfo() as any;

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

      <h1>Create Department list</h1>
    </div>
  );
};

export default CreateDepartmentPage;

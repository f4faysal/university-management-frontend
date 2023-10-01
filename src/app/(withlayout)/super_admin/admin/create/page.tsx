"use client";

import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;
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
    </div>
  );
};

export default CreateAdminPage;

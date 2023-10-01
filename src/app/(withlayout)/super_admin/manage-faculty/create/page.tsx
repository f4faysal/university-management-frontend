"use client";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateFacultyPage = () => {
  const { role } = getUserInfo() as any;
  console.log(role);
  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          {
            lable: "Manage Faculty",
            path: `/${role}/manage-faculty`,
          },
          { lable: "Create Faculty" },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
};

export default CreateFacultyPage;

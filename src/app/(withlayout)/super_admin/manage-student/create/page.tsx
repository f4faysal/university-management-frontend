"use client";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadcrumb
        items={[
          {
            lable: `${role}`,
            path: `/${role}`,
          },
          {
            lable: "Manage Student",
            path: `/${role}/manage-student`,
          },
          { lable: "Create Student" },
        ]}
      />

      <h1>Create Student</h1>
    </div>
  );
};

export default CreateStudentPage;

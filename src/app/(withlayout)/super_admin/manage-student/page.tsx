"use client";

import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudent = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          { lable: "Manage Student" },
        ]}
      />

      <h1>Manage Student</h1>
      <Link href="/super_admin/manage-student/create">
        <Button>Create Student</Button>
      </Link>
    </div>
  );
};

export default ManageStudent;

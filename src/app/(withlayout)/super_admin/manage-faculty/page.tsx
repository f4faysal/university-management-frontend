"use client";

import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
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
            lable: "Manage Faculty",
          },
        ]}
      />
      <h1>Manage Faculty</h1>

      <Link href="/super_admin/manage-faculty/create">
        <Button>Create Faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFaculty;

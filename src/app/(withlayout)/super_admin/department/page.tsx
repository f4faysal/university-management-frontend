"use client";

import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const Department = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          {
            lable: "Manage Department",
          },
        ]}
      />

      <h1>Department List</h1>

      <Link href="/super_admin/department/create">
        <Button>Create</Button>
      </Link>
    </div>
  );
};

export default Department;

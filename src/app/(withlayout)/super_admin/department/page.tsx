"use client";

import UMTable from "@/components/ui/UMTable";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const Department = () => {
  const { role } = getUserInfo() as any;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      //   sorter: true,
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div>
            <Button type="primary">Edit</Button>
            <Button onClick={() => console.log(data)} danger>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const tableData = [
    {
      key: 1,
      name: "faysal",
      age: 25,
    },
    {
      key: 2,
      name: "sumon",
      age: 15,
    },
    {
      key: 3,
      name: "soniya",
      age: 5,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, "page");
    console.log(pageSize, "pageSize");
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    // console.log(pagination, "pagination");
    // console.log(filters, "filters");
    const { field, order } = sorter;
    console.log(field, "field" + " " + order, "order");
  };

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

      <UMTable
        loading={false}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Department;

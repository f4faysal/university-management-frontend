"use client";

import UMTable from "@/components/ui/UMTable";
import AcationBar from "@/components/ui/acationBar";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { useAdminsQuery } from "@/redux/api/adminApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { IDepartment } from "@/types";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const Admin = () => {
  const { role } = getUserInfo() as any;
  // const [deleteDepartment] = useDeleteDepartmentMutation();

  const query: Record<string, any> = {};

  const [sige, setSige] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["page"] = page;
  query["limit"] = sige;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
    console.log(debouncedTerm);
  }

  // const { data, isLoading } = useDepartmentsQuery({ ...query });
  const { data, isLoading } = useAdminsQuery({ ...query });

  const admins = data?.admins;
  console.log(data);
  console.log(admins);
  const meta = data?.meta;

  // const deleteHandler = async (id: { id: string }) => {
  //   message.loading("Deleting department...");
  //   try {
  //     await deleteDepartment(id).unwrap();
  //     message.success("Department deleted successfully");
  //   } catch (err: any) {
  //     message.error(err.message);
  //   }
  // };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: true,
    },
    {
      titlr: "Name",
      dataIndex: "name",
      render: function (data: any) {
        const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Department",
      dataIndex: "managementDepartment",
      render: function (data: IDepartment) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },

    {
      title: "Action",
      render: function (data: any) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "150px",
            }}
          >
            <Link href={`/super_admin/department/edit/${data._id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} danger>
              <DeleteOutlined />
            </Button>
            <Button onClick={() => console.log(data)}>
              <EyeOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSige(pageSize);
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadcrumb
        items={[
          { lable: `${role}`, path: `/${role}` },
          {
            lable: "Admin",
          },
        ]}
      />

      <AcationBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button>Create Admin</Button>
        </Link>
      </AcationBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={admins}
        pageSize={sige}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Admin;

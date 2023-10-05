"use client";

import StepperForm from "@/components/stepperForm/stepperForm";
import GuardianInfo from "@/components/studentForms/guardianInfo";
import LocalGuardianInfo from "@/components/studentForms/localGuardianInfo";
import StudentBasicInfo from "@/components/studentForms/studentBasicInfo";
import StudentInfo from "@/components/studentForms/studentInfo";
import UMBreadcrumb from "@/components/ui/umBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
      <StepperForm
        steps={steps}
        submitHandler={(value) => handleStudentSubmit(value)}
      />
    </div>
  );
};

export default CreateStudentPage;

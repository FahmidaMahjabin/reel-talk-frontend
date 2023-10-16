import type { MenuProps } from "antd";
import { User_Role } from "@/constants/role";
import {
  UserOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  TableOutlined,
  ThunderboltOutlined,
  ScheduleOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];
import React from "react";
import Link from "next/link";

export default function SidebarItems(role: string) {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "profile",
      key: "1",
      icon: <ProfileOutlined></ProfileOutlined>,
      children: [
        {
          label: <Link href={`/${role}`}>account setting</Link>,
          key: "2",
        },
        {
          label: <Link href={`/${role}/change_password`}>account setting</Link>,
          key: "3",
        },
      ],
    },
  ];

  const sidebarForCommonAdmin: MenuProps["items"] = [
    {
      label: <Link href={`${role}/manage_student`}>manage student</Link>,
      key: `${role}/manage_student`,
      icon: <UserOutlined></UserOutlined>,
    },
    {
      label: <Link href={`${role}/manage_faculty`}>manage faculty</Link>,
      key: `${role}/manage_faculty`,
      icon: <UserOutlined></UserOutlined>,
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...sidebarForCommonAdmin,
    {
      label: "Manage academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];
  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...sidebarForCommonAdmin,
    {
      label: <Link href={`/${role}/manage_admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/manage_user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
    // {
    //   label: "Manage permission",
    //   key: "manage-permission",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/permission`}>View permissions</Link>,
    //       key: `/${role}/permission`,
    //     },
    //   ],
    // },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
  ];

  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/courses/schedule`,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/registration`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/academic-report`,
    },
  ];

  if (role === User_Role.STUDENT) {
    return studentSidebarItems;
  } else if (role === User_Role.ADMIN) {
    return adminSidebarItems;
  } else if (role === User_Role.FACULTY) {
    return facultySidebarItems;
  } else if (role === User_Role.SUPER_ADMIN) {
    return superAdminSidebarItems;
  } else {
    return defaultSidebarItems;
  }
}

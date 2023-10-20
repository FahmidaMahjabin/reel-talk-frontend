import { IOption } from "@/components/form/FormSelectInput";
import StudentInfo from "@/components/form/sudentForm/StudentInfo";
import StudentBasiInfo from "@/components/form/sudentForm/basiInfo";

export const gender: IOption[] = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];
export const steps = [
  {
    title: "Student Information",
    content: <StudentInfo></StudentInfo>,
  },
  {
    title: "Basic Information",
    content: <StudentBasiInfo></StudentBasiInfo>,
  },
  {
    title: "Guirdian Information",
    content: "Guirdian Information",
  },
];
export const acDepartmentOptions = [
  {
    label: "CSE",
    value: "cse",
  },
  {
    label: "CE",
    value: "ce",
  },
];
export const acSemesterOptions = [
  {
    label: "FALL",
    value: "fall",
  },
  {
    label: "SUMMER",
    value: "summer",
  },
];
export const facultyOptions = [
  {
    label: "EEE",
    value: "eee",
  },
];

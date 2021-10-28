import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  // {
  //   title: "HOME",
  //   path: "/",
  //   icon: <AiIcons.AiFillHome />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: <BiIcons.BiLogIn />,
  //   cName: "nav-text",
  // },
  {
    title: "LOGIN",
    path: "/Login",
    icon: <BiIcons.BiLogIn />,
    cName: "nav-text",
  },
  {
    title: "REGISTER",
    path: "/register",
    icon: <RiIcons.RiRegisteredFill />,
    cName: "nav-text",
  },
  {
    title: "Instructions",
    // path: "",
    icon: <IoIcons.IoIosBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
      {
        title: "PP",
        path: "/PP",
    icon: <IoIcons.IoIosBook />,
      },
      {
        title: "Instr",
        path: "/Instr",
        icon: <AiIcons.AiFillFileAdd />,
      },
      {
        title: "Instr1",
        path: "/Instr1",
        icon: <AiIcons.AiFillFileAdd />,
      },
    ],
  },
  {
    title: "Aptitude",
    path: "/Aptinew",
    icon: <IoIcons.IoIosBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Reasoning",
    path: "/Reasoning",
    icon:<FaIcons.FaPen />,
  },
  {
    title: "Java",
    path: "/Java",
    icon: <IoIcons.IoIosBook />,
  },
  // {
  //   title: "Technical",
  //   path: "/Technical",
  //   icon: <IoIcons.IoIosBook />,
  // },
  {
    title: "Aptinew",
    path: "/Aptinew",
    icon: <AiIcons.AiFillFileAdd />,
  },
  {
    title: "ADD",
    // path: "",
    icon: <IoIcons.IoIosBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    cName: "nav-text",
    subNav: [
      {
        title: "ADD SECTIONS",
        // path: "/",
        icon: <AiIcons.AiFillFileAdd />,
      },
    ],
  },
];


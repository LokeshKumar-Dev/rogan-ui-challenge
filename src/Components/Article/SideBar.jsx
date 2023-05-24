import {
  FileOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
import { useState } from "react";
import { Avatar, Modal, Button, Input } from "antd";
import { Outlet, Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Menus = [
    { title: "Articles", src: <FileOutlined />, to: "/articles" },
    {
      title: "Settings",
      src: <SettingOutlined />,
      onClick: () => setIsModalVisible(true),
    },
    { title: "Profile", src: <UserOutlined />, gap: true, to: "/profile" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <RightOutlined
          className={`absolute cursor-pointer -right-3 top-9 w-7 text-white border-dark-purple
           border-2 rounded-full ${!open ? "rotate-[0]" : "rotate-180"}`}
          // style={{ transform: "rotate(180deg)" }}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center h-8">
          <LeftOutlined
            className={`text-white cursor-pointer duration-500 
            ${!open ? "rotate-180" : "rotate-[360]"}`}
            onClick={() => setOpen(!open)}
          />
          {/* <Avatar size="large" icon={<UserOutlined />} /> */}
          <h1
            className={`text-white  origin-left font-medium text-xl mb-1 w-10/12 h-8 truncate`}
            style={{ display: !open && "none" }}
          >
            Rogan UI Challenge
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to || window.location.pathname}
              key={index}
              className={`
                flex items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} 
                ${window.location.pathname === Menu.to && "bg-light-white"}
                `}
              // ${window.location.pathname === Menu.to && "bg-light-white"}
              // ${activeLink === Menu.title && "bg-light-white"}
              onClick={() => {
                setActiveLink(Menu.title);
                Menu.onClick && Menu.onClick();
              }}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <Modal
        title="Set User Name"
        visible={isModalVisible}
        okText="Submit"
        okButtonProps={{ className: "bg-blue-500" }}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Input placeholder="Enter User name" />
      </Modal>
    </div>
  );
};
export default SideBar;

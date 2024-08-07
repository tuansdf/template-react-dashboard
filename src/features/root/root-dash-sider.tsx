import {
  AreaChartOutlined,
  BookOutlined,
  BorderlessTableOutlined,
  FormOutlined,
  HomeFilled,
  LineChartOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "@tanstack/react-router";
import { MenuProps } from "antd";
import { Menu } from "~/components/core/menu.tsx";
import { DashSider } from "~/components/layouts/dash-sider.tsx";

const items: MenuProps["items"] = [
  {
    key: "/",
    icon: <HomeFilled />,
    label: (
      <Link search="" to="/">
        Home
      </Link>
    ),
  },
  {
    key: "/about",
    icon: <MoreOutlined />,
    label: (
      <Link search="" to="/about">
        About
      </Link>
    ),
  },
  {
    key: "/table",
    icon: <BorderlessTableOutlined />,
    label: (
      <Link search="" to="/table">
        Table
      </Link>
    ),
  },
  {
    key: "/form",
    icon: <FormOutlined />,
    label: (
      <Link search="" to="/form">
        Form
      </Link>
    ),
  },
  {
    key: "/charts",
    icon: <AreaChartOutlined />,
    label: (
      <Link search="" to="/charts">
        Charts
      </Link>
    ),
  },
  {
    key: "/dnd",
    icon: <BookOutlined />,
    label: (
      <Link search="" to="/dnd">
        DnD
      </Link>
    ),
  },
  {
    key: "/flow",
    icon: <LineChartOutlined />,
    label: (
      <Link search="" to="/flow">
        Flow
      </Link>
    ),
  },
  {
    key: "/motion",
    icon: <LineChartOutlined />,
    label: (
      <Link search="" to="/motion">
        Motion
      </Link>
    ),
  },
];

export const RootDashSider = () => {
  const location = useLocation();

  return (
    <DashSider>
      <Menu mode="inline" items={items} selectedKeys={[location.pathname]} />
    </DashSider>
  );
};

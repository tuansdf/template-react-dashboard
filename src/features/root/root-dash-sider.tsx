import {
  AreaChartOutlined,
  BorderlessTableOutlined,
  FormOutlined,
  HomeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "@tanstack/react-router";
import { MenuProps } from "antd";
import { Menu } from "~/components/core/menu.tsx";
import { DashSider } from "~/components/layouts/dash-sider.tsx";

const items: MenuProps["items"] = [
  {
    key: "/",
    icon: <HomeOutlined />,
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
    key: "/table-filter-pagination",
    icon: <BorderlessTableOutlined />,
    label: (
      <Link search="" to="/table-filter-pagination">
        Table filter pagination
      </Link>
    ),
  },
  {
    key: "/create-form",
    icon: <FormOutlined />,
    label: (
      <Link search="" to="/create-form">
        Create form
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
];

export const RootDashSider = () => {
  const location = useLocation();

  return (
    <DashSider>
      <Menu mode="inline" items={items} selectedKeys={[location.pathname]} />
    </DashSider>
  );
};

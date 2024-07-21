import { BellFilled, SettingFilled, TeamOutlined } from "@ant-design/icons";
import { Badge, Popover, Segmented } from "antd";
import { useState } from "react";
import { Button, Drawer } from "~/components/core";
import { Avatar } from "~/components/core/avatar.tsx";
import { Contact, ContactProps } from "~/components/core/contact.tsx";
import { Notification, NotificationProps } from "~/components/core/notification.tsx";
import classes from "./root-dash-header.module.scss";

const notifications: NotificationProps[] = [
  {
    id: "1",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
  {
    id: "2",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
  {
    id: "3",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
  {
    id: "4",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
  {
    id: "5",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
  {
    id: "6",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
    topic: "Communication",
  },
];

const contacts: ContactProps[] = [
  {
    id: "1",
    title: "Jason",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
  },
  {
    id: "2",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
  },
  {
    id: "3",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
  },
  {
    id: "4",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
  },
  {
    id: "5",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
  },
  {
    id: "6",
    title: "Someone sent you a friend request",
    icon: <Avatar name="ddd jdjfksj sdfjslfj kdkd" />,
    time: "10s",
  },
];

export const RootDashHeader = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openNotifications = () => setIsNotificationsOpen(true);
  const closeNotifications = () => setIsNotificationsOpen(false);
  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <>
      <header className={classes["container"]}>
        <div className={classes["start"]}>logo</div>
        <div className={classes["end"]}>
          <Button icon={<BellFilled />} size="large" type="text" shape="circle" onClick={openNotifications} />
          <Popover
            placement="bottomRight"
            title="Contacts"
            trigger="click"
            content={
              <div className={classes["contacts"]}>
                {contacts.map((item) => {
                  return <Contact title={item.title} icon={item.icon} time={item.time} />;
                })}
              </div>
            }
          >
            <Button icon={<TeamOutlined />} size="large" type="text" shape="circle" />
          </Popover>
          <Button icon={<SettingFilled />} size="large" type="text" shape="circle" onClick={openSettings} />
          <Button icon={<Avatar name="ddd jdjfksj sdfjslfj kdkd" />} size="large" type="text" shape="circle" />
        </div>
      </header>

      <Drawer open={isNotificationsOpen} onClose={closeNotifications} title="Notifications" withPadding={false}>
        <Segmented
          options={[
            {
              value: "1",
              label: (
                <div className={classes["segmented-label"]}>
                  All <Badge count={22} color="#1e293b" />
                </div>
              ),
            },
            {
              value: "2",
              label: (
                <div className={classes["segmented-label"]}>
                  Unread <Badge count={12} color="#3b82f6" />
                </div>
              ),
            },
            {
              value: "3",
              label: (
                <div className={classes["segmented-label"]}>
                  Archived <Badge count={10} color="#22c55e" />
                </div>
              ),
            },
          ]}
          block
          className={classes["segmented"]}
          size="large"
        />
        <div className={classes["notifications"]}>
          {notifications.map((item) => {
            return <Notification title={item.title} icon={item.icon} time={item.time} topic={item.topic} />;
          })}
        </div>
      </Drawer>

      <Drawer open={isSettingsOpen} onClose={closeSettings} title="Settings" withPadding={false}>
        <div className={classes["notifications"]}>
          {notifications.map((item) => {
            return <Notification title={item.title} icon={item.icon} time={item.time} topic={item.topic} />;
          })}
        </div>
      </Drawer>
    </>
  );
};

import { ReactNode } from "react";
import classes from "./notification.module.scss";

export type NotificationProps = {
  id?: string;
  title: ReactNode;
  icon: ReactNode;
  time?: string;
  topic?: string;
  content?: ReactNode;
};

export const Notification = ({ title, icon, time, topic, content }: NotificationProps) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["start"]}>{icon}</div>
      <div className={classes["end"]}>
        <div className={classes["title"]}>{title}</div>
        {(!!time || !!topic) && (
          <div className={classes["metadata"]}>
            {!!time && <div className={classes["time"]}>{time}</div>}
            {!!time && !!topic && <span>∙</span>}
            {!!topic && <div className={classes["topic"]}>{topic}</div>}
          </div>
        )}
        {!!content && <div className={classes["content"]}>{content}</div>}
      </div>
    </div>
  );
};

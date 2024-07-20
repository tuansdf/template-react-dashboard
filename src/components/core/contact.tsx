import { ReactNode } from "react";
import classes from "./contact.module.scss";

export type ContactProps = {
  id?: string;
  title: ReactNode;
  icon: ReactNode;
  time?: ReactNode;
};

export const Contact = ({ title, icon, time }: ContactProps) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["start"]}>{icon}</div>
      <div className={classes["end"]}>
        <div className={classes["title"]}>{title}</div>
        {!!time && <div className={classes["time"]}>{time}</div>}
      </div>
    </div>
  );
};

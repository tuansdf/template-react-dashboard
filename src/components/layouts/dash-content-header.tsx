import { ReactNode } from "react";
import classes from "./dash-content-header.module.scss";

type Props = {
  title: string;
  extraTitle?: ReactNode;
  extraEnd?: ReactNode;
};

export const DashContentHeader = ({ title, extraTitle, extraEnd }: Props) => {
  return (
    <header className={classes["container"]}>
      <div className={classes["start"]}>
        <h2 className={classes["title"]}>{title}</h2>
        {extraTitle}
      </div>

      <div className={classes["end"]}>{extraEnd}</div>
    </header>
  );
};

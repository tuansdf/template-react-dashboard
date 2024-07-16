import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "~/utils/classnames.ts";
import classes from "./motion-container.module.scss";

type Item = {
  id: string;
  content: string;
};

const items: Item[] = [
  {
    id: "1",
    content: "content 1",
  },
  {
    id: "2",
    content: "content 2",
  },
  {
    id: "3",
    content: "content 3",
  },
  {
    id: "4",
    content: "content 4",
  },
  {
    id: "5",
    content: "content 5",
  },
];

export const MotionContainer = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className={classes["container"]}>
      {items.map((item) => {
        return (
          <motion.div layoutId={item.id} className={classes["box"]} onClick={() => setSelectedId(item.id)}>
            {item.content}
          </motion.div>
        );
      })}

      <AnimatePresence>
        {!!selectedId && (
          <motion.div
            className={classes["overlay"]}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className={cn(classes["box"], classes["is-large"])}
              onClick={() => setSelectedId(null)}
            >
              HELLO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

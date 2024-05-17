import { useViewportSize as useViewportSizeM } from "@mantine/hooks";
import { useMemo } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

export const useViewportSize = (): { width: number; height: number; breakpoint: Breakpoint } => {
  const { width, height } = useViewportSizeM();

  const breakpoint: Breakpoint = useMemo(() => {
    if (width < 800) return "sm";
    if (width < 1000) return "md";
    if (width < 1200) return "lg";
    if (width < 1400) return "xl";
    return "xxl";
  }, [width]);

  return { width, height, breakpoint };
};

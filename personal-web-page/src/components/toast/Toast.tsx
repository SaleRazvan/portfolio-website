import { MinusCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout } from "@radix-ui/themes";
import { useEffect, useRef } from "react";

type ToastProps = {
  open: boolean;
  message: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
};

export default function Toast({ open, message, right, top }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    toastRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [open]);

  return (
    open && (
      <Box
        position="absolute"
        right={right}
        top={top}
        width="250px"
        ref={toastRef}
      >
        <Callout.Root size="3" variant="surface" color="red">
          <Callout.Icon>
            <MinusCircledIcon />
          </Callout.Icon>
          <Callout.Text weight="medium">{message}</Callout.Text>
        </Callout.Root>
      </Box>
    )
  );
}

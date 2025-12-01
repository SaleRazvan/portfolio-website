import { MinusCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout } from "@radix-ui/themes";

type ToastProps = {
  open: boolean;
  message: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
};

export default function ErrorToast({ open, message, right, top }: ToastProps) {
  return (
    open && (
      <Box position="absolute" right={right} top={top} width="250px">
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

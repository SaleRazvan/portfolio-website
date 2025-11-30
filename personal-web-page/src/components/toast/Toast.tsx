import { MinusCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

type ToastProps = {
  open: boolean;
};

export default function ErrorToast({ open }: ToastProps) {
  const { t } = useTranslation();

  // @TODO: Make this component actually reusable

  return (
    open && (
      <Box position="absolute" right="-40px" top="250px" width="250px">
        <Callout.Root size="3" variant="surface" color="red">
          <Callout.Icon>
            <MinusCircledIcon />
          </Callout.Icon>
          <Callout.Text weight="medium">{t("holiday.inputErr")}</Callout.Text>
        </Callout.Root>
      </Box>
    )
  );
}

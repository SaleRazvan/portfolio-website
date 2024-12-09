import { AlertDialog, Button, Flex, Link } from "@radix-ui/themes";
import { ReactElement, useContext } from "react";
import { AppContext } from "../../AppContext";
import { useTranslation } from "react-i18next";

type AlertLinkModalProps = {
  action: string;
  href: string;
  children: ReactElement;
};

export default function AlertLinkModal({
  action,
  href,
  children,
}: AlertLinkModalProps) {
  const { dynamicColor } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger style={{ cursor: "pointer" }}>
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="20%">
        <AlertDialog.Title size="3">{t("dialog.title")}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {t("dialog.desc")}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="surface" color={dynamicColor} size="3">
              {t("dialog.cancel")}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button asChild color={dynamicColor} size="3">
              <Link target="_blank" href={href}>
                {t(action)}
              </Link>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

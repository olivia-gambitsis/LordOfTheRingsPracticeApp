import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, Text } from "@mantine/core";

interface IQuoteModal {
  quote: string;
}

export const QuoteModal = ({ quote }: IQuoteModal) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Text>{`"${quote}"`}</Text>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
  );
};

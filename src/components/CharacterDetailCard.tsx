import axios from "axios";
import { useState } from "react";
import { ICharacter, ICharacterQuote } from "../helpers/types";
import {
  Button,
  Card,
  Group,
  Text,
  Badge,
  Container,
  Title,
  Modal,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface ICharacterDetailCard {
  character: ICharacter;
  getQuote?: (id: string) => Promise<void>;
}

export const CharacterDetailCard = ({
  character,
  getQuote,
}: ICharacterDetailCard) => {
  const [characterQuote, setCharacterQuote] = useState<ICharacterQuote[]>();
  const [opened, { open, close }] = useDisclosure(false);

  const getCharacterQuote = async (id: string) => {
    let quote;
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_LOTR_API_URL}/character/${id}/quote`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_LOTR_API_KEY}`,
            Accept: "application/json",
          },
        }
      );
      quote = res.data.docs[Math.floor(Math.random() * res.data.docs.length)];
      setCharacterQuote(quote.dialog);
    } catch (error) {
      // Handle errors
    }
  };

  const handleOpenQuoteModal = async () => {
    await getCharacterQuote(character._id).then(open);
  };

  return (
    <>
      <Container mt={"lg"}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Title align="center">{character.name}</Title>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{character.name}</Text>
            <Badge
              onClick={handleOpenQuoteModal}
              color="yellow.5"
              variant="filled"
            >
              Generate Quote
            </Badge>
          </Group>

          <Text size="sm">{character.race}</Text>
          <Text size="sm">{character.realm}</Text>
          <Text size="sm">{character.gender}</Text>

          <Button
            variant="filled"
            color="yellow.5"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href={character.wikiUrl}
            target="_blank"
          >
            Show me this character's wiki
          </Button>
        </Card>
      </Container>
      <Modal opened={opened} onClose={close} title="Quote" centered>
        <Center>
          <Text>
            {characterQuote
              ? `"${characterQuote}"`
              : "Sorry! this character doesn't seem to have any movie quotes :("}
          </Text>
        </Center>
      </Modal>
    </>
  );
};

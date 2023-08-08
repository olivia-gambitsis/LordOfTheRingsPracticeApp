import { useState } from "react";
import { ICharacter, ICharacterQuote } from "../helpers/interfaces";
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
import { useQuery } from "@tanstack/react-query";
import { getCharacterQuote } from "../services/characterService";

interface ICharacterDetailCard {
  character: ICharacter;
}

export const CharacterDetailCard = ({ character }: ICharacterDetailCard) => {
  const [characterQuote, setCharacterQuote] = useState<ICharacterQuote>();
  const [characterID, setCharacterID] = useState(character._id);
  const [opened, { open, close }] = useDisclosure(false);

  const { data } = useQuery({
    queryKey: [characterID, "query-character-quote"],
    enabled: Boolean(characterID),
    queryFn: async () => {
      return await getCharacterQuote(characterID);
    },
    onSuccess: (res) => {
      setCharacterQuote(res[Math.floor(Math.random() * res.length)]);
    },
  });

  const handleOpenQuoteModal = () => {
    setCharacterID(character._id);
    open();
  };

  return (
    <>
      <Container mt={"lg"}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Title align="center">{character.name}</Title>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{character.race}</Text>
            <Badge
              onClick={handleOpenQuoteModal}
              color="yellow.5"
              variant="filled"
            >
              Get a Quote
            </Badge>
          </Group>
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
      <Modal opened={opened} onClose={close} title="Random Quote" centered>
        <Center>
          {characterQuote ? (
            <Text>{`"${characterQuote.dialog}"`}</Text>
          ) : (
            <Text>
              {"Sorry! this character doesn't seem to have any movie quotes :("}
            </Text>
          )}
        </Center>
      </Modal>
    </>
  );
};

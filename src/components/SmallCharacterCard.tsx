import { ICharacter } from "../helpers/types";
import {
  Button,
  Card,
  Group,
  Text,
  Image,
  Center,
  Flex,
  Col,
} from "@mantine/core";
import { RACES } from "../helpers/enums";

interface ISmallCharacterCard {
  character: ICharacter;
}

export const SmallCharacterCard = ({ character }: ISmallCharacterCard) => {
  const findCharacterRaceImage = () => {
    switch (character.race) {
      case RACES.Elf:
        return "https://static.wikia.nocookie.net/cate-blanchett/images/d/d6/GaladrielROTK.png";
      case RACES.Dwarf:
        return "https://imgix.ranker.com/list_img_v2/8013/3148013/original/3148013?fit=crop&fm=pjpg";
      case RACES.Hobbit:
        return "https://static.wikia.nocookie.net/lotr/images/5/52/Samwise_Gamgee_1.PNG";
      case RACES.Human:
        return "https://static.wikia.nocookie.net/warner-bros-entertainment/images/6/6a/94E54497-FAC0-4332-9531-27A0A5962043.jpeg";
      default:
        return "https://static.wikia.nocookie.net/warner-bros-entertainment/images/6/6a/94E54497-FAC0-4332-9531-27A0A5962043.jpeg";
    }
  };

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ height: 300, width: 250 }}
      >
        <Center>
          <Image
            src={findCharacterRaceImage()}
            alt="Norway"
            height={120}
            width={120}
            radius="50%"
          />
        </Center>

        <div>
          <Flex gap={20} direction={"column"}>
            <Flex align={"center"} direction={"column"}>
              <Text align="center" weight={500}>
                {character.name}
              </Text>
              <Text size="sm" color="dimmed">
                {character.race}
              </Text>
            </Flex>

            <Button
              variant="filled"
              color="yellow.5"
              fullWidth
              mt="auto"
              radius="xl"
              component="a"
              href={`/character-details/${character._id}`}
            >
              More character details
            </Button>
          </Flex>
        </div>
      </Card>
    </>
  );
};

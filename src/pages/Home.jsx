import {AbsoluteCenter, Box, Button, ButtonGroup, Center, Heading, Tag, Text} from "@chakra-ui/react";
import {Link as Navigate} from "react-router-dom";
import {BsHouse, BsPlusLg} from "react-icons/bs";

export default function Home(){
    return (
        <Box position="relative" h={"100%"}>
            <AbsoluteCenter textAlign={"center"}>
                <Box>
                    <Heading size={"4xl"}>
                        PickMyMeal
                        <Tag.Root size="lg" colorPalette="blue" ml={2}>
                            <Tag.Label>Beta</Tag.Label>
                        </Tag.Root>
                    </Heading>
                    <Text mb={3} mt={3}>
                        Can't decide what to order? Let an AI decide for you!
                    </Text>
                    <ButtonGroup mt={3}>
                        <Button asChild>
                            <Navigate to={"/new"}>
                                <BsPlusLg/>
                                Start
                            </Navigate>
                        </Button>
                    </ButtonGroup>
                </Box>
            </AbsoluteCenter>
        </Box>
    )
}
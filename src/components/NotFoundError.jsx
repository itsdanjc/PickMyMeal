import {Component} from "react";
import {AbsoluteCenter, Box, Button, EmptyState, ButtonGroup, VStack, List, Code} from "@chakra-ui/react";
import { Link as Navigate } from "react-router-dom";
import {BsExclamationCircle, BsHouse, BsPlusLg} from "react-icons/bs";

export default class NotFoundError extends Component {
    render() {
        document.title = `Page Not Found | PickMyMeal`;
        return (
            <Box position="relative" w="100%" h="100%">
                <AbsoluteCenter>
                    <EmptyState.Root size={"lg"}>
                        <EmptyState.Content>
                            <EmptyState.Indicator>
                                <BsExclamationCircle/>
                            </EmptyState.Indicator>
                            <VStack>
                                <EmptyState.Title>
                                    Page Not Found
                                </EmptyState.Title>
                                <EmptyState.Description textAlign={"center"}>
                                    The URL <Code>{window.location.pathname}</Code> does not
                                    exist, or you do not have permission to view this page.<br/>
                                    To solve the problem, you could try any of the following:
                                    <List.Root variant="marker" justifySelf={"center"} textAlign={"start"} mt={3}>
                                        <List.Item>Go back to your saved menus.</List.Item>
                                        <List.Item>Save a new menu.</List.Item>
                                        <List.Item>Try using a different device.</List.Item>
                                    </List.Root>
                                </EmptyState.Description>
                                <ButtonGroup mt={3}>
                                    <Button variant="outline" asChild>
                                        <Navigate to={"/"}>
                                            <BsHouse />
                                            Take Me Home
                                        </Navigate>
                                    </Button>
                                    <Button asChild>
                                        <Navigate to={"/new"}>
                                            <BsPlusLg />
                                            Start New
                                        </Navigate>
                                    </Button>
                                </ButtonGroup>
                            </VStack>
                        </EmptyState.Content>
                    </EmptyState.Root>
                </AbsoluteCenter>
            </Box>
        )
    }
}
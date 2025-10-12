import { useColorModeValue } from "./ui/color-mode"
import { BsList, BsPlusLg, BsClockHistory, BsPen, BsTrash } from "react-icons/bs";
import { 
    Button,
    IconButton,
    CloseButton,
    ScrollArea,
    Box,
    Link,
    Flex,
    Menu,
    Text,
    Portal,
    For,
    EmptyState,
    Icon,
    Image,
    Drawer
} from "@chakra-ui/react"


export default function Sidebar() {
    const sidebarContentItems = (() => {
        const l = [];
        for (let i = 0; i < 123; i++) {
            l.push({
                id: i,
                title: i,
                address: "n/a"
            });
        }
        return l;
    })();
    const SidebarContentFallback = (
        <EmptyState.Root size={"sm"}>
            <EmptyState.Content>
                <EmptyState.Indicator textAlign={"center"}>
                    <BsClockHistory />
                </EmptyState.Indicator>
                <EmptyState.Title textAlign={"center"}>You Haven't Added Any Menus Yet!</EmptyState.Title>
                <EmptyState.Description textAlign={"center"}>
                    Your previous menus will show up here so you can quickly pick another meal later.
                </EmptyState.Description>
            </EmptyState.Content>
        </EmptyState.Root>
    );
    
    const SidebarHeader = () => (
        <Box 
            paddingInline={"20px"}
            paddingBlock={"10px"}>
            <Flex align={"center"} justify={"space-between"}>
                <Link href="/">
                    <Flex align={"center"} gap={2}>
                        <Image src="//itsdanjc.com/favicon.ico"></Image>
                        <Text textStyle="md" fontWeight="semibold">Pick My Meal</Text>
                    </Flex>
                </Link>
            </Flex>
        </Box>
    );

    const SidebarFooter = () => (
        <Box 
            position={"sticky"}
            bottom={0}
            bg={useColorModeValue("gray.100", "gray.900")}
            paddingInline={"20px"}
            paddingBlock={"10px"}>
            <footer>
                <Text textStyle={"sm"}>
                    Made by{" "}
                    <Link 
                        href="https://itsdanjc.com"
                        variant={"underline"}>
                            itsdanjc
                    </Link>.
                </Text>
                <Text textStyle={"sm"}>
                    View source on{" "}
                    <Link 
                        href="https://github.com/itsdanjc/PickMyMeal"
                        variant={"underline"}>
                            GitHub
                    </Link>.
                </Text>
            </footer>
        </Box>
    );

    const SidebarLinkButton = ({ id, href, title, address }) => (
        <Flex align="center" gap={2}>
            <Link flex={1} href={href} minW={0}>
                <Text truncate>
                    {title}
                </Text>
            </Link>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <IconButton variant="ghost" size="sm">
                        <BsList />
                    </IconButton>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value={"edit"}>
                                <Icon>
                                    <BsPen />
                                </Icon>
                                <Box flex={1}>Edit</Box>
                            </Menu.Item>
                            <Menu.Item
                                value={"delete"}
                                color="fg.error"
                                _hover={{ bg: "bg.error", color: "fg.error" }}>
                                <Icon>
                                    <BsTrash />
                                </Icon>
                                <Box flex={1}>Delete</Box>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </Flex>
    );

    return (
        <Flex flexDirection={"column"} height={"100vh"} width={"min(250px, 100vw)"}>
            <SidebarHeader />
            <ScrollArea.Root flex={1} maxW={"inherit"}>
                <ScrollArea.Viewport maxW={"inherit"}>
                    <ScrollArea.Content maxW={"inherit"}>
                        <Box paddingInline={"20px"} maxW={"inherit"}>
                            <For each={sidebarContentItems} fallback={SidebarContentFallback}>
                                {(item) => (
                                    <SidebarLinkButton 
                                        href={`/m/${item.id}`} 
                                        title={item.title} 
                                        address={item.address}
                                        id={item.id}
                                    />
                                )}
                            </For>
                            <Box 
                                position={"sticky"}
                                bottom={0}
                                pb={"2px"}
                                mt={"10px"}
                                bg={useColorModeValue("gray.100", "gray.900")}>
                                <Button
                                    colorPalette={"blue"}
                                    variant={"surface"}
                                    width={"100%"}>
                                    <BsPlusLg /> Add Menu
                                </Button>
                            </Box>
                        </Box>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
            </ScrollArea.Root>
            <SidebarFooter />
        </Flex>
    )
}
import { Button, Flex, Text, Input, useBreakpointValue  } from "@chakra-ui/react"
import { BsLayoutSidebar, BsShare } from "react-icons/bs"
import { useSidebar } from "../App";

export default function Header() {
    const SidebarOpenButton = () => {
        const { onOpen } = useSidebar();
        if(useBreakpointValue({ base: true, lg: false }))
            return (
                <Button size={"sm"} variant={"ghost"} onClick={onOpen}>
                    <BsLayoutSidebar />
                </Button>
            );
        return (<></>)
    };

    return (
        <Flex p={"10px"} justify={"space-between"} align={"center"}>
            <Flex align={"center"}  gap={"10px"}>
                {SidebarOpenButton()}
                <Input value={"Example"} />
            </Flex>
            <Flex align={"center"} gap={"10px"}>
                <Button size={"sm"} variant={"outline"}>
                    <BsShare />
                </Button>
            </Flex>
        </Flex>
    )
}
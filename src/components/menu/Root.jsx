import {Tabs, Box, Flex, Heading, useTabs, useBreakpointValue} from "@chakra-ui/react"
import {useEffect, useMemo} from "react";
import {BsList, BsGearFill, BsDice4Fill} from "react-icons/bs";
import {useParams} from "react-router-dom";
import NotFoundError from "../NotFoundError.jsx";
import Editor from "./Editor.jsx";

export default function Root() {
    const {uuid, tabId} = useParams();
        const tabs = useTabs({
        defaultValue: tabId ?? "roll"
    });
    const pageTabs = useMemo(
        () => ({
            roll: {
                name: "Roll",
                icon: <BsDice4Fill/>,
                body: "Settings",
                props: {}
            },
            edit: {
                name: "Editor",
                icon: <BsList/>,
                body: <Editor/>,
                props: {}
            },
            settings: {
                name: "Settings",
                icon: <BsGearFill/>,
                body: "Settings",
                props: {}
            }
        }),
        []
    );
    const useMobileLayout = useBreakpointValue({base: false, sm: true});

    useEffect(() => {
        if(pageTabs[tabs.value]){
            const newUrl = `/m/${uuid}/${tabs.value}`;
            window.history.pushState({}, "", newUrl);
            document.title = `${uuid} - ${pageTabs[tabs.value].name} | PickMyMeal`;
            return;
        }
        document.title = `${uuid} | PickMyMeal`;
    }, [tabs.value, uuid, pageTabs]);

    if (!(tabs.value in pageTabs)) {
        return <NotFoundError />;
    }

    const tabList = () => {
        let tabs = []
        for (const tab in pageTabs){
            tabs.push((
                <Tabs.Trigger key={tab} value={tab} {...pageTabs[tab].props} flexShrink={0}>
                    {pageTabs[tab].icon}
                    {pageTabs[tab].name}
                </Tabs.Trigger>
            ))
        }
        return tabs
    }

    const tabBody = () => {
        let tabs = []
        for (const tab in pageTabs){
            tabs.push((
                <Tabs.Content key={tab} value={tab} p={4}>
                    {pageTabs[tab].body}
                </Tabs.Content>
            ))
        }
        return tabs
    }


    return !useMobileLayout ? (
        <Box>
            <Heading truncate p={4}>{"Untitled Menu"}</Heading>
            <Tabs.RootProvider defaultValue="members" variant="outline" lazyMount  unmountOnExit value={tabs}>
                <Tabs.List>
                    {tabList()}
                </Tabs.List>
                {tabBody()}
            </Tabs.RootProvider>
        </Box>
    ) : (
        <Box>
            <Tabs.RootProvider defaultValue="members" variant="outline" lazyMount unmountOnExit  value={tabs}>
                <Tabs.List pt={3}>
                    <Flex gap={2} w={"100%"}>
                        <Heading ml={4} mr={5} truncate>{"Untitled Menu"}</Heading>
                        {tabList()}
                    </Flex>
                </Tabs.List>
                {tabBody()}
            </Tabs.RootProvider>
        </Box>
    );
}
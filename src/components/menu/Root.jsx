import {Tabs, Box, Flex, Heading, useTabs, useBreakpointValue} from "@chakra-ui/react"
import {useEffect, useMemo} from "react";
import {BsList, BsGearFill} from "react-icons/bs";
import {useParams} from "react-router-dom";
import NotFoundError from "../NotFoundError.jsx";

export default function Root() {
    const {uuid, tabId} = useParams();
        const tabs = useTabs({
        defaultValue: tabId ?? "edit"
    });
    const pageTabs = useMemo(
        () => ({
            edit: {
                name: "Editor",
                icon: <BsList />,
                body: "Editor",
            },
            settings: {
                name: "Settings",
                icon: <BsGearFill />,
                body: "Settings",
            },
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
                <Tabs.Trigger key={tab} value={tab}>
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
                <Tabs.Content key={tab} value={tab}>
                    {pageTabs[tab].body}
                </Tabs.Content>
            ))
        }
        return tabs
    }


    return !useMobileLayout ? (
        <Box paddingBlock={3} paddingInline={5}>
            <Heading truncate pb={4}>{"Untitled"}</Heading>
            <Tabs.RootProvider defaultValue="members" variant="subtle" value={tabs}>
                <Tabs.List>
                    {tabList()}
                </Tabs.List>
                {tabBody()}
            </Tabs.RootProvider>
        </Box>
    ) : (
        <Box paddingBlock={3} paddingInline={5}>
            <Tabs.RootProvider defaultValue="members" variant="subtle" value={tabs}>
                <Flex gap={5}>
                    <Heading minW={0} flex={1} truncate>{"Untitled"}</Heading>
                    <Tabs.List flexShrink={0}>
                        {tabList()}
                    </Tabs.List>
                </Flex>
                {tabBody()}
            </Tabs.RootProvider>
        </Box>
    );
}
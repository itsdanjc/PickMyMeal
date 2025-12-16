import {useState, useEffect} from "react";
import {Box, Container, Spinner, EmptyState, Button, Text, Link} from "@chakra-ui/react";
import { Link as Navigate } from "react-router-dom";
import {BsClockHistory } from "react-icons/bs"

export default function Sidebar() {

    async function getHistoryObjects() {
        return [{}];
    }

    return (
        <Container p={"20px"}>
            <SidebarItemList/>
        </Container>
    )
};

function SidebarItemList() {
    const [items, setItems] = useState(null);
    const addItemAction = (
        <Button w={"100%"} asChild>
            <Navigate to={'/new'}>
                Add
            </Navigate>
        </Button>
    )

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems([]);
    }, []);

    if (items == null) {
        // Render loading state
        return <Box textAlign={"center"}><Spinner /></Box>;
    }

    else if (!items || !items.length) {
        return (
            <>
                <EmptyState.Root textAlign="center" size={"sm"}>
                    <EmptyState.Content>
                        <EmptyState.Indicator>
                            <BsClockHistory/>
                        </EmptyState.Indicator>
                        <EmptyState.Title>
                            You Haven't Added Any Menus Yet!
                        </EmptyState.Title>
                        <EmptyState.Description>
                            Your previous menus will show up here so you can quickly pick another meal later.
                        </EmptyState.Description>
                    </EmptyState.Content>
                </EmptyState.Root>
                {addItemAction}
            </>
        );
    }

    // Populated state
    return (
        <>
            {items.map(i => <SidebarItem data={i} />)}
            {addItemAction}
        </>
    )
}

function SidebarItem({data = {}}) {
    return (
        <Link asChild display={"block"} mb={"15px"}>
            <Navigate to={`/m/${data.id}`}>
                {data.title}
            </Navigate>
        </Link>
    );
}
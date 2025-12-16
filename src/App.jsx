import {
    Grid,
    GridItem,
    Drawer,
    CloseButton,
    IconButton,
    useBreakpointValue
} from "@chakra-ui/react"
import { BsList } from "react-icons/bs";
import Sidebar from "./components/Sidebar.jsx";
import AppRoutes from "./routes.jsx";
import {useState} from "react";

function DesktopLayout() {
    return (
        <Grid h="100vh" templateRows={"auto 1fr"} templateColumns={"250px 1fr"}>
            <GridItem
                colSpan={2}
                bg="bg.muted"
                borderBottomWidth={"1px"}
                borderColor="colorPalette.800"
                p={2}>
                Header
            </GridItem>
            <GridItem
                bg="bg.muted"
                borderRightWidth={"1px"}
                borderColor="colorPalette.800">
                <Sidebar/>
            </GridItem>
            <GridItem>
                <AppRoutes />
            </GridItem>
        </Grid>
    )
}

function MobileLayout() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer.Root open={open} placement="start" size="xs" onOpenChange={(e) => setOpen(e.open)}>
                <Drawer.Backdrop/>
                <Drawer.Positioner>
                    <Drawer.Content bg="bg.muted" w={"250px"}>
                        <Drawer.Header>
                            <Drawer.Title>
                                Pick My Meal
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body p={0}>
                            <Sidebar/>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm"/>
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
            <Grid h="100dvh" templateRows={"auto 1fr"}>
                <GridItem
                    bg="bg.muted"
                    borderBottomWidth={"1px"}
                    borderColor="colorPalette.800"
                    p={2}>
                    <IconButton
                        aria-label="Open menu"
                        variant="outline"
                        onClick={() => setOpen(true)}
                        mr={2}
                    ><BsList/></IconButton>
                    Header
                </GridItem>
                <GridItem>
                    <AppRoutes />
                </GridItem>
            </Grid>
        </>
    )
}

export default function App(){
    if (useBreakpointValue({ base: false, md: true }))
        return <DesktopLayout />;
    return <MobileLayout />;
}
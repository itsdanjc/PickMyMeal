import { Grid, GridItem, Drawer, CloseButton, useBreakpointValue } from "@chakra-ui/react"
import Sidebar from "./components/Sidebar.jsx";

function DesktopLayout() {
    return (
        <Grid h="100vh" templateRows={"auto 1fr"} templateColumns={"250px 1fr"}>
            <GridItem
                colSpan={2}
                bg="bg.muted"
                borderBottomWidth={"1px"}
                borderColor="colorPalette.800">
                Header
            </GridItem>
            <GridItem
                bg="bg.muted"
                borderRightWidth={"1px"}
                borderColor="colorPalette.800">
                <Sidebar/>
            </GridItem>
            <GridItem>
                Main
            </GridItem>
        </Grid>
    )
}

function MobileLayout() {
    return (
        <>
            <Drawer.Root open placement={"start"} size={"xs"}>
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
            <Grid h="100vh" templateRows={"auto 1fr"}>
                <GridItem
                    colSpan={2}
                    bg="bg.muted"
                    borderBottomWidth={"1px"}
                    borderColor="colorPalette.800">
                    Header
                </GridItem>
                <GridItem>
                    Main
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
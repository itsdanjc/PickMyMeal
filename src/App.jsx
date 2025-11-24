import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
  return (
    <Grid h="100vh" templateRows={"auto 1fr"} templateColumns={"250px 1fr"}>
        <GridItem colSpan={2} bg="bg.muted">
            Header
        </GridItem>
        <GridItem bg="bg.muted">
            <Sidebar />
        </GridItem>
        <GridItem>
            Main
        </GridItem>
    </Grid>
  )
}

import { useColorModeValue } from "./components/ui/color-mode"
import { Grid, GridItem, AbsoluteCenter, Spinner, Drawer, CloseButton, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import { createContext, useContext } from "react";
import Sidebar from './components/sidebar'
import Header from './components/header'

const SidebarContext = createContext(null);
export const useSidebar = () => useContext(SidebarContext);

export default function App() {
	const disclosure = useDisclosure();
	const bg = useColorModeValue("gray.100", "gray.900");
	const borderColor = useColorModeValue("gray.200", "gray.800");
	const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  	const renderSidebar = () => {
    	if(isLargeScreen) {
    		return (<Sidebar />);
    	}

		return (
			<Drawer.Root placement={"start"} open={disclosure.open}>
				<Drawer.Backdrop />
				<Drawer.Trigger />
				<Drawer.Positioner>
					<Drawer.Content w={"fit-content"} bg={useColorModeValue("gray.100", "gray.900")}>
						<Sidebar />
						<Drawer.CloseTrigger asChild>
              				<CloseButton onClick={disclosure.onClose} />
           				</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer.Root>
		)
	};

	return (
		<SidebarContext.Provider value={disclosure}>
			<Grid 
				templateColumns={"auto 1fr"}
				templateRows={"auto 1fr"}
				height={"100vh"}
				overflow={"hidden"}>
				<GridItem 
					colStart={2}
					bg={bg}
					borderBottomColor={borderColor}
					borderBottomWidth="1px">
					<Header />
				</GridItem>
				<GridItem
					rowStart={"1"}
					rowEnd={"-1"}
					bg={bg}
					borderEndColor={borderColor}
					borderEndWidth="1px">
					{renderSidebar()}
				</GridItem>
				<GridItem position="relative" colStart={2}>
					<AbsoluteCenter>
						<Spinner />
					</AbsoluteCenter>
				</GridItem>
			</Grid>
		</SidebarContext.Provider>
	)
}

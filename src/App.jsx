import Grid from './components/Grid.jsx'
import GridItem from './components/GridItem.jsx'

export default function App() {
  return (
    <Grid
        className={"grid"}
        gridRows={"auto 1fr"}
        gridColumns={"250px 1fr"}>

        <GridItem gridColumn={"1/-1"}>Header</GridItem>
        <GridItem>Sidebar</GridItem>
        <GridItem>Main</GridItem>
    </Grid>
  )
}

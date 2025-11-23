import Grid from './components/Grid.jsx'
import GridItem from './components/Grid.jsx'

export default function App() {
  return (
    <Grid
        className={"grid"}
        gridRows={"auto 1fr"}
        gridColumns={"250px 1fr"}>

        <GridItem>Grid</GridItem>
        <GridItem>Grid</GridItem>
        <GridItem>Grid</GridItem>
    </Grid>
  )
}

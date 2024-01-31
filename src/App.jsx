import './App.css'
// import {typography} from '@mui/material'
import {Typography, AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container,Button} from '@mui/material'
import { PhotoCamera} from '@mui/icons-material'
const App = () => {
    
    return(
        <>
        <CssBaseline/>
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera/>
                <Typography variant='h6'>Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center'  gutterBottom>Photo Album</Typography>
                    <Typography variant='h5' align='center' color='GrayText' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla nisi nam dolorum quis, odio ipsum tempore sunt non minus doloribus officiis eos praesentium sapiente sint a incidunt quia facere!</Typography>
                    <div>
                        <Grid>
                            <Button color='primary' variant='contained' align='center'>See my photos</Button>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
        </>
    )
}

export default App

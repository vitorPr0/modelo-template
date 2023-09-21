import { AppBar, Container, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar style={{marginBottom:"40px", textAlign:"center"}} position="static">
          <span style={{marginTop:"30px", fontSize:"50px"}}>Produtos</span>
        <Container maxWidth="xl" style={{height:"40px"}}>
            <Toolbar disableGutters>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;
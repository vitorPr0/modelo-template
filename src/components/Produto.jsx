import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link } from "@mui/material"

function Produto(props) {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 500, marginBottom:"20px", boxShadow:"1px 3px 10px blue" }} key={props.key}>
        <CardMedia
            sx={{ height: 180}}
            image={props.imagem}
            title={props.titulo}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.descricao}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="large">
                <Link style={{position: "absolute", marginTop: 10, textDecoration: "none"}} href={ "editar/produto/" + props.id }>Editar</Link>
            </Button>
            <Button size="large">
                <Link style={{position: "absolute", marginTop: 10, marginLeft: "180px", textDecoration: "none"}} href="#" onClick={props.excluir}>Excluir</Link>
            </Button>
        </CardActions>
    </Card>
  )
}

export default Produto
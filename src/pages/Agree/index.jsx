import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
}));

function Agree() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
          
          <div class ="flex">
            
            <section class = 'fc'>
    
                <article>
                    <a href="" class = 'law1'>Law: 1</a>
                    <a href="" class = 'law2'>Law: 2</a>
                    <a href="" class = 'law3'>Law: 3</a>
                 </article> 
            </section>
            <section class = 'sc'>
                <article>       
                    <a href="" class = 'law4'>Law: 4</a>
                    <a href="" class = 'law5'>Law: 5</a>
                    <a href="" class = 'law6'>Law: 6</a>
                </article>
            </section>
            
        </div>
        
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is demo app with login, registration and updating profile
            flows.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Agree;
import { Helmet, Grid, makeStyles, Container, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
}));



function Home() {
  const classes = useStyles();
  

  return (
    <Container maxWidth="sm" className={classes.root} style={{backgroundColor: ""}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
          <Typography variant="h5" gutterBottom>
           <header className="header">
             <div style = {{backgroundImage: `url("https://avatars.mds.yandex.net/get-altay/239474/2a0000015c6d56976227cec990c6c4246472/XXL")`}}></div>
           </header>
           <div style={{background: 'black'}}>
             <h1 style={{color: "red"}}>-------Hello world--------</h1>
           </div>
           <div>
             <section>
               <article style={{display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                  }}>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
               </article>
             </section>
             <section>
               <article style={{display: "flex",
                                  alignContent: "center",
                                  justifyContent: "center",
                                  }}>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
                 <a style={{padding: "20px", 
                            marginRight: "10px",
                            marginBottom: "10px",
                            outline: "1px solid #666",
                            backgroundColor: "rgba(255,0,0,0.2)",
                            float: "left"}}>Первая справка</a>
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

export default Home;

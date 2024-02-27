import mongose from "mongoose";

async function conectaDbConnection() {
  mongose
    .connect(
      "mongodb+srv://login:login123@loginmennage.6e5wnre.mongodb.net/LoginAuthentication?retryWrites=true&w=majority&appName=LoginMennage"
    )
    .then(() => {
      console.log("Conection MongoDb");
    })
    .catch(() => {
      console.log("Erro ao Connectar");
    });

  return mongose.connection;
}

export default conectaDbConnection;

//  mongodb+srv://login:login123@cluster0.iwuqqg4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

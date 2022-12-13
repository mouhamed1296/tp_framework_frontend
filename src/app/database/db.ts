import * as Realm from 'realm-web'
//Déclaration de l'application realm
const app: Realm.App = new Realm.App({ id: "application-0-rmlxv" });
const credentials = Realm.Credentials.anonymous();

//Déclaration de l'utilisateur de l'application realm
app.logIn(credentials).then(user => {
console.log(`${user.id} is logged in`);
}).catch(err => {
console.error("Failed to log in", err);
});

//Récupération du client mongodb
const mongo = app.currentUser?.mongoClient("mongodb-atlas");
let collection: any  = null

//Récupération de la collection
if (mongo) {
  const db = mongo.db("tp_framework");
  collection = db.collection("users");
}

//export de la collection
export { collection }
//const collection = mongo?.db(DATABASE_NAME).collection(COLLECTION_NAME);

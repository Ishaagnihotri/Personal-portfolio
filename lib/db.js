import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://nishantgangwar0581:Isha%401807@cluster0.m9ksg.mongodb.net/sample_mflix?retryWrites=true&w=majority&ssl=true&appName=Cluster0";
// mongodb+srv://nishantgangwar0581:<db_password>@cluster0.m9ksg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// ajority&ssl=true
if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;

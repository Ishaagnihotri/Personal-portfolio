import clientPromise from '@/lib/db';
import { MongoClient } from 'mongodb';

export async function getProjectsData() {
    try {
        const client = await clientPromise;

        // Connect to the MongoDB client
        await client.connect();

        // Specify the database and collection
        const database = client.db('IshaPortfolio'); // Replace with your database name
        const collection = database.collection('portfolios'); // Replace with your collection name

        // Query the collection
        const projects = await collection.find({}).toArray(); // Fetch all documents
console.log({projects})
        return projects; // Return the project data
    } catch (error) {
        console.error('Error fetching projects data:', error);
        throw new Error('Could not fetch projects data'); // Handle the error as needed
    } 
}

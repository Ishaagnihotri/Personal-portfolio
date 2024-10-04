import clientPromise from '../../lib/db'

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    console.log(client)
    const db = client.db('IshaPortfolio'); // Replace 'test' with your database name

    const collection = db.collection('portfolios'); // Example collection

    const projects = await collection.find({}).toArray();

    res.status(200).json({ projects });
  } catch (error) {
    console.error('Error fetching data:', error.message); // Log the actual error
    res.status(500).json({ error: 'Unable to fetch data', message: error.message });
  }
}



import express from 'express';
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import cors from 'cors';

const app = express()
const port = 3000
const endpoint = process.env.ENDPOINT
const azureApiKey = process.env.AZURE_API_KEY
const size = "1024x1024";
const n = 1;
const deploymentName = "Dalle3";
const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/images', async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).send("Please provide a 'prompt' query parameter");
    }

    try {
        const results = await client.getImages(
            deploymentName,
            prompt,
            { n, size }
        );
        console.log('Prompt:', prompt);
        if (results.data) {
            res.send(results.data.map((data) => data.url));
        } else {
            console.error('Unexpected response structure:', results);
            res.status(500).send('Unexpected response structure');
        }

    } catch (error) {
        console.error('Error fetching images:', error);

        // Error Handling (Choose one or customize)
        if (error.response) {
            // Specific error from the OpenAI service:
            res.status(error.response.status).send(error.response.data); 
        } else {
            // Unexpected error (network issues, etc.)
            res.status(500).send('Something went wrong');
        }
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

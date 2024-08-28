import mongoose from 'mongoose';
import { envVars } from '../constants/envVars.js';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
    const connectionLink = `mongodb+srv://${env(envVars.MONGODB_USER)}:${env(envVars.MONGODB_PASSWORD)}@${env(envVars.MONGODB_URL)}/${env(envVars.MONGODB_DB)},
    ?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(connectionLink);
        console.log('Mongo connection successfully established!');
    } catch (error) {
        console.log('MongoDB connection error', error);
        throw error;
    }
};
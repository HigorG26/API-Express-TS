const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3001,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.6gvoecb.mongodb.net/?retryWrites=true&w=majority`,
    env: "development"
}
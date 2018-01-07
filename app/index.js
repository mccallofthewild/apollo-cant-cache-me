export const disableCache = client => {
    const apolloQuery = client.query.bind(client);
    client.query = async (...args) => {
        await client.cache.reset();
        return apolloQuery(...args);
    };
    return client;
};
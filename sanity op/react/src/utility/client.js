import sanityClient from "@sanity/client";

const options = {
    projectId: "36h8nj65",
    dataset: "production"
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE === 'production',
});

export default client;
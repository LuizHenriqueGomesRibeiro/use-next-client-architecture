import { ApiEndpoint } from "@caucolum/next-client-architecture";

export const BASE_URL = "https://dog.ceo/api";

export const api = {
    random_image: {
        url: 'https://dog.ceo/api',
        authenticated: false,
        method: 'get'
    }
} as const satisfies Record<string, ApiEndpoint>;
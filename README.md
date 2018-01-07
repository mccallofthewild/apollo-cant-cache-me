# Apollo Can't Cache Me
> A library for disabling Apollo Client Cache.

## Usage

```javascript
import { ApolloClient } from 'apollo-client'
import { disableCache } from 'apollo-cant-cache-me'

const GRAPHQL_URI = 'http://localhost:8080/graphql'

export const client = disableCache(
    new ApolloClient({
        link: new HttpLink({
            uri: GRAPHQL_URI
        }),
        cache: new InMemoryCache({
            dataIdFromObject: object => object.__id
        })
    })
);
```
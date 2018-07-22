# Passing Arguments to a GraphQL Query
----

This example demonstrate the use of `GraphQLList` in a GraphQL query as well as Mutations with `GraphQLInputObjectType`

- Supported GraphQL Queries include:
```javascript
query {
  videos {
    id
    title
    duration
    watched
  }
}
```

```javascript
query {
  video(id:"U3BpZGVybWFuIEhvbWVjb21pbmc=") {
    id
    title
  }
}
```

- Supported GraphQL Mutations:
```javascript
mutation M {
  createVideo(video: {
    title: "Spiderman Homecoming",
    duration: 3000,
    watched: false
  }) {
    id
    title
    duration
  }
}
```

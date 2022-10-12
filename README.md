# Full Stack GraphQL Project

> A simple MERN stack project with GraphQL

Screenshot

![Screenshoot](?raw=true)

[Live Demo]()

## Built With

- Express JS
- GraphQL
- ReactJS
- MongoDB

To get a local copy up and running follow these simple example steps.

### Prerequisites

```bash
git clone
```

## Getting Started

First, create MongoDB, next, set the MongoDB connection string, then run the development server:

```bash

npm run dev
```

Use Graphql PlayGround [http://localhost:5000/graphql](http://localhost:500/graphql)

### Query

```raw

query getAllClients{
  clients {
    id
    name
    email
    phone
  }
}
```

### Mutation

```raw

mutation {
  createClient(name: "Yaseen Akbari", email: "yaseen@info.com", phone: "+93 79 000 0000"){
    id
    name
    email
    phone
  }
}
```

👤 **Yaseen Akbari**

- GitHub: [@githubhandle](https://github.com/akbari4yaseen)
- Twitter: [@twitterhandle](https://twitter.com/AkbariYaseen)
- LinkedIn: [LinkedIn](https://linkedin.com/in/yaseen-akbari)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

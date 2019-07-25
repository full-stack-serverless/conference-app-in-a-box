# Conference App in a Box - Expo

This is the Expo version. To view the React Native CLI version, click [here](https://github.com/dabit3/conference-app-in-a-box).

> This repo goes along with my Dev.to post titled ["Introducing Conference App in a Box"](https://dev.to/dabit3/introducing-conference-app-in-a-box-kgj)

#### Deploy a full stack & cross-platform mobile app for your next event in minutes.

🛠 Built with React Native, GraphQL, AWS Amplify, & AWS AppSync

> Follow me on [Twitter at @dabit3](https://twitter.com/dabit3) to keep up with my future projects as well as updates and new features added to this one!

### Features

⚡️ Real-time chat   
👾 Themeable & customizable   
👮‍♂️ Authentication & Profile view   
🔥 Serverless back end   
🚀 GraphQL   
💻 Deploy back end in minutes

![](./src/assets/confapps1.jpg)
![](./src/assets/confapps2.jpg)
![](./src/assets/confapps3.jpg)

## Deploy the back end and run the app

1. Clone the repo, check out the Expo branch, & install the dependencies

```sh
~ git clone https://github.com/dabit3/conference-app-in-a-box.git

~ cd conference-app-in-a-box

~ git checkout expo

~ npm install
```

2. Initialize and deploy the Amplify project

```sh
~ amplify init

? Enter a name for the environment: dev (or whatever you would like to call this env)
? Choose your default editor: <YOUR_EDITOR_OF_CHOICE>
? Do you want to use an AWS profile? Y

~ amplify push

? Are you sure you want to continue? Y
? Do you want to generate code for your newly created GraphQL API? N

> We already have the GraphQL code generated for this project, so generating it here is not necessary.
```

3. Start the app

```sh
~ expo start
```

## To populate the database with your conference speakers

1. Sign up in the app after following the previous steps

2. Open the AppSync console:

```sh
~ amplify console api
```

3. Click on __Queries__ to open the GraphiQL Editor. When prompted to "Login with User Pools", you can login with your new username and use the `aws_user_pools_web_client_id` located in __aws-exports.js__ for the ClientId.

4. Create a new talk with the following GraphQL mutation:

```graphql
mutation createTalk {
  createTalk(input: {
    name: "Performance In React Native",
    summary: "In this talk, we will look at the various tips and tricks for taking full advantage of React Native and using the performance attributes of the new architecture.",
    speakerName: "Ram Narasimhan",
    speakerBio: "Software Engineer at Facebook",
    time: "9:00 AM - 9:30 AM",
    timeStamp: "1573491600",
    date: "November 10",
    location: "Armory",
    speakerAvatar: "https://pbs.twimg.com/profile_images/875450414161772544/UjefWmmL_400x400.jpg"
  }) {
    id name speakerBio speakerName speakerAvatar location date time timeStamp
  }
}
```

5. Query for all talks with the following GraphQL query:

```graphql
query listTalks {
  listTalks {
    items {
      name
      summary
      speakerName
      speakerBio
      time
      timeStamp
      date
      location
      speakerAvatar
    }
  }
}
```

6. Update a talk with the following GraphQL mutation:

```graphql
mutation updateTalk {
  updateTalk(input: {
    id: "<TALK_ID>"
    name: "Performance in React Native & GraphQL"
  }) {
    id name
  }
}
```

7. Delete a talk with the following GraphQL mutation:

```graphql
mutation deleteTalk {
  deleteTalk(input: {
    id: "<TALK_ID>"
  }) {
    id
  }
}
```

## To customize with your theme and logo

1. Open __src/theme.js__ and replace the _highlight_ & _primary_ colors.

2. Replace __src/assets/logo.jpg__ with your logo.

## To customize the GraphQL schema

This schema can be edited. If your event needs additional fields, you can update the backend by doing the following:

1. Update the schema (located at __amplify/backend/api/rnconfinabox/schema.graphql__).

2. Redeploy the back end:

```sh
~ amplify push
```

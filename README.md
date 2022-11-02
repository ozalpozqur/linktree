# Social Card APP with React & Altogic

## Introduction
**Altogic** is a Backend as a Service (BaaS) platform and provides a variety of services in modern web and mobile development. Most of the modern applications using React or other libraries/frameworks require to know the identity of a user. And this necessity allows an app to securely save user data and session in the cloud and provide more personalized functionalities and views to users.

Altogic has an Authentication service that integrates and implements well in JAMstack apps. It has a ready-to-use Javascript client library, and it supports many authentication providers such as email/password, phone number, magic link, and OAuth providers like Google, Facebook, Twitter, Github, etc.,

In this tutorial, we will implement email/password authentication with React and take a look how as a React developer we build applications and integrate with Altogic Authentication.

After completion of this tutorial, you will learn:

* How to create sample screens to display forms like login and signup.
* How to create a home screen and authorize only logged-in users.
* How to create different routes using the react-router-dom.
* How to create an authentication flow by conditionally rendering between these pages whether a user is logged-in or not.
* How to update user profile info and upload a profile picture
* And we will integrate Altogic authentication with the email/password method.

If you are new to React applications, this tutorial is definitely for you to understand the basics and even advanced concepts.


## Prerequisites
* Altogic account (if you have not one yet, you can create an account by sign-in up to **Altogic**)
* Any text editor or IDE (WebStorm, VsCode, Sublime, Atom, etc.)
* Basic knowledge of Javascript and React

## Creating an Altogic App
We will use Altogic as a backend service platform, so let’s visit [Altogic Designer](https://designer.altogic.com/) and create an account.
![Application](public/github/1-applications.png)

After creating an account, you will see the workspace where you can access your apps.

Click + New app and follow the instructions;

1. In the App name field, enter a name for the app.
2. Enter your subdomain.
3. Choose the deployment location.
4. And select your free execution environment pricing plan.

![Create App](public/github/2-create-app.png)

Then click Next and select Basic Authentication template. This template is creates a default user model for your app which is required by [Altogic Client Library](https://github.com/altogic/altogic-js) to store user data and manage authentication.

Then click Next and select Basic Authentication template. This template is based on session authentication and highly recommended to secure your apps.
![Choose Template](public/github/3-choose-template.png)

Then click Next to confirm and create an app.

Awesome! We have created our application; now click/tap on the **newly created app to launch the Designer.**

> This is the only configuration we need to do in Altogic Designer. In order to access the app and use the Altogic client library, we should get envUrl and clientKey of this app.
Click the **Home** icon at the left sidebar to copy the envUrl and clientKey.

![Client Keys](public/github/4-client-keys.png)

You can see the preview of the app here: [https://linktree-alpha.vercel.app](https://linktree-alpha.vercel.app)

## Previews
![picture alt](public/github/preview.png 'Preview image of the app')

## Features

1. Authentication
2. Create Link
3. Delete Link
4. Edit Link
5. Update Profile

## Learn More

To learn more about Altogic and React.js, you can take a look at the following resources:

-   [Altogic Client API Reference](https://clientapi.altogic.com/v2.2.0/modules.html) - learn about Altogic Client Library features
-   [Altogic Docs](https://www.altogic.com/docs/) - learn about how to design your backend in Altogic
-   [Altogic Client Library](https://www.altogic.com/client/) - learn about how to design your backend in Altogic
-   [React.js Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.js features and API.

## Contribution

Your feedback and contributions are welcome! Please open a pull request for contributions. If you need the backend for this app, you can contact us at [Discord Server](https://discord.gg/zDTnDPBxRz).


## Conclusion
Congratulations!✨

You had completed the most critical part of the Authentication flow, which includes private routes, sign-up, sign-in, and sign-out operations.

If you have any questions about Altogic or want to share what you have built, please post a message in our [community forum](https://community.altogic.com/home) or [discord channel](https://discord.gg/zDTnDPBxRz).


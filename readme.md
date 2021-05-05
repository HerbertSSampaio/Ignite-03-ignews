<h3 align="center">
  Ig.news
</h3>

<p align="center">Technology Blog</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

<p style="color: red;">
Ig.news is a technology blog with full posts for subscribers and preview posts for visitors. Payment is made by Stripe using a credit card. The posts are made by Prismic CMS.
</p>
<img alt="Tela do aplicativo" src="https://github.com/HerbertSousa/Ignite-03-ignews/blob/main/public/ignews.gif" width="100%" />

## 🚀 Technologies

Technologies that I used to develop this web client

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/docs)
- [Next-Auth](https://next-auth.js.org/getting-started/example)
- [FaunaDB](https://docs.fauna.com/fauna/current/start/index.html)
- [Prismic](https://prismic.io/docs)
- [Stripe](https://stripe.com/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [React Icons](https://github.com/react-icons/react-icons)
- [Axios](https://github.com/axios/axios)

## 💻 Getting started

### Requirements

- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)
- One instance of [FaunaDB](https://fauna.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/HerbertSousa/Ignite-03-ignews.git && cd Ignite-03-ignews
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Start the client
$ yarn dev

# Listen stripe subscribe
$ stripe listen --forward-to localhost:3000/api/webhooks

```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Herbert De Sousa 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/herbert-sampaio-5ba26816a/)

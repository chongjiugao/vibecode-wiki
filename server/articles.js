const articles = [
  {
    slug: "javascript",
    title: "JavaScript",
    summary:
      "JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web.",
    categories: ["Programming Languages", "Web Technology"],
    content: `JavaScript, often abbreviated as JS, is a programming language and core technology of the [[World Wide Web]], alongside HTML and CSS. It is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.

## History

JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997. The development of the language has been closely tied to the evolution of the [[Internet]] and web browsers.

## Features

JavaScript is a multi-paradigm language. It supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

## Modern JavaScript

Modern JavaScript development often involves the use of frameworks and libraries such as [[React]], [[Node.js]], Angular, and Vue.js. The language has evolved significantly since its creation, with major updates in ECMAScript 2015 (ES6) and subsequent yearly releases.

## Usage

JavaScript is used for:
- Client-side web development
- Server-side development with [[Node.js]]
- Mobile application development
- Desktop application development
- Game development

JavaScript remains one of the most popular programming languages in the world, powering the interactive elements of virtually every modern website.`,
  },
  {
    slug: "react",
    title: "React",
    summary:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    categories: ["Software Libraries", "Web Technology"],
    content: `React (also known as React.js or ReactJS) is a free and [[Open Source|open-source]] front-end [[JavaScript]] library for building user interfaces based on components. It was created by Jordan Walke, a software engineer at Meta (formerly Facebook).

## Overview

React allows developers to create large web applications that can change data without reloading the page. Its main goal is to be fast, scalable, and simple. It works only on user interfaces in the application, corresponding to the view in the model–view–controller (MVC) pattern.

## Key Concepts

### Components
React code is made of entities called components. Components are reusable and can be nested inside other components to allow complex applications to be built out of simple building blocks.

### JSX
React uses a syntax extension called JSX, which allows developers to write HTML-like code within [[JavaScript]]. JSX produces React "elements" that are rendered to the DOM.

### Virtual DOM
React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This process is called reconciliation.

### Hooks
Introduced in React 16.8, Hooks allow developers to use state and other React features without writing class components. Common hooks include useState, useEffect, and useContext.

## Ecosystem

React has a large ecosystem including:
- React Router for navigation
- Redux and Context API for state management
- [[Node.js]] for server-side rendering
- React Native for mobile development

React is maintained by Meta and a community of individual developers and companies. It is used by many large-scale websites including Facebook, Instagram, Netflix, and Airbnb.`,
  },
  {
    slug: "nodejs",
    title: "Node.js",
    summary:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that runs on the V8 engine.",
    categories: ["Software Platforms", "Web Technology"],
    content: `Node.js is a cross-platform, [[Open Source|open-source]] [[JavaScript]] runtime environment that can execute JavaScript code outside a web browser. It was created by Ryan Dahl in 2009.

## Overview

Node.js lets developers use JavaScript to write command-line tools and for server-side scripting. This unifies web application development around a single programming language, rather than using different languages for server-side and client-side scripts.

## Architecture

Node.js runs on the V8 JavaScript engine (the same engine used in Google Chrome) and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. This makes Node.js particularly well-suited for data-intensive real-time applications.

## npm

Node.js includes npm (Node Package Manager), the world's largest software registry. npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that is shared.

## Common Use Cases

- Web servers and APIs
- Real-time applications (chat, gaming)
- Command-line tools
- Build tools and development workflows
- Microservices architecture

## Frameworks

Popular frameworks built on Node.js include:
- Express.js — minimal and flexible web framework
- Koa — designed by the Express team with async/await support
- Fastify — focused on performance
- NestJS — progressive framework for building efficient server-side applications

## Relationship to Frontend

Node.js plays a central role in modern frontend development, powering tools like webpack, Vite, and Babel. Libraries like [[React]] rely on Node.js for their development toolchains.

Node.js has fundamentally changed how [[JavaScript]] is used, extending it from a browser-only language to a full-stack development platform.`,
  },
  {
    slug: "internet",
    title: "Internet",
    summary:
      "The Internet is a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate.",
    categories: ["Technology", "Networking"],
    content: `The Internet is a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks.

## History

The Internet originated as ARPANET in the late 1960s, funded by the U.S. Department of Defense. It was designed to be a decentralized communication network that could survive partial outages. The network adopted TCP/IP on January 1, 1983, which is considered the official birthday of the Internet.

## How It Works

The Internet works by using a packet routing network that follows Internet Protocol (IP) and Transport Control Protocol (TCP). Data is broken into small packets, sent across the network through various routes, and reassembled at the destination.

## Key Technologies

- **TCP/IP**: The fundamental communication protocols
- **DNS**: The Domain Name System translates human-readable names to IP addresses
- **HTTP/HTTPS**: Protocols used by the [[World Wide Web]]
- **Email**: One of the earliest Internet applications

## The World Wide Web

The [[World Wide Web]], invented by Tim Berners-Lee in 1989, is the most widely used information system on the Internet. While often confused with the Internet itself, the Web is actually a service that runs on top of the Internet infrastructure.

## Impact

The Internet has transformed virtually every aspect of modern life, including:
- Communication and social interaction
- Commerce and business
- Education and research
- Entertainment and media
- Software development, including technologies like [[JavaScript]], [[React]], and [[Node.js]]

Today, billions of people worldwide use the Internet daily, making it one of the most transformative technologies in human history.`,
  },
  {
    slug: "world-wide-web",
    title: "World Wide Web",
    summary:
      "The World Wide Web is an information system that enables content sharing over the Internet through user-friendly ways.",
    categories: ["Technology", "Web Technology"],
    content: `The World Wide Web (WWW or simply the Web) is an information system that enables content sharing over the [[Internet]] through user-friendly ways meant to appeal to users beyond IT specialists and hobbyists.

## History

The World Wide Web was invented by English computer scientist Sir Tim Berners-Lee while working at CERN in 1989. He wrote the first web browser in 1990 and the first website went live on August 6, 1991. Berners-Lee published the project on an [[Open Source|open]] basis, which was crucial to its rapid adoption.

## How It Works

The Web works through three core technologies:

### HTML
HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.

### URLs
Uniform Resource Locators provide a way to reference and locate web resources.

### HTTP
HyperText Transfer Protocol is the application protocol used to transmit web pages and other content.

## Web Browsers

A web browser is the software used to access the Web. Major browsers include Chrome, Firefox, Safari, and Edge. Modern browsers execute [[JavaScript]] to provide interactive web experiences, often built with libraries like [[React]].

## Evolution

- **Web 1.0** (1990s): Static pages, read-only content
- **Web 2.0** (2000s): Dynamic content, social media, user-generated content
- **Web 3.0** (2020s): Decentralized web, semantic web technologies

## Modern Web Development

Modern websites are built using technologies including:
- HTML, CSS, and [[JavaScript]] for the frontend
- [[Node.js]], Python, or other languages for the backend
- Frameworks like [[React]], Angular, and Vue.js
- Cloud hosting and content delivery networks

The World Wide Web remains one of the most significant inventions in the history of technology, fundamentally changing how humanity accesses and shares information.`,
  },
  {
    slug: "open-source",
    title: "Open Source",
    summary:
      "Open source is source code that is made freely available for possible modification and redistribution.",
    categories: ["Software Development", "Technology"],
    content: `Open source is source code that is made freely available for possible modification and redistribution. Open-source software includes the permission to use the source code, design documents, or content of the product.

## Definition

The Open Source Initiative (OSI) defines open source through the Open Source Definition, which includes criteria such as:
- Free redistribution
- Source code availability
- Allowance of derived works
- No discrimination against persons, groups, or fields of endeavor

## History

The open-source movement has its roots in the free software movement started by Richard Stallman in 1983 with the GNU project. The term "open source" was coined in 1998 by Christine Peterson to make the concept more accessible to businesses.

## Notable Open-Source Projects

Many of the world's most important software is open source:
- Linux — the most widely used server operating system
- [[JavaScript]] engines (V8, SpiderMonkey)
- [[React]] — UI library by Meta
- [[Node.js]] — JavaScript runtime
- Git — version control system
- Firefox — web browser
- Wikipedia — which runs on the open-source MediaWiki software

## Licenses

Common open-source licenses include:
- MIT License — permissive, minimal restrictions
- Apache License 2.0 — permissive with patent protection
- GNU GPL — copyleft, requires derivative works to be open source
- BSD Licenses — permissive, similar to MIT

## Impact on Software Development

Open source has fundamentally changed how software is built. Modern development relies heavily on open-source tools, libraries, and frameworks. The [[World Wide Web]] itself was built on open standards, and technologies like [[JavaScript]], [[React]], and [[Node.js]] are all open-source projects.

## Collaboration Model

Open-source development typically uses platforms like GitHub for collaboration, with contributions made through pull requests, code reviews, and issue tracking. This distributed model has proven highly effective for building reliable, high-quality software.`,
  },
];

module.exports = articles;

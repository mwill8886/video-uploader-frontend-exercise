# Videos App
The code we'll be working on implements a basic application that lets you share and react to videos. Currently it supports YouTube urls i.e. `https://www.youtube.com/watch?v=kfVsfOSbJY0` and has the following pages

| Route | Page |
| - | - |
| [/videos/new](http:localhost:8910/videos/new) | Create a video  |
| [/videos/:id](http:localhost:8910/videos/1) | View a video |
| [/videos/:id/edit](http:localhost:8910/videos/1/edit) | Edit a video |
| [/videos](http:localhost:8910/videos) | All the videos |

# Technical Interview
Our goals for the technical interview are to:
- Understand your approach to coding
- Experience collaborating together

Our process has two steps:
1. A live code session where you run the codebase and start going through the bugs.
1. A take home step for you to finish the exercice.

In the [Intro](#intro) section below, we've listed some known bugs and potential feature enhancements. **We do not expect you to do everything listed there during the first step.**  We'll go over as many points as possible and then you will finish the rest as a take home exercice.

# Setup
## Installing dependencies
If you don't already have Yarn and Node.js installed, here's how we recommend installing them:

### **[NVM](https://github.com/nvm-sh/nvm)**
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
$ nvm install 14.18.0
$ nvm alias default 14.18.0
```

### **Yarn**
Instructions on installing Yarn are [here](https://yarnpkg.com/getting-started/install)

## Running the app
1. Install deps and setup db
```
cd videos
echo SESSION_SECRET=putsomeuniquelongstringoftexthereplz > .env
yarn
yarn migrate
```
2. Start the app
```
yarn dev
````

# Intro
## 0. Sign up
Once you are running the app, start by signing up and creating a video:
1. Create an account for yourself by opening [/signup](http://localhost:8910/signup) and entering an email and password.
2. Open [/videos/new](http:localhost:8910/videos/new) and add your first video(s)

## 1. Bugs
- [x] The [Nav](./web/src/components/Nav/Nav.tsx) component should show the currently active link in bold but the logic is broken
- [x] On the [new video page](http:localhost:8910/videos/new) the `description` field isn't getting properly sent in the [mutation](./web/src/components/Video/NewVideo/NewVideo.tsx#L26-L28)
- [x] The [edit and delete buttons](./web/src/components/Video/Video/Video.tsx#L70-L78) on the video page are different heights
- [x] The [delete video](./api/src/services/videos/videos.ts#L89-L91) resolver isn't working correctly (backend issue as a bonus)

## 2. Features
- [x] Show the `createdAt` timestamp on the video page more readably
- [x] Use [Tailwind](https://tailwindcss.com/docs/responsive-design) to make the UI responsive
- [x] The `/videos` and `/video/:id` pages need a bit of **oomph**. Please help! **Also, please do not spend more than 30 minutes on this!**
- [x] There is a commented out `imageUrl String?` field on the `Video` schema [model](./api/db/schema.prisma#L30). Uncomment that, run `yarn migrate`, and then add support for passing it to the `createVideo` and `updateVideo` mutations. Request the `imageUrl` field on the `/videos` [page](https://github.com/myria-us/videos/blob/main/web/src/components/Video/VideosCell/VideosCell.tsx#L8-L21) so you can display it as the video thumbnail when it has been set on a video (frontend+backend feature as a bonus)

## 3. Sharing your code
1. Zip the folder and send it back by email.

# Notes
You may find the following notes helpful. We suggest skimming the [File Structure](#file-structure) and [Commands](#commands) sections to orient yourself and then jump into coding, as there are existing patterns in the codebase you should be able to follow for building your feature.

## File Structure
This is a [RedwoodJS](https://redwoodjs.com/)-based project, which is what we use for our production app. The code is loosely based on the [Redwood Tutorial](https://redwoodjs.com/docs/tutorial/). The app uses [React](https://reactjs.org/) and [Tailwind](https://tailwindcss.com/docs/utility-first) on the frontend, [Node.js](https://nodejs.org/en/docs/) and [GraphQL](https://graphql.org/) for the API, and [Prisma](https://www.prisma.io/docs/) for reading from and writing to a [SQLite](https://www.sqlite.org/index.html) database. Here are some key directories and files you will want to keep in mind. There are more details are in [Redwood docs](https://redwoodjs.com/docs/tutorial/chapter1/file-structure).

| Path | Purpose |
| - | - |
| [/api/db/schema.prisma](./api/db/schema.prisma) | [Prisma schema](https://www.prisma.io/docs/concepts/components/prisma-schema) which defines the database models |
| [/api/src/graphql/schema.sdl.ts](./api/src/graphql/schema.sdl.ts) | [GraphQL schema file](https://graphql.org/learn/schema/) which defines the API interface |
| [/api/src/services/videos/videos.ts](./api/src/services//videos/videos.ts) | `videos` service where your [GraphQL resolvers](https://redwoodjs.com/docs/graphql#server-side) are implemented |
| [/web/src/Routes.tsx](./web/src/Routes.tsx) | Frontend [Routes](https://redwoodjs.com/docs/router) file |
| [/web/src/components/](./web/src/components) | Frontend [React](https://reactjs.org/) components |
| [/web/src/helpers/](./web/src/helpers) | Frontend helpers (functions, enums, hooks, etc.) |
| [/web/src/layouts/](./web/src/layouts) | Frontend [React](https://reactjs.org/) [Layout](https://redwoodjs.com/docs/tutorial/chapter1/layouts) components |
| [/web/src/pages/](./web/src/pages) | Frontend [React](https://reactjs.org/) [Page](https://redwoodjs.com/docs/tutorial/chapter1/first-page) components |

## Commands
Here are some commands you may find useful

### Run the app
```
yarn dev
```

### Migrate the database
If you make changes to [/api/db/schema.prisma](./api/db/schema.prisma) you will want to run this to sync your database with the schema. If needed it will generate and apply a migration.
```
yarn migrate
```

### Open Prisma studio
This will open a web UI to view and edit the contents of the database
```
yarn studio
```

### Reset the db
This will wipe / reset the db
```
yarn reset
```

### Generate a component
This will generate a new react component named `{name}` in [/web/src/components/](./web/src/components)
```
yarn rw g component <name>
```

### Generate a page
This will generate a new react component named `{name}Page` (with optional `<path>` for the associated route) in [/web/src/pages/](./web/src/pages)
```
yarn rw g page <name> <path>
```

### Adding a frontend dependency
```
yarn workspace web add <dep name>
```

### Adding a backend dependency
```
yarn workspace api add <dep name>
```

### Clean and reinstall deps
In case you run into any issues running the app after installing dependencies, this is worth trying.
```
yarn clean
yarn
```

## Documentation
- [README generated by Redwood](./Redwood.md)
- [Redwood](https://redwoodjs.com/docs/index)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/docs/utility-first)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/docs/)
- [Node.js](https://nodejs.org/en/docs/)
- [SQLite](https://www.sqlite.org/index.html)
- [Yarn](https://yarnpkg.com/)

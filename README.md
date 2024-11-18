# ChainUI

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/chaindrift/chainui)
![ChainUI CI](https://github.com/chaindrift/chainui/workflows/ChainUI%20CI/badge.svg)

Chaindrift UI build with [Vue.js](https://vuejs.org/) and [boostrap-vue](https://bootstrap-vue.org/).

## WARNING

This project is still in its early stages (consider it alpha), and is not yet stable nor recommended to be used for production usages.

## Run this project

Using ChainUI, does require [chaindrift](https://github.com/chaindrift/chaindrift) to be setup and running.
In newer versions (2021.2 and newer), chainUI is builtin to chaindrift, so manual setup of chainUI will no longer be necessary unless you want to modify chainUI.
Instructions for this end-user setup can be found in the [chaindrift API documentation](https://www.chaindrift.io/en/stable/rest-api/).

### Running a standalone version of ChainUI

Using Docker, you can also run a pre-built docker image of ChainUI.

```bash
docker compose up -d
```

This will start a pre-built container with ChainUI running on port 3000 - which defaults to the latest version of chainUI.
You can use `docker compose pull` to update to the latest version of the UI.

Please note: This is a standalone version of ChainUI, and will still require a correctly configured chaindrift bot.
You'll need to correctly configure [CORS](https://www.chaindrift.io/en/stable/rest-api/#cors) in chaindrift to allow ChainUI to connect to the API.

## Developer project setup

It will require [chaindrift](https://github.com/chaindrift/chaindrift) to be running on the same host with the API enabled under (`localhost:8080`). You can either use the webpack proxy (port can be changed in `vue.config.js`) - or connect directly to the API (recommended).

You will also have to have CORS for chaindrift configured correctly based on the [chaindrift documentation](https://www.chaindrift.io/en/stable/rest-api/#cors).
Most likely, the correct entry will be `http://localhost:3000` or `http://127.0.0.1:3000` - but the URL must match the URL you use to access ChainUI.
Ports can vary, so check the URL you're using.

### Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run dev
```

### Compiles and minifies for production

```
pnpm run build
```

### Lints and fixes files

```
pnpm run lint
```

### Build and run docker version

```
docker-compose build
docker-compose up -d

# Access using http://localhost:3000/
```


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project setup for docker (developing inside dev container) without vscode

### Built dev docker image and run container(s) detached

```
cd .devcontainer
docker-compose up -d
```

### Go inside web-service container and serve

```
docker-compose exec web /bin/bash
```

then

```
pnpm run dev
```

## Project setup for vscode and docker (developing inside dev container) on Linux

The goal is to have a complete dev environment very quickly and isolated.

### Install missing tools if needed

Follow [getting started](https://code.visualstudio.com/docs/remote/containers#_getting-started) section.

### Build your dev container

View > Command palette > Enter: Remote-Containers rebuild container

### Serve your local server

```
pnpm run dev
```

You now have useful vscode extensions, git support, your command history of the project.

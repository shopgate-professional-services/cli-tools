# Shopgate Professional Services - Cli Tools

## Description
This npm package offers CLI tools which helps creating different parts of the code during the Shopgate Connect extensions development.

## Quick start / Installation
### Installation
This tools is meant to be installed only as a global npm package. Please install it with following command.
```bash
npm i -G @shopgate-ps/cli-tools
```

### Quick start
In order to execute tools simply type `sps` in your terminal.
Typing just the `sps` would list all possible commands with their description. If any command need additional params you'd be asked during the execution.

When calling actual commands, terminal must be CWD into your extension root folder, e.x:
```bash
cd ~/myDev/extensions/MyExtension
```

Before every command execution it would check if there is `frontend` or `backend` folder accessible. If not it would abort with an error message.

#### Danger zone
This tool *changes your files and directories*. Make sure to run this tool when your change on a clean directory. Always commit or stash your changes before using it so in case of ungraceful failure you'd be able to reset to previous state easily.

Even though it's not likely, this tool _might_ break you system. Use at your own risk.

## Frontend Commands
### sps add component
Creates component in the nearest `components` folder. If folder doesn't exists, it would crate one.

#### Options
- Component name - Please use uppercase names, e.x. "MyComponent"
- Class or function? - Choose between class or functional components.
- With styles? - Choose if styles should be autogenerated.
- With connector? - Choose if connector should be autogenerated.

### sps add route
Crates new route with Route and Page component. Adds a PATTERN constant. Makes sure all is configured in extension-config.

### sps add language (alias: add locale)
Adds new language from an existing template (en-US or first found).
#### Options
- Language code: e.x. pl-PL (iso format)

#### Options
- Route/Page name - Just the name "Stars" would create `StarsRoute`, `StarsPage` and `STARS_PATTERN`
- Route pattern - Route pattern, e.x. `/stars'

### sps add subscriptions (alias: add subscription)
Creates subscriptions files. Would fail if there is already subscriptions file.

### sps add redux entity (alias: add redux)
Creates redux entity: reducer, selectors, actions.

### sps add portal
Creates a portal position file and relared extension-config.json entry.

## Backend commands
### sps add hook
Creates new hook step.

### sps add pipeline
Creates new empty pipeline with a single step file.


## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Professional Services - Cli Tools is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.


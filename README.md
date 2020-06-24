# Shopgate Professional Services - Cli Tools

## Description
This npm package offers CLI tools which helps creating different pieces of code during the development of Shopgate Connect extensions.

## Quick start / Installation
### Installation
It is recommended to install it globally. Please install it using the following command.
```bash
npm i -g @shopgate-ps/cli-tools
```

### Quick start
In order to execute CLI tools simply type `sps` in your terminal.
Typing the `sps` command by its own lists all possible commands with their respective description. If any command needs additional params, you'll be asked during the execution.

When calling commands, the terminal's CWD must be your extension root folder, containing the extension's config file (`extension-config.json`), e.g.:
```bash
cd ~/myDev/extensions/MyExtension
```

Before every command execution it checks if there is a `frontend` or `backend` folder accessible. If not it aborts with an error message.

#### Danger zone
This tool *changes your files and directories*. Make sure to only run it when your repository is in a clean state. Please make sure to always commit or stash your changes before using it, so in case of ungraceful failure you're able to reset to the previous state without any issue.

Even though not likely, this tool _might_ break your system. Use is at your own risk.

## Frontend Commands
### sps add component
Creates a component inside of the nearest `components` folder. If this folder doesn't exist, it creates one.

#### Options
- Component name - Please use pascal case names, e.g. "MyComponent"
- Class or function? - Choose between class or functional component.
- With styles? - Choose if styles should be auto-generated.
- With connector? - Choose if a connector should be auto-generated.

### sps add route
Creates a new route consisting of a Route and a Page component. Adds a PATTERN constant. Makes sure it's all configured in the `extension-config.json` file.

#### Options
- Route/Page name - The name "Stars" results in `StarsRoute`, `StarsPage` and `STARS_PATTERN`
- Route pattern - The route's path pattern, e.g. `/stars'

### sps add language (alias: add locale)
Adds a new language from an existing template (en-US or first found).

#### Options
- Language code: e.g. pl-PL (iso format)

### sps add subscriptions (alias: add subscription)
Creates subscription files. It fails if the file already exists.

### sps add redux entity (alias: add redux)
Creates a redux entity: `reducer`, `selectors`, `actions`.

### sps add portal
Creates a portal position file and a respective `extension-config.json` entry.
#### Options
- name: portal name, e.x. `page.content.after` will create PageContentAfter file in the `portals` frontend folder and respective `extension-config.json` entry.

## Backend commands
### sps add hook
Creates a new hook step.

### sps add pipeline
Creates a new empty pipeline pointing to a single step file.

## Interactive commands

- Type in console `spsi`
- Choose area for sub-commands
- Choose command to execute


## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Professional Services - Cli Tools is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.


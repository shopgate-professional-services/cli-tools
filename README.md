# Shopgate Professional Services - Cli Tools

## Description
Here soon will have place Cli Tools dedicated for generating parts of Shopgate Connect extensions, SGConnect helpers and everything else that speeds up our work.

## Commands
### sps create component
Creates component in the nearest `components` folder. If folder doesn't exists, it would crate one.

#### Options
- Component name - Please use uppercase names, e.x. "MyComponent"
- Class or function? - Choose between class or functional components.
- With styles? - Choose if styles should be autogenerated.
- With connector? - Choose if connector should be autogenerated.

### sps create route
Crates new route with Route and Page component. Adds a PATTERN constant. Makes sure all is configured in extension-config.

### sps create language (alias: create locale)
Adds new language from an existing template (en-US or first found).
#### Options
- Language code: e.x. pl-PL (iso format)

#### Options
- Route/Page name - Just the name "Stars" would create `StarsRoute`, `StarsPage` and `STARS_PATTERN`
- Route pattern - Route pattern, e.x. `/stars'

### sps create subscriptions (alias: create subscription)
Creates subscriptions files.
#### Options
This command has no options. Would fail if there is already subscriptions file.

### sps create redux entity (alias: create redux)
Creates redux entity: reducer, selectors, actions.
#### Options
This command has no options.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.


# Intro
This repository exists in order to learn about how to migrate an existing Ruby on Rails project to use React with Typescript and TailwindCSS setup.

# How this project created
## Create a new Ruby on Rails project
Generate new project using rails command
```
rails new blog
```
or
```
rails new blog --skip-javascript
```

## Setup React on Rails
Follow [this](https://www.shakacode.com/react-on-rails/docs/guides/installation-into-an-existing-rails-app/) to learn more about how to add `react_on_rails` to an existing rails project.

### Additional notes
If the rails project is generated without skipping the javascript, we might  hit `Shakapacker` error complaining about missing `application.js`. The reason is that, webpack doesn't include `application.js` in the bundle.

Looking at `webpacker.yml`. We have the configuration:
```
source_entry_path: packs
```

Hence, to solve this problem, we need to move the `application.js` file to the `packs` folder. After moving into `packs`, webpack will start to pickup the file.

After making this change, new error about missing packages might show up. To easily solve this, simply run `yarn add <package>` whatever missing packages.

## Installing TailwindCSS
At this point, we should have React setup in the project. However, we will setup using the [guide](https://tailwindcss.com/docs/guides/ruby-on-rails) for Ruby on Rails framework.

After completing the installation, make sure the content path is set correctly in the `tailwind.config.js` file.

```
module.exports = {
  content: [
    ...,
    './app/javascript/**/*.{jsx,tsx}'
  ],
  ...
```

## Typescript
To use Typescript in the project, we need to make sure Webpack is able to pickup and bundle those typescript files. There is a easy guide on `Shakapacker` [documentation](https://github.com/shakacode/shakapacker#typescript).


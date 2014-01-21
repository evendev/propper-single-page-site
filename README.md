Static-Starter
==============

A starter for template design with Twitter Bootstrap 3 and Harp.

## Installation

First clone the repository to your local workstation.

        $> git clone https://github.com/jamessonbros/static-starter my-project

Then install `npm` dependencies:

    $ cd path/to/my-project
    $ npm install

## Running a local server

Just use Harp to run a local server instance. By default Harp will serve on port 9000.

    $ cd path/to/my-project
    $ harp server

You should be able to navigate to [localhost:9000](http://localhost:9000) to see your site.

## Harp documentation

See [Harp](http://harpjs.com/docs/) for more info.

## Global data

You'll notice the site's title is set to "My Project" by default. Edit `harp.json` in the project root to change this data.

You can add arbitrary JSON data to this file, and all `public` files will have access to it.

I prefer to keep global site data (like name, tagline, email address for contact page) in `harp.json` under a key of `site`, just to keep it cleaner and to avoid naming collisions later on.

See [Harp](http://harpjs.com/docs/development/globals) for more on global data.

You can also set up a `_data.json` file in any directory within `public`, and the files within that directory will have access to that data. 

See [Harp](http://harpjs.com/docs/development/metadata) for more.

## Layouts

Modify header, footer, and navigation in the main layout file: `public/_layout.ejs`.

## _[filename].[ext]

Since `_layout.ejs` starts with an underscore, Harp will not serve or build this file directly. Simply prefix any file with an underscore `_` and Harp will not serve or build it. 

See [Harp](http://harpjs.com/docs/development/layout) for more on layouts.

## Creating new pages

To create a new page, simply create a file in `public` with an extension of `ejs`.

For example, to create a contact page, you'd create `public/contact.ejs`. You'll then be able to view that page at [localhost:9000/contact](http://localhost:9000/contact). 

You'll probably want to add a link in the navigation menu, found in the layout file: `public/_layout.ejs`.

## Deployment

Deploying a static build of harp is easy using [grunt-harp](https://github.com/shovon/grunt-harp) and [grunt-rsync](https://github.com/jedrichards/grunt-rsync). See those repositories for more info.

### Setup credentials

First, copy `sample-secrets.json` to `secrets.json` and fill in with your server's credentials. 

    {
      "rsync": {
        "stage": {
          "dest": "path/to/server/webroot",
          "host": "user@example.com"
        }
      }
    }

You may create as many targets as you'd like. See the `grunt-rsync` repo for more, just make sure you add in the appropriate credentials into your `secrets.json` file.

### Deploying

Deploying is easy using the grunt task `deploy`. First, `grunt build` your app, then `grunt deploy:[env]`. 

For example, to build and deploy to your `stage` environment:

        $ grunt build
        $ grunt deploy:stage

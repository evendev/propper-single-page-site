Static-Starter
==============

A starter for template design with Twitter Bootstrap 3 and Harp.

## Installation

First clone the repository to your local workstation.

        $> git clone https://github.com/jamessonbros/static-starter my-project

Then install `npm` dependencies:

        $> cd path/to/my-project
        $> npm install

## Running a local server

Just use Harp to run a local server instance. By default Harp will serve on port 9000.

        $> cd path/to/my-project
        $> harp server

You should be able to navigate to [localhost:9000](http://localhost:9000) to see your site.

## Layouts

Modify header, footer, and navigation in the main layout file: `public/_layout.ejs`.

## _[filename].[ext]

Since `_layout.ejs` starts with an underscore, Harp will not serve or build this file directly. Simply prefix any file with an underscore `_` and Harp will not serve or build it. 

## Harp documentation

See [Harp](http://harpjs.com/docs/) for more info.

## Creating new pages

To create a new page, simply create a file in `public` with an extension of `ejs`.

For example, to create a contact page, you'd create `public/contact.ejs`. You'll then be able to view that page at [localhost:9000/contact](http://localhost:9000/contact). 

You'll probably want to add a link in the navigation menu, found in the layout file: `public/_layout.ejs`.
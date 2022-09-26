# tce-template-vue

Template project to quickly get started developing content elements in Vue.

> **:warning: DISCLAIMER**
> The project is in early prototype phase. More info will be added later.

## Description

This project is a starting point used for developing custom content elements
for [Tailor](https://github.com/ExtensionEngine/tailor).
It is intended to get you up and running quickly by bootstraping the application
structure and setting base default properties.

## Requirements

- Node & npm

## Setup

The project is already preconfigured with certain defaults,
however it is necessary to go through some properties and modify the values
for the purposes of your specific custom content element.

#### Instructions

1. Run `npx @tailor-cms/tce-vue` and follow the instructions to setup the project

#### `packages` folder

##### Folder structure
<ul>
  <li>content-element subfolder
    <ul>
      <li>index.ts - contains custom element manifest</li>
      <li>types.ts - contains TypeScript type definitions</li>
    </ul>
  </li>
  <li>display subfolder
    <ul>
      <li>src/components/index.vue - main file for the display version on the content element</li>
    </ul>
  </li>
  <li>edit subfolder
    <ul>
      <li>src/components/index.vue - main file for the edit version of the content element</li>
      <li>src/components/TopToolbar.vue - file for top toolbar used in the edit version, optional</li>
      <li>src/components/SideToolbar.vue - file for side toolbar used in the edit version, optional</li>
    </ul>
  </li>
</ul>

Add code for the edit component of your element to `edit/src/components/index.vue` file. 
If the element supports them, you can also add code for top toolbar and side toolbar 
in the designated files. In the same manner add code for the display component 
to `display/src/components/index.vue` file. You can choose any kind of component composition,
however only root `Edit` and `Display` components can be exposed as a part of the 
element's interface. TypeScript types can be added to support better developer
experience and serve as a documentation for the element. Use the `ElementData` interface in 
`content-element/types.ts` file to specify and list the data that your element requires and manages. 
The `initState` function can optionally be specified to return the initial state of that data.
Make sure to edit the relevant properties of the manifest in `content-element/index.ts` file.

#### `runtime` folder

The intent of the runtime is to provide a development environment outside
of Tailor CMS and other external systems. That way, you're able to get early 
feedback on the element you're building and test it in isolation.
Runtime supports previewing edit and display states.
Look for the comments and placeholders in the code to wire up the components.

#### Used technologies

The project currently uses Vue 3, Vite and Vuetify 3 beta for the runtime.
Note that some featuresfrom the older versions of Vue and Vuetify 
may not be supported or work as expected.
Edit package uses Vue 2 due to Tailor compatibility, while Display package
uses Vue 3. Both are UI framework agnostic.

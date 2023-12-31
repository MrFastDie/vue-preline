# vue-preline

This Vue 3 plugin publishes some tailwind and preline components.

## Recommended Setup

app.ts

    import createVuePlugin from "@mrfastdie/vue-preline";
    import '../node_modules/@mrfastdie/vue-preline/dist/style.css';
    ...
    const app = createApp(App);
    app.use(createVuePlugin())
    app.mount('#app');

If you need the power of fontawesome icons, install that plugin aswell.

There are some global types for `margin` and `padding` defined, as per tailwind doc.
 - `p` padding
 - `pt` padding-top
 - `pr` padding-right
 - `pb` padding-bottom
 - `pl` padding-left
 - `px` padding left and right
 - `py` padding top and bottom

And the same goes for m (margin)

## Components

 - [vp-grid](#vp-grid)
 - [vp-input](#vp-input)
 - [vp-columns](#vp-columns)
 - [timeline](#timeline)
 - [cards](#cards)

### VP-Grid
This is a simple grid component.

Usage:

    <vp-grid :cols="<numberOfCols>" :gap="<numberOfGab"></vp-grid>

### VP-Input
An input field

Usage:

    <vp-input />

Following arguments are supported:
 - `label` a string as label
 - `placeholder` a string as placeholder
 - `type` the input type, defaults to `text`
 - `description` a string as field description
 - `validate` `true`, `false` or `null` if the value should get validated
 - `errText` string or null when validate is `false`
 - `successText` string or null when validate is `true`
 - `icon` a string array represents the icon from `fontawesome`
 - `value` a string which can be used with the `.sync` modifier to get the current value of that field
 
To update a value in the parentNode using the `value` set it up like:

    <script setup lang="ts">
    import {ref} from 'vue';
    
    const parentValue = ref('');
    </script>

Then you can use this childComponent like:

    <vp-input v-model:value="parentValue" />

### vp-columns
Usage:

    <vp-columns columns="cols">entries</vp-columns>

The attribute columns can be one of the following:
 - 1
 - 2
 - 3
 - 4
 - 5
 - 6
 - 7
 - 8
 - 9
 - 10
 - 11
 - 12
 - auto
 - 3xs
 - 2xs
 - xs
 - sm
 - md
 - lg
 - xl
 - 2xl
 - 3xl
 - 4xl
 - 5xl
 - 6xl
 - 7xl
 
### Timeline
The timeline persists out of 3 components. This is the wrapper:

    <vp-timeline-wrapper>Timeline entries</vp-timeline-wrapper>

And the child components for left and right hand side of that timeline:

    <vp-timeline-entry-left>Timeline text</vp-timeline-entry-left>
    <vp-timeline-entry-right>Timeline text</vp-timeline-entry-right>

The child component accepts following arguments:
 - `headline` a string representing the headline
 - `date` a string the date or range
 - `icon` a string array represents the icon from `fontawesome`
 - `iconBackgroundColor` the css background color for the icon
 - `iconTextColor` the css text color for the icon

### Cards
There are currently 3 card components:

    <vp-card-img-top>Card text</vp-card-img-top>
    <vp-card-img-left>Card text</vp-card-img-left>
    <vp-card-img-right>Card text</vp-card-img-right>

The cards accept following arguments:
 - `imgSrc` a string which points to the image you want as your card image
 - `title` a string as title
 - `githubUrl` a string which points to your gitHub repo

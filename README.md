# vue-preline

This Vue 3 plugin publishes some tailwind and preline components.

## Recommended Setup

app.ts

    import createVuePlugin from "@mrfastdie/vue-preline";
    import '../node_modules/@mrfastdie/vue-preline/style.css';
    ...
    const app = createApp(App);
    app.use(createVuePlugin())
    app.mount('#app');

If you need the power of fontawesome icons, install that plugin aswell.


## Components

 - [vp-grid](#vp-grid)
 - [vp-input](#vp-input)
 - [timeline](#timeline)

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
 
### Timeline
The timeline persists out of 3 components. Theres the wrapper:

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

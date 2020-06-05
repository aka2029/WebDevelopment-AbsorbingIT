# Bootstrap Footsteps

# Need to know

-> for using bootstrap cdn, [getBootstrap.com] we put the css stylesheet link provided at this link along with the JS links mentioned. The JS links include jQuery, PopperJs & Bootstrap file included because these are required to execute the work, we look forward to do. [jQuery is also to be done]

-> Default Html size is 16px so 1rem = 16px & multiply accordingly ie 2rem = 16px \* 2

-> The blockquote tag in html is -> the blockquote element defines "a section [within a document] that is quoted from another source"

-> In bootstrap we have 4 different screen sizes : sm(small), md(medium), lg(large), xl(extra large) & for really small screens use the normal notations

-> In "inline-block" You can create a grid of boxes that fills the browser width and wraps nicely. This has been possible for a long time using float , but now with inline-block it's even easier. inline-block elements are like inline elements but they can have a width and height.

-> Making something something invisible is not same display: none. Because none takes it out of the dom and you can't see the space but in invisible it's there but you can't see it.

-> remember margin right will align to the left, & margin left auto will align to the right

-> In bootstrap when we say Pagination, we mean just the UI, we don't have the capability in bootstrap to do the actual working pagination [Pagination: Pagination refers to the concept of breaking a large set of data in smaller chunks so that it can easily be absorbed both by the application and the user.]

-> Media Objects used in small blogs, side bars or news sites

-> Jumbotron : A jumbotron indicates a big grey box for calling extra attention to some special content or information.

-> Grid in bootstrap 3 used Css grid but in bootstrap 4 it uses flexbox.

-> offsetting in grid system is useful for logging screen, where we need a very narrow layout. Moreover, the offset was removed from bootstrap 3 but was brought back with bootstrap 4.

-> Most of the time go with md commands bec then in small screen it will be stacked & that's what we want.

-> While mentioning the total no. cols if we preceed 12 then it automatically wraps include the full version of jQuery because the slim version doesnot include the animate method.

-> For scrollspy

### JavaScript Widgets

-> Carousel Slider: Eg. the header of amazon prime
-> Collapse & Accordion: Eg. the sidebars with index and subparts. & the timetable app [when that expands for mon, tue, etc]
-> Tooltips: Just hover and it shows a message.

This is wierd in bootstrap because somethings have to be initialized (USING jQuery) inorder to make them work, and not required for other.

-> Popovers: actually very similar to tooltips. This also has to be initialized by jQuery just like tooltip.
-> Modals: Eg. the popup login form
-> ScrollSpy & Smooth Scrolling: Eg. when we scroll and reach home, that will be highlighted, similarly for about, services, etc etc. And custom jQuery so that when we click on the navbar it takes us to that section and also provides little bit of animation ie the smooth scrolling.

### Random Stuff

-> when using d-flex the order can be changed by using order-1, order-2 etc
-> In the multiuse website when we had to add photo galary & each photo is gonna open in a light box. The way they're gonna achive that is using "lightbox for bootstrap" -> [Link] "https://ashleydw.github.io/lightbox/"
-> For the testimonials slider at the bottom of the page, use the slick slider -> "https://kenwheeler.github.io/slick/"

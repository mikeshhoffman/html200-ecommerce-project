# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.


## User research

The site's current audience is estimated to be:
*  Daily commuter bicyclists
*  Women
*  Skiers

The site's desired audience is:
*  Bus commuters
*  General audience

The devices and OSs that the website audience is likely to use:
*  iPhone 6 Plus, iOS, on medium-fast cell tower networks
*  Chrome on MacBook Pro on WiFi

The above research was guided by:
<http://www.websitecriteria.com/website_writing_guide_before_you_begin_to_write/identify_the_intended_audience.html>

The above research is used below to prioritize the kinds of devices and contexts that were tested.


## Site testing

Site address: 
<https://mikeshhoffman.github.io/html200-ecommerce-project/>

During development, the site's responsive design and performance was extensively tested and adjusted, on iPhone 6 Plus (both orientations) and on MacBook Pro 13" (Chrome and Firefox, multiple widths).

After development, the site was additionally tested against the above targeted devices or environments, to ensure site quality.
The site rendered as expected, in the additional testing tools.


### Tools used for testing performance

*  <https://www.webpagetest.org> - Tested in Seattle via  Dulles, VA - Chrome browser: Results: Around 1.15 sec. to first view.

*  <https://tools.pingdom.com/> - Stockholm, Sweden: Result: Grade: B (89), load time 1.4 sec, faster than 81% of tested sites.

*  <https://developers.google.com/speed/pagespeed/insights/> - Results: 

Mobile optimization is rated as "Low", 59/100.  The following optimizations are recommended:

   *  Compressing https://mikeshhoffman.github.io/…-project/images/northern-lights-480w.jpg could save 28.1KiB (40% reduction).

   *  Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded 
      resources from local disk rather than over the network.
      For example, leverage browser caching for the following cacheable resources:
      https://mikeshhoffman.github.io/…0-ecommerce-project/images/etro-420w.png (set to 10 minutes)

   *  The page has 2 blocking script resources and 6 blocking CSS resources. This causes a delay in rendering the page.
      None of the above-the-fold content on the page could be rendered without waiting for the following resources to load.
      Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML.
      Remove render-blocking JavaScript:
      https://use.fontawesome.com/f4641e0b1d.js, 
      https://mikeshhoffman.github.io/html200-ecommerce-project/js/script.js, etc.

Desktop optimization is rated as "Medium", 74/100.  


### Tools used for testing responsive design

*  <http://responsivedesignchecker.com> - Results: The site rendered well, on many sizes of desktop, tablet, and phone.

*  Chrome: Dev Tools: phone icon: Results: The site rendered well, on many widths and zoom levels.

*  iPad 10", 2 orientations, including split screen

*  iPhone 6 Plus, 2 orientations

*  MacBook Pro, various widths; in Chrome and Firefox browsers.
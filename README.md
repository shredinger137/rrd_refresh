Website for Resurrection Roller Derby. Created and administered by Casey Lewiston/Shredinger, admin@rrderby.org. See below for use notes. This is built using Gatsby and a handful of dependencies, with data from Google Calendar API, Contentful and internal files.

<h2>Calendar Module</h2>

The calendar module updates from the public Google Calendar. This is updated dynamically, not just at build time. Currently, all items with 'game' in the title and all items with the word "list" in the description will be displayed. Only events from the current year are shown. In the future tags will be added for different types of events.

For games, use the title "Home Game Vs. Team" or "Away Game vs. Team". This module will expect that formatting, and pulls the team name only. You can place ticket links in the description to have the link generated on the site. Anything other than game, if 'list' is in the description, will be shown using its full event name. For recurring events, only the first event should include the keyword to prevent repeats.

<h2>Contentful</h2>

Sponsors are sourced from Contentful. Anyone associated with this department should make an account there and be added. The content type 'Sponsors' does what you need for this. A new build will have to be generated to see the results of this.

No other data is currently used from Contentful. This is planned.

<h2>Deployment</h2>

Pushes to Master are automatically pulled to the server and built. This is visible at react.rrderby.org, which should be treated as the alpha staging site. After a deployment starts, visit this URL to make sure everything works as expected. Once your happy with it, visit deploy.rrderby.org/launch.php to make the site live. In case of errors, an admin can do this manually.

<h2>Roadmap</h2>

Development plans include:

-Calendar: create and allow visibility of multiple categories (all events, training, etc.).<br>
-Move page content to Contentful for easy editing.<br>
-Create sub pages for 'get involved' and other sections that could use it, with sidebar navigation.<br>
-Optimize images.<br>
-Add transition effects, initial load followed by page routing.<br>
-Add form type, such as for juniors sign up.<br>
-Add suggestion box, technology requests and forms to members area.<br>

There are various other design options in consideration. Any league members who want to help with web development are welcome to contribute their ideas.

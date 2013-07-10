=== The Future Is Now ===
Contributors: shacker, rboren, nacin
Tags: events, posts, time, future
Requires at least: 3.5
Tested up to: 3.5
Stable tag: 2.0

Allow future-time-stamped posts to appear live on your site immediately.

== Description ==

A WordPress plugin aimed primarily at events sites, where you want to be able to timestamp posts in the future but have them appear immediately (by default, WordPress will not display a future timestamped post until its go-live date rolls around). This plugin sets the post_status field to "publish" rather than "future" when publishing a post, even if its timestamp is in the future.

Note: This 2.0 version requires WordPress 3.5 or higher. If you need this to work with versions lower than 3.5, grab the 1.0 version from svn: http://plugins.svn.wordpress.org/the-future-is-now/tags/1.0/

== Installation ==

e.g.

1. Upload `future-post.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Create a new post with a timestamp in the future and notice that it appears on your site anyway.

== Note ==

This seemingly simple plugin was graciously written by the magical Ryan Boren when I was facing a deadline. He doesn't have time to maintain/host it, so I agreed to. Andrew Nacin tweaked it to work with WP 3.5, when the APIs changed a bit.

== Changelog ==

= 1.0 =
* Original version, compatible up to WordPress versions lower than 3.5

= 2.0 =
* Rewritten to be compatible with WordPress 3.5 and above

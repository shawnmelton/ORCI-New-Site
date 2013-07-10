<?php
/*
Plugin Name: The Future is Now!
Description: Sets future timestamped posts to "publish" rather than "future" upon publish (useful for Events listing sites).
Version: 2.0
Author: Ryan Boren and Andrew Nacin, maintained by Scot Hacker.
Plugin URI: http://birdhouse.org/software/futurepost
Author URI: http://birdhouse.org/blog
Contributors: rboren, nacen, shacker
Tags: publish, future
Requires at least: 3.5
Tested up to: 3.5
Stable tag: 2.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

remove_action('future_post', '_future_post_hook');

add_filter( 'wp_insert_post_data', 'futurenow_do_not_set_posts_to_future' );

function futurenow_do_not_set_posts_to_future( $data ) {
    if ( $data['post_status'] == 'future' && $data['post_type'] == 'post' )
        $data['post_status'] = 'publish';
    return $data;
}
?>
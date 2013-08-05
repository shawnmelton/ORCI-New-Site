<?php
/**
 * @desc Configures ORCI specific code.
 * @author Shawn Melton <shawn.melton@openroadsconsulting.com>
 */

// Turn on error reporting for local development.
define('IN_DEV', preg_match('/^dev\./i', $_SERVER['HTTP_HOST']));
if( !IN_DEV ) {
	ob_start('ob_gzhandler');
} else {
	ini_set('display_errors', 1);
	error_reporting(-1);
}

// Set default timezone
date_default_timezone_set('America/New_York');
putenv('TZ=US/Eastern');

// Class autoloader
function __autoload( $className ) {
	$class = dirname(__FILE__) .'/libs/'. $className .'.php';
	if( file_exists($class) ) {
		require_once($class);
		return;
	}

	throw new Exception('Cannot find '. $className .'.php in library folder.', E_USER_ERROR);
}
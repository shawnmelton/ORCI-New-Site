<?php
/**
 * @desc This file serves as a catch all for form submissions on the site.  It is not part of the wordpress code base, but I wanted to keep all of the PHP
 * files together.  Also, the orci-scripts folder on this same level contains non-Wordpress PHP files as well.
 * @author Shawn Melton <shawn.melton@openroadsconsulting.com>
 */
require 'orci-scripts/config.php';

$certInquiryForm = new VICADSCertInquiryForm();
if($certInquiryForm->hasBeenSubmitted()) {
	$certInquiryForm->processSubmission();
	header('Location: /contact-us/thank-you');
	exit;
}

header('Location: /');
exit;
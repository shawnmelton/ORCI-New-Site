<?php
/**
 * @desc Class handling VICADS Certification Inquiry form submissions.
 * @author Shawn Melton <shawn.melton@openroadsconsulting.com>
 */
class VICADSCertInquiryForm {
	private $info;

	public function __construct() {
		$this->info = array();
	}

	private function getHTMLMessage() {
		$msg = "<!doctype html><html><body style='font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; padding: 15px;'>
			<img src='http://www.openroadsconsulting.com/img/logo.png' style='display: block; margin-bottom: 15px;'>To whom it may concern,<br><br>
			A <strong>VICADS Certification Classes Inquiry</strong> has been submitted on the Open Roads Consulting, Inc. website.  
			The following information was submitted:<br><br><table>";

		foreach($this->info as $line) {
			$msg .= "<tr><td><strong>{$line['label']}</strong>: &nbsp;</td><td>{$line['value']}</td></tr>";
		}

		return $msg ."</table><br><i>Sent by the Open Roads Consulting, Inc. website.</i><br>
			<a href='http://www.openroadsconsulting.com/' style='color: #003082; text-decoration: none;'>http://www.openroadsconsulting.com/</a></body></html>";
	}

	/**
	 * The text version of the email message.
	 * @return String
	 */
	private function getTextMessage() {
		$msg = "To whom it may concern,\n\n".
			"A VICADS Certification Classes Inquiry has been submitted on the Open Roads Consulting, Inc. website.  The following information was submitted:\n";

		foreach($this->info as $line) {
			$msg .= "{$line['label']}: {$line['value']}\n";
		}

		return $msg ."\nSent by the Open Roads Consulting, Inc. website.\nhttp://www.openroadsconsulting.com/";
	}

	/**
	 * Has this form been submitted?  Also, check for spam here (cert-inquiry-form-v).
	 * @return boolean
	 */
	public function hasBeenSubmitted() {
		return (isset($_POST['fns']) && $_POST['fns'] == 'cert-inquiry-form' && isset($_POST['cert-inquiry-form-v']) && $_POST['cert-inquiry-form-v'] == 1);
	}


	public function processSubmission() {
		$fields = array('first_name', 'last_name', 'company', 'email', 'street_address', 'zip_code', 'dates');
		foreach($fields as $field) {
			$this->info[] = array(
				'label' => ucwords(str_replace('_', ' ', $field)),
				'value' => isset($_POST[$field]) ? $_POST[$field] : ''
			);
		}

		$this->sendEmail('shawn.melton@openroadsconsulting.com');
	}

	/**
	 * Send the notification email letting recipients know of submission.
	 */
	public function sendEmail($to) {
		$mailer = new Mailer(array(
			'subject' => 'VICADS Certification Classes Inquiry Form Submission',
			'from_email' => 'no-reply@openroadsconsulting.com',
			'from_name' => 'ORCI Website',
			'html' => $this->getHTMLMessage(),
			'text' => $this->getTextMessage()
		));
		$mailer->send_to($to);
	}
}
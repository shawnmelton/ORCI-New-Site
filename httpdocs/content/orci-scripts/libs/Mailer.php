<?php
/**
 * @desc Mail class.  Used to send emails.
 */
class Mailer {
	protected $config;

	public function __construct($config=array()) {	
		$this->config = array(
			'bounceto_email' 			=> null,
			'smtp_server' 				=> null,
			'smtp_port' 				=> 25,
			'mime_boundary' 			=> '1q2w3e4r5t6y7u8i9o0p1q',
			'mime_multipart_boundary' 	=> '4xarbc642prot4O2798',
			'from_email' 				=> null,
			'text' 						=> null,
			'subject' 					=> '[No Subject]',
			'from_name' 				=> null,
			'replyto_email' 			=> null,
			'replyto_name' 				=> null,
			'html' 						=> null,
			'bcc'						=> '',
			'attachments' 				=> array(),
			'verbose' 					=> false
		);
		
		$this->config = array_merge($this->config, $config);
	}
	
	
	public function __get($field) {
		if( isset($this->config[$field]) ) {
			return $this->config[$field]; 
		}
		
		return null;
	}
	
	
	public function __set($field, $value) {
		$this->config[$field] = $value;
	}
	
	
	public function add_attachment($name, $type, $contents) {
		if( strlen($name) && strlen($type) && strlen($contents) ) {
			$this->config['attachments'][] = array($name, $type, $contents);
		}
	}
	
	protected function check_settings() {
		// using the old properties?
		if( strlen($this->returnpath) ) {
			$this->bounceto_email = $this->returnpath;
		}
		
		if( $this->bounceto_email == '' ) {
			$this->bounceto_email = $this->from_email;
			if( $this->bounceto_email == '' ) {
				$this->bounceto_email = $this->from_email = $this->replyto_email;
			}
		}
		
		return $this->validate_email($this->bounceto_email);
	}
	
	
	// must precede headers
	protected function mkattachment($name, $type, $content) {
		$headersArr = array();
		$headersArr[] = "--{$this->mime_multipart_boundary}";
		$headersArr[] = 'Content-type: '. $type .';  name="'. $name .'"';
		$headersArr[] = 'Content-Disposition: attachment; filename="'. $name .'"';
		$headersArr[] = 'Content-Transfer-Encoding: base64';
		$headersArr[] = '';
		$headersArr[] = chunk_split(base64_encode($content), 60);
		$headersArr[] = '';
		return join("\n",$headersArr);
	}
	
	protected function mkbody() {
		$headersArr = array($this->mkbodycontent());
		
		//if attachments are present, iterate through and add them to the msg, and then terminate the multipart/mixed boundary
		if( count($this->attachments) ) {
			foreach( $this->attachments as $attachmentInfo ) {
				if( count($attachmentInfo) == 3 ) {
					$headersArr[] = $this->mkattachment($attachmentInfo[0], $attachmentInfo[1], $attachmentInfo[2]);
				}
			}
			$headersArr[] = "--{$this->mime_multipart_boundary}--";
		}
		
		return join("\n", $headersArr);
	}
	
	
	protected function mkbodycontent() {		
		// this method creates the text and html portions of the email wrapped withing a multipart alternative section
		$headersArr = array();
		$headersArr[] = "--{$this->mime_boundary}";
		$headersArr[] = 'Content-type: text/plain;  charset=iso-8859-1';
		$headersArr[] = 'Content-Transfer-Encoding: 7bit';
		$headersArr[] = '';
		$headersArr[] = ''. $this->text;
		$headersArr[] = '';
		$headersArr[] = "--{$this->mime_boundary}";
		$headersArr[] = 'Content-type: text/html; charset=iso-8859-1';
		$headersArr[] = 'Content-Transfer-Encoding: 7bit';
		$headersArr[] = '';
		$headersArr[] = (strlen($this->html) ? $this->html : $this->text) .'';
		$headersArr[] = '';
		$headersArr[] = "--{$this->mime_boundary}--";
		$headersArr[] = '';
		return join("\n",$headersArr);		
	}
	
	
	protected function mkfromhdr() {	
		$from_name = $this->from_name;
		$from_email = strlen($this->from_email) ? $this->from_email : $this->bounceto_email;
		return "From: {$from_name} <{$from_email}>";
	}
	
	
	protected function mkheaders() {	
		$headersArr = array($this->mkfromhdr());
		if( ($replytohdr = $this->mkreplytohdr()) != '' ) {
			$headersArr[] = $replytohdr;
		}

		if(strlen($this->bcc) > 0) {
			$headersArr[] = 'Bcc: '. $this->bcc;
		}
		
		$headersArr[] = 'Date: '. date('r');
		$headersArr[] = 'MIME-Version: 1.0';
		
		if( count($this->attachments) ) {
			$headersArr[] = "Content-Type: multipart/mixed; boundary=\"{$this->mime_multipart_boundary}\"";			
			$headersArr[] = '';
			$headersArr[] = "--{$this->mime_multipart_boundary}";
		} 

		$headersArr[] = "Content-Type: multipart/alternative; boundary=\"{$this->mime_boundary}\"";
		$headersArr[] = '';
		$headersArr[] = "This is a multi-part message in MIME format.\n\n";
		
		return join("\n",$headersArr);
	}
	
	
	protected function mkreplytohdr() {	
		$replyto_name = $this->replyto_name;
		$replyto_email = strlen($this->replyto_email) ? $this->replyto_email : $this->from_email;
		if( $replyto_email != '' ) {
			return "Reply-To: {$replyto_name} <{$replyto_email}>";
		}
		
		return '';
	}
	
	
	public function send_to($to) {
		if( !$this->validate_email($to) || !$this->check_settings() ) {
			return false;
		}
		
		return @mail($to, $this->subject, $this->mkbody(), 'Return-path: '. $this->bounceto_email ."\n". $this->mkheaders());
	}
	
	
	//Is E-mail valid?
	protected function validate_email($email) {
		$earr = explode(',',$email);
		foreach($earr as $em) {
			if( !preg_match('/^[^@]+[@][^@.]+([.][^@.]+)+$/', $em) ) {
				return false;
			}
		}
		
		return true;		
	}
}
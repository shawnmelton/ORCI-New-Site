<?php
/**
 * @desc Class handling RMA Request form submissions.
 * @author Shawn Melton <shawn.a.melton@gmail.com>
 */
class RMARequestForm {
    private $info;
    private $items;
    private $requestId;
    private $ip;
    private $contact;

    public function __construct() {
        $this->info = array();
        $this->items = array();
    }

    private function getCustomerHTMLMessage() {
        return "<!doctype html><html><body style='font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; padding: 15px;'>
            <img src='http://www.openroadsconsulting.com/img/logo.png' style='display: block; margin-bottom: 15px;'>To whom it may concern,<br><br>
            Your return request has been successfully submitted. A representative will contact you within 2 business days to process this request and issue an RMA #. If you have further questions <strong>please contact us at 855-4-VICADS</strong>.<br><br>We thank you for your business.<br><br><table>
            <tr><td>Submitted on: &nbsp;</td><td>". date('m/d/Y g:i A') ."</td></tr>
            <tr><td>Acknowledged by: &nbsp;</td><td>{$this->contact}</td></tr>
            <tr><td>IP Address: &nbsp;</td><td>{$this->ip}</td></tr>
            </table><br><br><i>Sent by the Open Roads Consulting, Inc. website.</i><br><a href='http://www.openroadsconsulting.com/' style='color: #003082; text-decoration: none;'>http://www.openroadsconsulting.com/</a></body></html>";
    }

    /**
     * The text version of the email message.
     * @return String
     */
    private function getCustomerTextMessage() {
        $msg = "To whom it may concern,\n\n".
            "Your return request has been successfully submitted. A representative will contact you within 2 business days to process this request and issue an RMA #. If you have further questions please contact us at 855-4-VICADS.\n\nWe thank you for your business.";

        $msg .= "Submitted on: ". date('m/d/Y g:i A') ."\n";
        $msg .= "Acknowledged by: {$this->contact}\n";
        $msg .= "IP Address: {$this->ip}\n";

        return $msg ."\n\nSent by the Open Roads Consulting, Inc. website.\nhttp://www.openroadsconsulting.com/";
    }

    private function getHTMLMessage() {
        $msg = "<!doctype html><html><body style='font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; padding: 15px;'>
            <img src='http://www.openroadsconsulting.com/img/logo.png' style='display: block; margin-bottom: 15px;'>To whom it may concern,<br><br>
            An <strong>ISSD Online RMA Request</strong> has been submitted on the Open Roads Consulting, Inc. website.  
            The following information was submitted:<br><br><table>";

        foreach($this->info as $line) {
            $msg .= "<tr><td><strong>{$line['label']}</strong>: &nbsp;</td><td>{$line['value']}</td></tr>";
        }

        $msg .= '</table><br><h3>Product Information</h3><table>';

        foreach($this->items as $item) {
            $msg .= "<tr><td><strong>{$item['label']}</strong>: &nbsp;</td><td>{$item['value']}</td></tr>";
        }

        return $msg ."</table><br><br><table><tr><td><strong>Submitted on:</strong></td><td>". date('m/d/Y g:i A') ."</td></tr>
            <tr><td><strong>Acknowledged by: &nbsp;</strong></td><td>{$this->contact}</td></tr>
            <tr><td><strong>IP Address:</strong></td><td>{$this->ip}</td></tr></table><br><i>Sent by the Open Roads Consulting, Inc. website.</i><br>
            <a href='http://www.openroadsconsulting.com/' style='color: #003082; text-decoration: none;'>http://www.openroadsconsulting.com/</a></body></html>";
    }

    /**
     * The text version of the email message.
     * @return String
     */
    private function getTextMessage() {
        $msg = "To whom it may concern,\n\n".
            "An ISSD Online RMA Request has been submitted on the Open Roads Consulting, Inc. website.  The following information was submitted:\n";

        foreach($this->info as $line) {
            $msg .= "{$line['label']}: {$line['value']}\n";
        }

        $msg ."\n\n\nProduct Information\n\n";

        foreach($this->items as $item) {
            $msg .= "{$item['label']}: {$item['value']}\n";
        }

        $msg .= "Submitted on: ". date('m/d/Y g:i A') ."\n";
        $msg .= "Acknowledged by: {$this->contact}\n";
        $msg .= "IP Address: {$this->ip}\n";

        return $msg ."\nSent by the Open Roads Consulting, Inc. website.\nhttp://www.openroadsconsulting.com/";
    }

    /**
     * Has this form been submitted?  Also, check for spam here (cert-inquiry-form-v).
     * @return boolean
     */
    public function hasBeenSubmitted() {
        return (isset($_POST['fns']) && $_POST['fns'] == 'rma-request-form' && isset($_POST['rma-request-form-v']) && $_POST['rma-request-form-v'] == 1);
    }


    public function processSubmission() {
        $fields = array('company', 'contact', 'street_address', 'city', 'state', 'zip_code', 'state_territory', 'country', 'postal_code', 'email', 'phone_number', 'fax_number');
        foreach($fields as $field) {
            if($_POST[$field] != '') {
                $this->info[] = array(
                    'label' => ucwords(str_replace('_', ' ', $field)),
                    'value' => isset($_POST[$field]) ? $_POST[$field] : ''
                );
            }
        }

        foreach($_POST as $key => $value) {
            if(preg_match('/^product_/i', $key)) {
                $this->items[] = array(
                    'label' => ucwords(str_replace('_', ' ', str_replace('product_', '', $key))),
                    'value' => $value
                );
            }
        }

        $this->storeSubmission();
        $this->sendEmail('shawn.a.melton@gmail.com');
        //$this->sendEmail('colleen.bond@openroadsconsulting.com,skret@openroadsconsulting.com');
        $this->sendCustomerEmail();
        // $this->sendEmail('shawn.melton@openroadsconsulting.com,christopher.sells@openroadsconsulting.com,carrie.asbill@openroadsconsulting.com,kevin.bray@openroadsconsulting.com,joseph.keith@openroadsconsulting.com,mark.thomas@openroadsconsulting.com');
    }

    private function sendCustomerEmail() {
        $mailer = new Mailer(array(
            'subject' => 'Your RMA Request ID is '+ $this->requestId .' (THIS IS NOT AN RMA NUMBER)',
            'from_email' => 'no-reply@openroadsconsulting.com',
            'from_name' => 'ORCI Website',
            'bcc' => 'returns@openroadsconsulting.com',
            'html' => $this->getCustomerHTMLMessage(),
            'text' => $this->getCustomerTextMessage()
        ));

        $mailer->add_attachment('ORCITermsAndConditions.pdf', 'application/pdf', file_get_contents(dirname(dirname(__FILE__)). '/RMARequestTermsConditions.pdf'));

        /*echo $this->getCustomerHTMLMessage();
        exit;*/
        if(isset($_POST['email']) && preg_match('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i', $_POST['email'])) { 
            $mailer->send_to($to);
        }
    }

    /**
     * Send the notification email letting recipients know of submission.
     */
    private function sendEmail($to) {
        $mailer = new Mailer(array(
            'subject' => 'RMA Request Form Submission',
            'from_email' => 'no-reply@openroadsconsulting.com',
            'from_name' => 'ORCI Website',
            'html' => $this->getHTMLMessage(),
            'text' => $this->getTextMessage()
        ));

        /*echo $this->getHTMLMessage();
        exit;*/
        $mailer->send_to($to);
    }

    /**
     * Store the contact name, ip address and date of when the user submitted (and accepted terms) for the RMA Request.
     */
    private function storeSubmission() {
        $db = new mysqli('127.0.0.1', 'orcicorpuser', '0rC1P*sS!#', 'orcicorp');
        $stmt = $db->prepare('
            INSERT INTO rma_request_submissions SET 
                submission_ip_address = (?),
                submission_contact_name = (?),
                submission_date_added = NOW()
        ');

        $this->ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
        $this->contact = isset($_POST['contact']) ? $_POST['contact'] : '';
        $stmt->bind_param('ss', $ip, $contact);

        $stmt->execute();
        $this->requestId = $db->insert_id;
    }
}
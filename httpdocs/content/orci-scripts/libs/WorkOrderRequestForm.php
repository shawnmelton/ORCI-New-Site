<?php
/**
 * @desc Class handling Work Order Request form submissions.
 * @author Shawn Melton <shawn.a.melton@gmail.com>
 */
class WorkOrderRequestForm {
    private $info;
    private $items;

    public function __construct() {
        $this->info = array();
        $this->items = array();
    }

    private function getHTMLMessage() {
        $msg = "<!doctype html><html><body style='font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; padding: 15px;'>
            <img src='http://www.openroadsconsulting.com/img/logo.png' style='display: block; margin-bottom: 15px;'>To whom it may concern,<br><br>
            A <strong>Work Order Request</strong> has been submitted on the Open Roads Consulting, Inc. website.  
            The following information was submitted:<br><br><table>";

        foreach($this->info as $line) {
            $msg .= "<tr><td><strong>{$line['label']}</strong>: &nbsp;</td><td>{$line['value']}</td></tr>";
        }

        $msg .= '</table><br><h3>Product Information</h3><table>';

        foreach($this->items as $item) {
            $msg .= "<tr><td><strong>{$item['label']}</strong>: &nbsp;</td><td>{$item['value']}</td></tr>";
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
            "A Work Order Request has been submitted on the Open Roads Consulting, Inc. website.  The following information was submitted:\n";

        foreach($this->info as $line) {
            $msg .= "{$line['label']}: {$line['value']}\n";
        }

        $msg ."\n\n\nProduct Information\n\n";

        foreach($this->items as $item) {
            $msg .= "{$item['label']}: {$item['value']}\n";
        }

        return $msg ."\nSent by the Open Roads Consulting, Inc. website.\nhttp://www.openroadsconsulting.com/";
    }

    /**
     * Has this form been submitted?  Also, check for spam here (cert-inquiry-form-v).
     * @return boolean
     */
    public function hasBeenSubmitted() {
        return (isset($_POST['fns']) && $_POST['fns'] == 'work-order-form' && isset($_POST['work-order-form-v']) && $_POST['work-order-form-v'] == 1);
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

        $this->sendEmail('shawn.a.melton@gmail.com');
        // $this->sendEmail('shawn.melton@openroadsconsulting.com,christopher.sells@openroadsconsulting.com,carrie.asbill@openroadsconsulting.com,kevin.bray@openroadsconsulting.com,joseph.keith@openroadsconsulting.com,mark.thomas@openroadsconsulting.com');
    }

    /**
     * Send the notification email letting recipients know of submission.
     */
    public function sendEmail($to) {
        $mailer = new Mailer(array(
            'subject' => 'Work Order Request Form Submission',
            'from_email' => 'no-reply@openroadsconsulting.com',
            'from_name' => 'ORCI Website',
            'html' => $this->getHTMLMessage(),
            'text' => $this->getTextMessage()
        ));

        echo $this->getHTMLMessage();
        exit;
        $mailer->send_to($to);
    }
}
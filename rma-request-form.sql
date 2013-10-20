CREATE TABLE rma_request_products (
    product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_part_number VARCHAR(15) NOT NULL DEFAULT "",
    product_part_name VARCHAR(150) NOT NULL DEFAULT "",
    product_date_added DATETIME NOT NULL DEFAULT 0
) ENGINE=InnoDB;

INSERT INTO rma_request_products SET product_part_name = "VICADS Management Server", product_part_number = "10-10000-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Personal Viewer Workstation, Tower", product_part_number = "10-20000-00T", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Personal Viewer Workstation, Rack Mount", product_part_number = "10-20000-00R", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Softwall Workstation, Tower", product_part_number = "10-20003-00T", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Softwall Workstation, Rack Mount", product_part_number = "10-20003-00R", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Broadcast Server &amp; Software", product_part_number = "10-20003-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Video Analytics Server, 24 Channel", product_part_number = "10-31000-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Video Analytics Workstation", product_part_number = "10-31001-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Video System Joystick Controller", product_part_number = "10-50000-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 8 Camera Recording Server, 2U, MPEG4/H.264", product_part_number = "10-30008-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 16 Camera Recording Server, 4U, MPEG4/H.264", product_part_number = "10-30016-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 32 Camera Recording Server, 4U, MPEG4/H.264", product_part_number = "10-30032-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 64 Camera Recording Server, 4U, MPEG4/H.264", product_part_number = "10-30064-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 96 Camera Recording Server, 8U, MPEG4/H.264", product_part_number = "10-30096-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 128 Camera Recording Server, 8U, MPEG4/H.264", product_part_number = "10-30128-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 8 Camera Recording Server, 4U, MJPEG", product_part_number = "10-30008-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 16 Camera Recording Server, 4U, MJPEG", product_part_number = "10-30016-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 32 Camera Recording Server, 4U, MJPEG", product_part_number = "10-30032-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 64 Camera Recording Server, 8U, MJPEG", product_part_number = "10-30064-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 96 Camera Recording Server, 12U, MJPEG", product_part_number = "10-30096-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 128 Camera Recording Server, 16U, MJPEG", product_part_number = "10-30128-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Hard Disk Drive (SOLID STATE)", product_part_number = "10-30007-SSD", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Hard Disk Drive (SAS, 15.5K)", product_part_number = "10-30007-SAS", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Hard Disk Drive (SATA)", product_part_number = "10-30007-SAT", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog PTZ Camera, Wall Mount", product_part_number = "50-02001-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog PTZ Camera, Corner Mount", product_part_number = "50-02002-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog PTZ Camera, Pole Mount", product_part_number = "50-02003-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog PTZ Camera, Roof (Parapet) Mount", product_part_number = "50-02004-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog Fixed Camera, Wall Mount", product_part_number = "50-02005-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog Fixed Camera, Corner Mount", product_part_number = "50-02006-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior Analog Fixed Camera, Pole Mount", product_part_number = "50-02007-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP PTZ Camera, Wall Mount", product_part_number = "50-02008-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP PTZ Camera, Corner Mount", product_part_number = "50-02009-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP PTZ Camera, Pole Mount", product_part_number = "50-02010-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP PTZ Camera, Roof (Parapet) Mount", product_part_number = "50-02011-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP Fixed Camera, Wall Mount", product_part_number = "50-02012-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP Fixed Camera, Corner Mount", product_part_number = "50-02013-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Exterior IP Fixed Camera, Pole Mount", product_part_number = "50-02014-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior Analog PTZ Camera, Wall Mount", product_part_number = "50-02015-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior Analog PTZ Camera, Ceiling Mount", product_part_number = "50-02016-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior Analog Fixed Camera, Wall Mount", product_part_number = "50-02017-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior Analog Fixed Camera, Ceiling Mount", product_part_number = "50-02018-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior IP PTZ Camera, Wall Mount", product_part_number = "50-02019-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior IP PTZ Camera, Ceiling Mount", product_part_number = "50-02020-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior IP Fixed Camera, Wall Mount", product_part_number = "50-02021-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Interior IP Fixed Camera, Ceiling Mount", product_part_number = "50-02022-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Camera Power Supply, 110VAC/24-28VAC 4A", product_part_number = "50-02023-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "IP PTZ Thermal Imager, 19mm, w/36X Zoom CCD Camera", product_part_number = "50-05000-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 9mm, No Mount", product_part_number = "51-05000-002", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 13mm, No Mount", product_part_number = "51-05000-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 19mm, No Mount", product_part_number = "51-05000-004", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 35mm, No Mount", product_part_number = "51-05000-005", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 50mm, No Mount", product_part_number = "51-05000-006", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Analog Fixed Thermal Imager, 100mm, No Mount", product_part_number = "51-05000-007", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS IP PTZ Thermal Imager, PT-606, High Res", product_part_number = "51-05000-008", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS License Plate Capture Camera, 16mm, 24VAC", product_part_number = "51-06001-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS License Plate Capture Camera, 25mm, 24VAC", product_part_number = "51-06001-002", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS License Plate Capture Camera, 35mm, 24VAC", product_part_number = "51-06001-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS License Plate Capture Camera, 50mm, 24VAC", product_part_number = "51-06001-004", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS License Plate Capture Camera, 75mm, 24VAC", product_part_number = "51-06001-005", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "License Plate Capture Camera Wall Mount Bracket", product_part_number = "51-06002-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "License Plate Capture Camera Pole Mount Bracket", product_part_number = "51-06002-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "License Plate Capture Camera Ceiling Mount Bracket", product_part_number = "51-06002-004", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Camera Power Supply, 110VAC/24VAC 50VA", product_part_number = "51-02023-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Single Ch. Encoder, Hardened, Legacy Version", product_part_number = "51-01000-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Single Ch. Encoder, Hardened", product_part_number = "51-01001-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Single Ch. Encoder, Stand Alone, H.264, POE", product_part_number = "51-01001-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Single Ch. Encoder, Stand-Alone, H.264, Q7401", product_part_number = "51-01001-004", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS Single Ch. Encoder w/Embedded Video Analytics", product_part_number = "51-01001-002", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 6 Channel Video Encoder Blade", product_part_number = "51-02001-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Rack for 6 Channel Encoder Blades, 4U", product_part_number = "51-02002-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "VICADS 4 Channel Encoder", product_part_number = "51-02006-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Video Encoder Rack, 1U", product_part_number = "51-02003-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Access Point", product_part_number = "52-02001-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Subscriber Module (20Mbps)", product_part_number = "52-02001-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Access Point P/S", product_part_number = "52-02001-002", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Subscriber Module P/S", product_part_number = "52-02001-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Equipment Surge Suppressor", product_part_number = "52-02001-004", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Universal Articulating Mount (WHITE)", product_part_number = "52-02001-005", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Power supply line cord", product_part_number = "52-02001-006", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Multi-Point Subscriber Module (40Mbps)", product_part_number = "52-02001-007", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Backhaul Link (Lite)", product_part_number = "52-02002-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Line Protection Unit", product_part_number = "52-02002-005", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Line Ground Lug Kit", product_part_number = "52-02002-006", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Backhaul P/S", product_part_number = "52-02002-007", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Backhaul Link (Lite, 150 MBps)", product_part_number = "52-02003-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Backhaul Link (AES Key)", product_part_number = "52-02003-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Point to Point Lightning Protection Unit (LPU)", product_part_number = "52-02003-003", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "FIPS 140-2 Encryption Module", product_part_number = "52-02050-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "FIPS 140-2 Encryption Module Rack Kit", product_part_number = "52-02050-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "GPS Synchronization Module w/Ruggedized Switch", product_part_number = "52-02051-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "GPS Synchronization Module Power Supply", product_part_number = "52-02051-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Ruggedized switch, 6-port; 2 GB port, 4 PoE ports", product_part_number = "52-02052-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "NEMA Enclosure", product_part_number = "52-02060-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Non-Penetrating Roof Mount", product_part_number = "52-02061-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Roof pads for Non-penetrating Roof Mount", product_part_number = "52-02061-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Wireless Manager Base Software", product_part_number = "52-02070-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Wireless Manager Software License Pack (10 nodes)", product_part_number = "52-02070-010", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = '19" LCD Display w/BNC Input', product_part_number = "53-01001-012", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = '22" LCD Display w/VGA & DVI Connection', product_part_number = "53-01001-022", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = '42" LCD Security Display', product_part_number = "53-01001-042", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = '55" LCD Security Display, 1080P', product_part_number = "53-01001-055", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "Display Mount Kit", product_part_number = "53-01002-052", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = '8 Port Slide-Out KVM Switch w/19" VGA Monitor', product_part_number = "53-02002-000", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "USB/PS2 KVM Cables for KVM Switch", product_part_number = "53-02002-001", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "2 PC KVM Kit with Cables, USB", product_part_number = "53-02002-002", product_date_added = NOW();
INSERT INTO rma_request_products SET product_part_name = "USB CAT5 Extender and KVM Switch", product_part_number = "53-02004-000", product_date_added = NOW();

CREATE TABLE rma_request_submissions (
    submission_id SERIAL,
    submission_ip_address VARCHAR(25) NOT NULL DEFAULT "",
    submission_contact_name VARCHAR(150) NOT NULL DEFAULT "",
    submission_date_added DATETIME NOT NULL DEFAULT 0
) ENGINE=InnoDB;

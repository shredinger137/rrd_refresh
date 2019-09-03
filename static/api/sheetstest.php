<?php



require_once __DIR__ . '/../vendor/autoload.php';
$jsonPath = __DIR__ . '/rollerderby-221418-02674f31c06b.json';
$jsonAuth = file_exists($jsonPath) ? $jsonPath : false;

$client = new \Google_Client();
$client->setApplicationName('Sheet Test');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig($jsonAuth);

/*
 * With the Google_Client we can get a Google_Service_Sheets service object to interact with sheets
 */

$data = [];
$spreadsheetId = '1Z-jrSZ62_pEDP_DU2dePQTD6M62P2jLVVsZ21tmKt0A';
$range = 'A2:H2';
$service = new Google_Service_Sheets($client);

function insertRow() {
    global $spreadsheetId, $range, $service;

    $requests = [
    
    new Google_Service_Sheets_Request([
        'insertDimension' => [
            'range' => [
                'sheetId' => 0,
                'dimension' => 'ROWS',
                'startIndex' => 1,
                'endIndex' => 2
            ],
            'inheritFromBefore' => false
        ]
        
    ]),

    ];

    // Add additional requests (operations) ...
    $batchUpdateRequest = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
        'requests' => $requests
    ]);


    $response = $service->spreadsheets->batchUpdate($spreadsheetId, $batchUpdateRequest);
    }

function writeRow() {

    //Range of request has to match entries

    global $spreadsheetId, $range, $service, $data;
    $dataArr = [];
    foreach($data as $key => $value){
        arr_push($data_arr, $value)
    }

    $range = 'A2:H' . sizeof($dataArr);
    $requests = 
        new Google_Service_Sheets_ValueRange ([
            'range' => $range,
            'majorDimension' => 'ROWS',
            'values' => [
                $dataArr;
            ]

        ])
        ;
    $response = $service->spreadsheets_values->update($spreadsheetId, $range, $requests, ['valueInputOption' => "RAW"]);

}

insertRow();
writeRow();

?>

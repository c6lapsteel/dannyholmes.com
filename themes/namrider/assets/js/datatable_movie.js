// JavaScript Document - Initialize data table
$(document).ready( function () {
    $('#movie-table').DataTable( {
        responsive: true,
        "pageLength": 25,
        "order": [[ 2, "desc" ]]
    } );
$('#superbike-table').DataTable( {
        responsive: true,
        "pageLength": 10,
        "order": [[ 1, "desc" ]]
    } );
} );
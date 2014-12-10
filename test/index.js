var test = require( 'prova' ),
	browsersavefile = require( './..' );

test( 'does browsersavefile err out', function( t ) {

	t.plan( 1 );

	var someHTML = [ '<div>HELLO WORLD</div>' ],
		blobData = new Blob( someHTML, {type : 'text/html'});

	try {

		browsersavefile( 'my file', blobData );
		t.pass( 'browsersavefile did not fail' );
	} catch( e ) {

		t.fail( 'browsersavefile does not work' );
	}
});
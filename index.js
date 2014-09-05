var URL = window.URL || window.webkitURL;


module.exports = function( fileName, blob ) {

	if( !URL )
		throw new Error( 'URL is not supported cannot download file' );

	var url = URL.createObjectURL( blob );
	
	var clickEV = document.createEvent( 'Event' );
	clickEV.initEvent( 'click', true, true);

	var link = document.createElement( 'a' );
	link.href = url;
	link.download = fileName;
	link.dispatchEvent( clickEV );
};
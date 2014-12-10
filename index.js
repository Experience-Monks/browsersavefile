/** @module browsersavefile */

var URL = window.URL || window.webkitURL;

/**
 * browsersavefile will take a file name and a Blob object. It will then
 * download the file from the users browser.
 * 
 * @param  {String} fileName The file name of the file you'd like to save as
 * @param  {Blob} blob File you'd like to save out
 *
 * @example
 * ```javascript
 * var browsersavefile = require( 'browsersavefile' );
 * 
 * var someHTML = [ '<div>HELLO WORLD</div>' ],
 * 	   blobData = new Blob( someHTML, {type : 'text/html'});
 *	
 * browsersavefile( 'my file', blobData );
 * ```
 */
module.exports = function browsersavefile( fileName, blob ) {

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
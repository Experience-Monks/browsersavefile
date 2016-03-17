/** @module browsersavefile */

var URL = typeof window !== 'undefined' && (window.URL || window.webkitURL);

var link;
if (typeof document !== 'undefined') {
	link = document.createElement( 'a' );
	link.style = 'display: none';
	document.body.appendChild( link );
}

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
	link.href = url;
	link.download = fileName;
	link.click();

	setTimeout(function cleanupBlob() {
		URL.revokeObjectURL( url );
	});
};

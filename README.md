[![browser support](https://ci.testling.com/Jam3/browsersavefile.png)
](https://ci.testling.com/Jam3/browsersavefile)

<a name="module_browsersavefile"></a>
#browsersavefile
<a name="exp_module_browsersavefile"></a>
##browsersavefile(fileName, blob)
browsersavefile will take a file name and a Blob object. It will then
download the file from the users browser.

**Params**

- fileName `String` - The file name of the file you'd like to save as  
- blob `Blob` - File you'd like to save out  

**Example**  
```javascript
var browsersavefile = require( 'browsersavefile' );

var someHTML = [ '<div>HELLO WORLD</div>' ],
	   blobData = new Blob( someHTML, {type : 'text/html'});
	
browsersavefile( 'my file', blobData );
```
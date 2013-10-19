window.JST = JST || {};

/* in main backbone view, call
 *   var html = JST['/']()
     var dict = { name: "Jason", email: "j.smith@gmail.com" };
     var html = JST['person/contact'](dict);
 */

window.JST['/track'] = _.template('


<table id="grid">
</table>


');

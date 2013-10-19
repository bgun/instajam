window.JST = {};

/* in main backbone view, call
 *   var html = JST['/']()
     var dict = { name: "Jason", email: "j.smith@gmail.com" };
     var html = JST['person/contact'](dict);
 */ ?

window.JST['/song'] = _.template(
  "<div class='song'>
    <thead>
      <tr>
        <th>Song</th>
      </tr>
    </thead>
    <tbody>
      <%
        _.each(items, function(item, key) {
        var s = item.name;
        var f = item.link;
      %>
      <tr>
        <td class='song'>
          <a href='<%= f %>'>
            <%= s %>
          </a<
        </td>
      </tr>
      <%
        });
      %>
    </tbody>
  </div>"
);
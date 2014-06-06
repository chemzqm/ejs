var assert = require('assert');
var ejs = require('ejs');

describe('ejs', function() {
  it('should render', function() {
    var html = '<h2><%= user.name %></h2>';
    var text = ejs.render(html, {
      user: { name: 'jack' }
    })
    assert('<h2>jack</h2>' === text);
  });

  it('should render with filter', function() {
    var html = "<p><%=: users | map:'name' | join: ' ' %></p>";
    var text = ejs.render(html, {
      users: [
        { name: 'tj' },
        { name: 'mape' },
        { name: 'guillermo' }
      ]
    })
    assert('<p>tj mape guillermo</p>' === text);
  });

  it('should render with array', function() {
    var html = "<% users.forEach(function(user){%><p><%= user.name %></p><%})%>";
    var text = ejs.render(html, {
      users: [
        { name: 'tj' },
        { name: 'mape' },
        { name: 'guillermo' }
      ]
    })
    assert('<p>tj</p><p>mape</p><p>guillermo</p>' === text);
  });
})

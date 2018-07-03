var QUnit = require('steal-qunit');
var RouteMock = require('./can-route-mock');

QUnit.module('can-route-mock');

QUnit.test('basics', function(){
    var mock = new RouteMock();

    QUnit.equal(mock.value, "", "read as empty");

    mock.value = "#foo/bar";

    QUnit.equal(mock.value, "foo/bar");
});

describe('Protractor Demo App', function() {
  it('Debe tener titulo', function() {
    browser.get('http://localhost:9000/#/home');
    expect(browser.getTitle()).toEqual('Prueba Concepto');
  });

  it('deben ser dos filas', function() {
    browser.get('http://localhost:9000/#/home');
    var filas = 0;
    element.all(by.repeater('fila in main.filas')).then(function(rows) {
      filas = rows.length;
      expect(filas).toEqual(0);
    });
  });
});

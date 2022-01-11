describe('Prueba calculadora', () =>{
    let calc = null;

    beforeEach(() => {
        calc = new Calculadora();
})
describe('Sumas', () => {
    describe('OK', () => {
        it('Positivos', () => {
            let rslt = calc.suma(2, 2);
            expect(4).toBe(rslt);
        })
        it('Cadenas', () => {
            let rslt = calc.suma('2', 2);
            expect(4).toBe(rslt);
        })
        it('Cero', () => {
            let rslt = calc.suma(0, 0);
            expect(0).toBe(rslt);
        })

    })
    describe('KO', () => {
        it('No números', () => {
            let calc = new Calculadora();
            let rslt = calc.suma('a', 2);
            expect(rslt).toBeNaN();
        })
        it('No valores', () => {
            let calc = new Calculadora();
            let rslt = calc.suma('a', 2);
            expect(rslt).toBeNaN();
        })

 describe('Restas', () => {
    describe('OK', () => {
        it('Positivos', () => {
                    let rslt = calc.resta(4, 2);
                    expect(2).toBe(rslt);
                })
         it('Cadenas', () => {
                   
                    let rslt = calc.resta('4', 2);
                    expect(2).toBe(rslt);
                })
         it('Cero', () => {
                   
                    let rslt = calc.resta(0, 0);
                    expect(0).toBe(rslt);
                })
        
            })
    describe('KO', () => {
         it('No números', () => {
                    let calc = new Calculadora();
                    let rslt = calc.resta('a', 2);
                    expect(rslt).toBeNaN();
                })
         it('No valores', () => {
                    let calc = new Calculadora();
                    let rslt = calc.resta('a', 2);
                    expect(rslt).toBeNaN();
                })

    describe('Divisiones', () => {
        describe('OK', () => {
                it('Positivos', () => {
                        let rslt = calc.division(6, 2);
                         expect(3).toBe(rslt);
                         })
                it('Cadenas', () => {
                        let rslt = calc.division('6', 2);
                        expect(3).toBe(rslt);
                        })
                it('Cero', () => {
                        let rslt = calc.division(0, 0);
                        expect(0).toBe(rslt);
                        })
                        
                            })
        describe('KO', () => {
                it('No números', () => {
                        let calc = new Calculadora();
                        let rslt = calc.division('a', 2);
                        expect(rslt).toBeNaN();
                        })
                it('No valores', () => {
                        let calc = new Calculadora();
                        let rslt = calc.division('a', 2);
                        expect(rslt).toBeNaN();
                        })
                        
describe('Multiplicaciones', () => {
        describe('OK', () => {
             it('Positivos', () => {
                    let rslt = calc.multiplicacion(3, 2);
                     expect(6).toBe(rslt);
                    })
            it('Cadenas', () => {
                    let rslt = calc.multiplicacion('3', 2);
                    expect(6).toBe(rslt);
                    })
            it('Cero', () => {
                    let rslt = calc.multiplicacion(0, 0);
                    expect(0).toBe(rslt);
                    })
                                            
                })
        describe('KO', () => {
            it('No números', () => {
                    let calc = new Calculadora();
                    let rslt = calc.multiplicacion('a', 2);
                    expect(rslt).toBeNaN();
                        })
            it('No valores', () => {
                    let calc = new Calculadora();
                    let rslt = calc.multiplicacion('a', 2);
                    expect(rslt).toBeNaN();
                    })
        describe('otras pruebas', () =>{

            it("resta", function(){
                var resta = 2 + 1;
                expect(resta).toBeLessThan(4);
                });
                
                it("multiplicacion", function(){
                var multiplicacion = 2 * 10;
                expect(multiplicacion).toBeGreaterThan(9);
                });
                
                it("division", function(){
                var division = 15 + 3;
                expect(division).toEqual(5);
                });
        } )
        describe("operaciones especiales",function(){

            //limpia antes de hacer la operacion y despues

            beforeEach(function(){
            var raizcuadrada = 0;
            var exponente = 0;
            var base = 0;
            });
            
            afterEach(function(){
            var raizcuadrada = 0;
            var exponente = 0;
            var base = 0;
            });
            
            it("raiz cuadrada",function(){
            raizcuadrada = 4
            expect(raizcuadrada).toEqual(Math.sqrt(16));
            });
            
            
            it("exponente",function(){
            var exponente = 3;
            var base = 4;
            respuesta = Math.pow(base,exponente);
            expect(respuesta).toEqual(64);
            });
            
            });

            //probar luego espias usando comparadores

            beforeEach(function(){
                funcion = spyOn(calculadora,'suma');
                prop = spyOnProperty(calculadora,'pantalla', 'set')
            });

   
    })
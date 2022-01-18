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

    describe ("pruebas dinamicas", () =>{
        describe('sumas', function(){
            [[2,3,5],[3,6,9],[2,-1,1]].forEach(item =>{
                it('Prueba  que ${item[0]} más ${item[1] es
                    ${item[2]}', () => expect(calc.mas(item[0], 
                        item[1])).toBe(item[2])
                )
            });
        });
        describe('restas', function(){
            [[4,3,1],[7,2,5],[2,-1,1]].forEach(item =>{
                it('Prueba  que ${item[0]} menos ${item[1] es
                    ${item[2]}', () => expect(calc.resta(item[0], 
                        item[1])).toBe(item[2])
                )
            });
        });
        describe('multiplicaciones', function(){
            [[2,3,6],[3,6,18],[2,6,12]].forEach(item =>{
                it('Prueba  que ${item[0]} entre ${item[1] es
                    ${item[2]}', () => expect(calc.multiplicacion(item[0], 
                        item[1])).toBe(item[2])
                )
            });
        });
        describe('divisiones', function(){
            [[6,3,2],[8,4,2],[10,2,5]].forEach(item =>{
                it('Prueba  que ${item[0]} entre ${item[1] es
                    ${item[2]}', () => expect(calc.division(item[0], 
                        item[1])).toBe(item[2])
                )
            });
        });
    })

    it('Multiplica', () => {
        let calc = { multiplica: (a, b) => 4 };

       expect(4).toBe(calc.multiplica(5,5));
    })
    

    

            //probar luego espias usando comparadores

           
        describe('Doble', () => {

            it('Spy', () => {
                let func = spyOn(calc,'suma').and.returnValue(3);
                let rslt = calc.suma(2,2);
                expect(func).toHaveBeenCalled();
                expect(3).toBe(rslt);
            })
            
            it('Spy', () => {
                let func = spyOn(calc,'resta').and.returnValue(3);
                let rslt = calc.resta(2,2);
                expect(func).toHaveBeenCalled();
                expect(3).toBe(rslt);
            })
            
            it('Spy', () => {
                let func = spyOn(calc,'division').and.returnValue(3);
                let rslt = calc.division(2,2);
                expect(func).toHaveBeenCalled();
                expect(3).toBe(rslt);
            })
            
            it('Spy', () => {
                let func = spyOn(calc,'multiplicacion').and.returnValue(3);
                let rslt = calc.multiplicacion(2,2);
                expect(func).toHaveBeenCalled();
                expect(3).toBe(rslt);
            })

        })

   
    })
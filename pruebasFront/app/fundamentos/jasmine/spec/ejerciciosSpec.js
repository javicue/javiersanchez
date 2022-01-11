

describe('Validar dni', () => {
    let validar = null;

    beforeEach(() => {
        validar = new validardni();
    });

    describe("Numeros", () => {
        it("Positivos", () => {
            let rslt = validar(48499503N);
            expec(/^[XYZ]?\d{5,8}[A-Z]$/).toBe(rslt);
        })
        it("Negativos", () => {
            let rslt = validar(7654-9876N);
            expec(/^[XYZ]?\d{5,8}[A-Z]$/).toBe(rslt);
        })
        
    })

    describe("Inconv", () => {
        it('Más letras', () => {
            let rslt = validar(23767898NH);
            expect(rslt).toBeNaN();
        })
        it("No valores", () => {
            let rslt = validar(234567++B);
            expect(rslt).toBeNaN();
        })
})


describe('Numeros Primos', () => {
    let primo = null;

    beforeEach(() => {
        primo = new primo();
    });

    describe("Numeros", () => {
        it("Positivos", () => {
            let rslt = primo(23);
            expec(23).toBe(rslt);
        })
        it("Negativos", () => {
            let rslt = primo(-5);
            expec(5).toBe(rslt);
        })
        it('Cero', () => {
            let rslt = primo(0);
            expect(0).toBe(rslt);
        })

        
    })

    xdescribe("Inconv", () => {
        it('Cadenas', () => {
            let rslt = primo('23');
            expect(rslt).toBeNaN();
        })
        it("No valores", () => {
            let rslt = primo(*);
            expect(rslt).toBeNaN();
        })
})

describe('Prueba palíndromo', () => {
   let palindromo = null;

   
   beforeEach(() => {
    palindromo = new comparar();
});

fdescribe('pruebas', () => {
    it('Cadenas', () => {
        let rslt = palindromo('La ruta nos aporto otro paso natural');
        expect(rslt).toBeEqual('La ruta nos aporto otro paso natural');
    })
    xit("valores", () => {
        let rslt = palindromo(6879487);
        expect(rslt).toBeUndefined();
    })
    it("otros valores", () => {
        let rslt = palindromo(*+sd'sd,ew.);
        expect(rslt).toBeUndefined();
    })


})
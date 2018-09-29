class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    // string template => `${variavel}`, deve-se usar backtick (crase)
    // o template string é capaz de interpolar as variáveis que estão dentro da string
    // recuperando o valor delas e substituindo as pelos seus valores
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}
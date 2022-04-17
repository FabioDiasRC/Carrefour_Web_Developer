function errorTeste(arr, num){
  
  try {
    if (!arr & !null){
      throw new ReferenceError('nao possui parametros')
    }
    if (typeof arr !== 'object') throw new TypeError('Array precisa ser declarado como object')
    if (typeof num !== 'number') throw new TypeError('Array precisa ser declarado como object')
    if (arr.length !== num) throw new RangeError('tamanho invalido')

    return arr
  }
    catch (e) {
      //pode-se filtra os tipos de erro no catch
      if (e instanceof ReferenceError){ 
      console.log('este erro é um reference error')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('este erro e de typeError')
      console.log(e.message)
    }else if (e instanceof RangeError) {
      console.log('este erro e de typeError')
      console.log(e.message)
    }else {
      console.log('occorreu um erro nao esperado')
      console.log(e)
  }
}}

console.log(errorTeste())
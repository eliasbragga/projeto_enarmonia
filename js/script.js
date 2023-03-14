function enviar() {
    var txt = window.document.getElementById('txt1')
    var res = window.document.getElementById('res')
    var resultado = String(txt.value) 
    var resu = resultado[0]?.toUpperCase() + resultado?.substring(1)
    txt.value = ''
    setTimeout(() => {
        res.innerHTML = 'Resultado'
    }, 7000)
    res.innerHTML = `A nota que você digitou foi ${resu}.`
    if (resu == 'C#' ){
        res.innerHTML += ` No entando, a nota enarmônica de ${resu} é Db`
    }else if (resu == 'D#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é Eb`
    }else if (resu == 'E#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é F`
    }else if (resu == 'F#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é Gb`
    }else if (resu == 'G#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é Ab`
    }else if (resu == 'A#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é Bb`
    }else if (resu == 'B#') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é C`
    }else if (resu == 'Cb'){
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é B`
    } else if (resu == 'Db') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é C#`
    } else if (resu == 'Eb') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é D#`
    } else if (resu == 'Fb') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é E`
    } else if (resu == 'Gb') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é F#`
    } else if (resu == 'Ab') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é G#`
    } else if (resu == 'Bb') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é A#`
    } else if (resu == 'C') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é B#`
    } else if (resu == 'D') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é D## ou Ebb`
    } else if (resu == 'E') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é D## ou Fb`
    } else if (resu == 'F') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é E# ou Gbb`
    } else if (resu == 'G') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é F## ou Abb `
    } else if (resu == 'A') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é G## ou Bbb`
    } else if (resu == 'B') {
        res.innerHTML += `No entando, a nota enarmônica de ${resu} é A## ou Cb`
    }else {
        window.alert('[ERRO] Digite apenas notas!')
        res.innerHTML ='Tente novamente!'
    }
    

  }
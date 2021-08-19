function search(){
    let wght = document.getElementById('weight')
    let hgt = document.getElementById('height')
    let sex = document.getElementsByName('radsex')
    let res = document.getElementById('result')
    let weight = Number(wght.value)
    let height = Number(hgt.value)
    let men = sex[0].checked
    let imc = weight / height**2
    let wrong = weight <= 0 || height<=0 || weight >= 500 || height >=3

    let magreza = imc < 18.5
    let normal = imc >= 18.5 && imc < 24.5
    let sobrepeso = imc >=25 && imc <= 29.9
    let obesidade = imc >= 30 && imc <= 39.9
    let obesidadeGrave = imc >=40

    
    if(wrong){
        window.alert('Valores incorretos ou impossiveis, Tente novamente!')
        }
    else if (men && magreza){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos um Homem com Magreza.</p>`
    } 
    else if(men && normal){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos um Homem de porte Normal.</p>`
    }
    else if (men && sobrepeso){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos um Homem com Sobrepeso.</p>`
    }
    else if (men && obesidade){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos um Homem com Obesidade.</p>`
    }
    else if (men && obesidadeGrave){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos um Homem com Obesidade Grave.</p>`
    }
    else if (magreza){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos uma Mulher com Magreza.</p>`
    }
    else if (normal){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos uma Mulher de porte Normal.</p>`
    }
    else if (sobrepeso){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos uma Mulher com Sobrepeso.</p>`
    }
    else if (obesidade){
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos uma Mulher com Obesidade.</p>`
    }
    else{
        res.innerHTML += `<p> Seu IMC teve o resultado de ${imc}`
        res.innerHTML += `<p>Detectamos uma Mulher com Obesidade Grave.</p>`
    }
}

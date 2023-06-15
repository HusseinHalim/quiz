const getNumbersAndMakeDivision = () =>{
    let num_1 = Number(document.getElementById('num_1').value)
    let den_1 = Number(document.getElementById('den_1').value)

    let num_2 = Number(document.getElementById('num_2').value)
    let den_2 = Number(document.getElementById('den_2').value)
    
    if (den_1 === den_2) {
        return `${Number(num_1 + num_2)}/${den_1}`
    }else{
        num_1 *= den_2
        den_1 *= den_2
        num_2 *= den_1
        den_2 *= den_1
        return `${Number(num_1 + num_2)}/${den_1}`
    }
}

const logGoal = () =>{
    document.getElementById('armstrong__').innerHTML = getNumbersAndMakeDivision();
}
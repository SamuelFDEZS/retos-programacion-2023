/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

let boton = document.querySelector("#boton")
console.log(boton)

boton.onclick = convertirLeet


function convertirLeet() {
    let characterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let leetArray = ['4', 'I3', '[', ')', '3', '|=', '&', '#', '1', ',_|', '>|', '1', '/\/\\', '^/', '0', '|*', '(_,)', 'I2', '5', '7', '(_)', '\/', '\/\/', '><', 'j', '2']
    let leet = ""
    let text = document.querySelector("#texto").value
    for (let i = 0; i < text.length; i++) {
        leet += leetArray[characterArray.indexOf(text[i])]
    }
    console.log(leet)
}
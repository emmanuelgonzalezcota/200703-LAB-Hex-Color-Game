(function(){

    "use strict"
    
    //Objeto con 147 colores
    var colorList={
        "aliceblue": "#f0f8ff",
        "antiquewhite": "#faebd7",
        "aqua": "#00ffff",
        "aquamarine": "#7fffd4",
        "azure": "#f0ffff",
        "beige": "#f5f5dc",
        "bisque": "#ffe4c4",
        "black": "#000000",
        "blanchedalmond": "#ffebcd",
        "blue": "#0000ff",
        "blueviolet": "#8a2be2",
        "brown": "#a52a2a",
        "burlywood": "#deb887",
        "cadetblue": "#5f9ea0",
        "chartreuse": "#7fff00",
        "chocolate": "#d2691e",
        "coral": "#ff7f50",
        "cornflowerblue": "#6495ed",
        "cornsilk": "#fff8dc",
        "crimson": "#dc143c",
        "cyan": "#00ffff",
        "darkblue": "#00008b",
        "darkcyan": "#008b8b",
        "darkgoldenrod": "#b8860b",
        "darkgray": "#a9a9a9",
        "darkgreen": "#006400",
        "darkgrey": "#a9a9a9",
        "darkkhaki": "#bdb76b",
        "darkmagenta": "#8b008b",
        "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00",
        "darkorchid": "#9932cc",
        "darkred": "#8b0000",
        "darksalmon": "#e9967a",
        "darkseagreen": "#8fbc8f",
        "darkslateblue": "#483d8b",
        "darkslategray": "#2f4f4f",
        "darkslategrey": "#2f4f4f",
        "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3",
        "deeppink": "#ff1493",
        "deepskyblue": "#00bfff",
        "dimgray": "#696969",
        "dimgrey": "#696969",
        "dodgerblue": "#1e90ff",
        "firebrick": "#b22222",
        "floralwhite": "#fffaf0",
        "forestgreen": "#228b22",
        "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc",
        "ghostwhite": "#f8f8ff",
        "goldenrod": "#daa520",
        "gold": "#ffd700",
        "gray": "#808080",
        "green": "#008000",
        "greenyellow": "#adff2f",
        "grey": "#808080",
        "honeydew": "#f0fff0",
        "hotpink": "#ff69b4",
        "indianred": "#cd5c5c",
        "indigo": "#4b0082",
        "ivory": "#fffff0",
        "khaki": "#f0e68c",
        "lavenderblush": "#fff0f5",
        "lavender": "#e6e6fa",
        "lawngreen": "#7cfc00",
        "lemonchiffon": "#fffacd",
        "lightblue": "#add8e6",
        "lightcoral": "#f08080",
        "lightcyan": "#e0ffff",
        "lightgoldenrodyellow": "#fafad2",
        "lightgray": "#d3d3d3",
        "lightgreen": "#90ee90",
        "lightgrey": "#d3d3d3",
        "lightpink": "#ffb6c1",
        "lightsalmon": "#ffa07a",
        "lightseagreen": "#20b2aa",
        "lightskyblue": "#87cefa",
        "lightslategray": "#778899",
        "lightslategrey": "#778899",
        "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0",
        "lime": "#00ff00",
        "limegreen": "#32cd32",
        "linen": "#faf0e6",
        "magenta": "#ff00ff",
        "maroon": "#800000",
        "mediumaquamarine": "#66cdaa",
        "mediumblue": "#0000cd",
        "mediumorchid": "#ba55d3",
        "mediumpurple": "#9370db",
        "mediumseagreen": "#3cb371",
        "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a",
        "mediumturquoise": "#48d1cc",
        "mediumvioletred": "#c71585",
        "midnightblue": "#191970",
        "mintcream": "#f5fffa",
        "mistyrose": "#ffe4e1",
        "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead",
        "navy": "#000080",
        "oldlace": "#fdf5e6",
        "olive": "#808000",
        "olivedrab": "#6b8e23",
        "orange": "#ffa500",
        "orangered": "#ff4500",
        "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa",
        "palegreen": "#98fb98",
        "paleturquoise": "#afeeee",
        "palevioletred": "#db7093",
        "papayawhip": "#ffefd5",
        "peachpuff": "#ffdab9",
        "peru": "#cd853f",
        "pink": "#ffc0cb",
        "plum": "#dda0dd",
        "powderblue": "#b0e0e6",
        "purple": "#800080",
        "rebeccapurple": "#663399",
        "red": "#ff0000",
        "rosybrown": "#bc8f8f",
        "royalblue": "#4169e1",
        "saddlebrown": "#8b4513",
        "salmon": "#fa8072",
        "sandybrown": "#f4a460",
        "seagreen": "#2e8b57",
        "seashell": "#fff5ee",
        "sienna": "#a0522d",
        "silver": "#c0c0c0",
        "skyblue": "#87ceeb",
        "slateblue": "#6a5acd",
        "slategray": "#708090",
        "slategrey": "#708090",
        "snow": "#fffafa",
        "springgreen": "#00ff7f",
        "steelblue": "#4682b4",
        "tan": "#d2b48c",
        "teal": "#008080",
        "thistle": "#d8bfd8",
        "tomato": "#ff6347",
        "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3",
        "white": "#ffffff",
        "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00",
        "yellowgreen": "#9acd32"
    }
    //Creamos un arreglo con los elementos del Objeto ColorList que contiene 147 colores
    var colorArray = Object.entries(colorList)
    
    function randomColor(){
        return colorArray[Math.floor(Math.random() * 148)]
    }

    function changeBackground(color){
        document.body.style.background = color
    }

    function fontChange(color){
        var cRgb = hexToRgb(color)
        if( cRgb[1] < 130 ){
            document.body.style.color = 'white'
            return true
        } else {return false}
    }
    
    function validarColor(){
        console.log("click-guess")
        //asignamos a answer el valor que se introduce en el input
        var answer = document.getElementById('hexInput').value
        // Verificamos con la funcion hexValidate si el valor hexadecimal introducido es valido 
        if (hexValidate(answer)===true){
            if (answer === color.substring(1)){alert("Color Correcto")} 
            else {alert("Color Incorrecto")}
            // Mandamos a llamar DisplayData
            displayData(color,answer) 
        }        
    }

        function hexValidate(answer){
            var re = /[0-9A-Fa-f]{6}/g
            if(re.test(answer)) {
                re.lastIndex = 0; 
                return true
            } else {
                alert('El valor debe de ser de 6 caracteres del 0 a la f (#000000 - #ffffff)')
                re.lastIndex = 0; 
                return false
            } 
        }

        function displayData(color,answer){
            // console.log("Tu Color:",answer)
            var answerHex = "#"+answer
            //Nos posicionamos en la clase props y borramos su contenido
            var props = document.querySelector('.props')
            console.log(props)
            props.innerHTML = ''
            //Insertamos Tu Color
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<div class="singleText">'+"Tu Color:"+'</div>'+'<div id="yourColor" style="background-color:' + answerHex + ';">'+ ' ' +'</div>'
            props.appendChild(row)
            // Validamos el color de fondo para cambiar el color del borde del color introducido
            if (fontChange(color)===true){document.getElementById("yourColor").style.borderColor = "white"} 
            //Insertamos Respuesta
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<div class="singleText">'+"Respuesta:"+'</div>'+'<div class="boldText">'+ answerHex +'</div>'
            props.appendChild(row)
            //Insertamos distancia y la calculamos con la funcion dictanceCalc
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<div class="singleText">'+"Distancia:"+'</div>'+'<div class="boldText">'+ distanceCalc(color,answerHex) +'</div>'
            props.appendChild(row)
            //Insertamos leyenda de distancia
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<div class="singleText">'+"Entre mas cercano a 0 es mejor."+'</div>'
            props.appendChild(row)
            //Insertamos el boton ANOTHER 
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<button id="anotherBtn">ANOTHER</button>'
            props.appendChild(row)
            //creamos evento y listener para llamar lafuncion reload al click del Boton
            var another = document.getElementById('anotherBtn')
            another.addEventListener('click',reLoad)
            //Insertamos el nombre del color del fondo
            var row = document.createElement('div')
            row.setAttribute('class',"row")
            row.innerHTML =  '<div class="singleText" id="colorName">'+colorName+'</div>'
            props.appendChild(row)
        }
            
            function distanceCalc(color,answer){
                // Mediante la funcion hexToRgb obtenemos un arreglo rgb de los colores
                var cRgb = hexToRgb(color)
                var aRgb = hexToRgb(answer)
                return (Math.sqrt((cRgb[0]-aRgb[0])**2 + (cRgb[1]-aRgb[1])**2 + (cRgb[2]-aRgb[2])**2)).toFixed(2)
            }

                function hexToRgb(color){
                    return [
                        parseInt(color.substring(1,3), 16),
                        parseInt(color.substring(3,5), 16),
                        parseInt(color.substring(5), 16)
                    ]
                }

            function reLoad(){
                console.log('click-another')
                document.location.reload()
            }

    // MAIN
    // Mandamos a llamar la funcion randomColor para definir color de fondo
    var fondo = (randomColor()) 
        var color = fondo[1]
        console.log(color)        
        var colorName = fondo[0]
        console.log(colorName)
    // Mandamos a llamar la funcion para cambiar el color de fondo
    changeBackground(color)
    // Se llama la funcion de cambio de color de fuente y esta evalua si se cambia o no
    // acorde a su valor Green
    fontChange(color)
    // creamos evento a partir del id del Guess Button 
    var validate = document.getElementById('guessBtn')
    // mandamos a llamar la funcion validarColor a partir del evento click
    validate.addEventListener('click',validarColor)
  
})();






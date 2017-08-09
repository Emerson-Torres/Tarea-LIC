var text2display = "";
var respuestas = new Array(3);
respuestas[0] = "1. Es la cantidad de calor necesaria para elevar en 1 ºC la temperatura de una cantidad dada de materia.\n\n";
respuestas[1] = "2. Forma de energía asociada al movimiento de los átomos, moléculas u otras partículas que forman la materia.\n\n";
respuestas[2] = "3. Es el calor requerido para elevar la temperatura de 1 g de una sustancia en 1 ºC.\n\n";

var questions = new Array(3);
questions[0] = "q1";
questions[1] = "q2";
questions[2] = "q3";



function checkQs(s)
{
    var qs = document.getElementsByName(s);
var noOfRadio = qs.length;

    for(var i = 0; i < noOfRadio; i++)
        {
            if(qs[i].checked)
                {
                    if(qs[i].value=="correct")
                       text2display = text2display + "Respuesta correcta\n";
                    else text2display = text2display + respuestas [questions.indexOf(s)];

                    break;


          }
     }
}

function checkAll()
{
for(var i =0; i <questions.length; i++)
    {
        checkQs(questions[i]);
    }
    lol.cajarespuestas.value = text2display;
}


    $(window).load(function() {
        $('.flexslider').flexslider({
            controlsContainer: '.flex-container'
            });
        });
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var peticion = false;
var  testPasado = false;

try 
{
        peticion = new XMLHttpRequest();
}
    catch (trymicrosoft) 
    {
    try
    {
        peticion = new ActiveXObject("Msxml2.XMLHTTP");
    } 
    catch (othermicrosoft) 
    {
        try 
        {
            peticion = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (failed) 
        {
        peticion = false;
        }
    }
}

if (!peticion)alert("ERROR AL INICIALIZAR!");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  

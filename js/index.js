
var gravedadMarte = 3.7
var gravedadJupiter = 24.8
var gravedadSaturno = 10.44
var gravedadMercurio = 3.7
var gravedadVenus = 8.87
var gravedadLuna = 1.62
var gravedadUrano = 8.7
var gravedadNeptuno = 11.15
var gravedadPluton = 9.8
var g_tierra = 9.8

function getPlanet(){
  var pesoUsuario = parseFloat(document.getElementById("peso_usuario").value);
  var planeta_seleccionado = document.getElementById("planeta").value;
  console.log('Selecciono el planeta ' + planeta_seleccionado);
  switch (planeta_seleccionado) {
    case 'marte':
        var pesoMarte =(pesoUsuario*gravedadMarte)/g_tierra
        console.log(pesoMarte);
        document.getElementById("resultado").innerHTML = 'Tu peso en ' + planeta_seleccionado + ' es ' + pesoMarte.toFixed(2) + " Kg"
      break;
    case 'jupiter':
      var pesoJupiter =(pesoUsuario*gravedadJupiter)/g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoJupiter.toFixed(2) + " Kg"
      break;
    case 'saturno':
      var pesoSaturno = (pesoUsuario*gravedadSaturno)/g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoSaturno.toFixed(2) + " Kg"
      break;
    case 'mercurio':
      var pesoMercurio = (pesoUsuario*gravedadMercurio) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoMercurio.toFixed(2) + " Kg"
      break;
    case 'venus':
      var pesoVenus = (pesoUsuario*gravedadVenus) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoVenus.toFixed(2) + " Kg"
      break;
    case 'luna':
      var pesoLuna = (pesoUsuario*gravedadLuna) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoLuna.toFixed(2) + " Kg"
      break;
    case 'urano':
      var pesoUrano= (pesoUsuario * gravedadUrano) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoUrano.toFixed(2) + " Kg"
      break;
    case 'neptuno':
      var pesoNeptuno = (pesoUsuario * gravedadNeptuno) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoNeptuno.toFixed(2) + " Kg"
      break;
    case 'pluton':
      var pesoPluton = (pesoUsuario * gravedadPluton) / g_tierra
      document.getElementById("resultado").innerHTML ='Tu peso en ' + planeta_seleccionado + ' es ' + pesoPluton.toFixed(2) + " Kg"
      break;
    default:
      console.log('Selecciona algo pendejo')
      document.getElementById("resultado").innerHTML = 'Selecciona un planeta ' + 'Tu peso en kripton es 999,99999999999 kg'

  }
}

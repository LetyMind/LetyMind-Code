let year = new Date(),
fullY = year.getFullYear(),
Actual = document.getElementById("Actual"),
borrar = document.getElementById("borrar_play"),
ventana = window.innerWidth


Actual.textContent = fullY


ventana < 992 ? borrar.remove() : console.log("Ventana mayor a 992 pixeles");










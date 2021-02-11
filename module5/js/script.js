function sayHello() {
    var name = document.getElementById("name").value;
    var message = "Hello " + name + "!"; 
    //document.getElementById("content").textContent = message;   Para ponerle texto plano
    var message2 = "<h2>Hello "+name+ " ! </h2>"
    document.getElementById("content").innerHTML = message2;

    //Mejorar la funcion
    if(name === "student"){
        var title = document.querySelector("#title").textContent; // Se selecciona como en CSS
        title += " & lo estoy amando"
        document.querySelector("#title").textContent = title; // Aqui se le asigna el valor de la variable al compoente del HTML
        // Tambien se podría = document document.querySelector("h1").textContent = title    por lo que solamente hay un elemto de estos
    }
}
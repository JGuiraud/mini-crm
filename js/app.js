var customers = [
	{
        "id":1,
    	"first_name":"Allan",
    	"last_name":"Cerveaux",
    	"company":"Simplon",
        "role":"Formateur",
    	"phone":"06.61.64.13.69",
    	"email":"acerveaux@simplon.co",
    	"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia."
	},
	{
        "id":2,
    	"first_name":"Jean",
    	"last_name":"Pascal",
    	"company":"Simplon",
        "role":"Employé",
    	"phone":"06.61.25.35.69",
    	"email":"jpascal@mail.co",
    	"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    },
    {
        "id":3,
        "first_name":"Romuald",
        "last_name":"Laurem",
        "company":"S.Lipsum",
        "role":"Manager",
        "phone":"06.61.25.35.69",
        "email":"rlaureml@lipsum.co",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit molestias, voluptatem id blanditiis modi nobis eum esse fugiat debitis dignissimos voluptatum minus iusto provident fuga libero aliquid asperiores omnis quaerat. Incidunt, consequatur dicta quia." 
    }
]



for (var i = 0; i < customers.length; i++) {

    var divhtml = document.createElement("div");
    var tartine = document.getElementById("main").appendChild(divhtml);
    
    divhtml.classList.add('card'); // ou divhtml.className = "card";
    divhtml.innerHTML = 
        "<h3>" + customers[i].first_name + " " + 
        customers[i].last_name + "</h3>" + 
        customers[i].company + ", " + 
        customers[i].role + "<br>" +
        customers[i].phone + "<br>" +
        customers[i].email + "<br>"+"<br>" +
        customers[i].description 
} 



// ------------------------ Correction ------------------------
 // for (var i = 0; i < customers.length; i++) {

 //    var divhtml = document.createElement("div");
 //    var tartine = document.getElementById("main").appendChild(divhtml);
    
 //    divhtml.classList.add('card'); // ou divhtml.classNAme = "card";
 //    divhtml.innerHTML = 
 //                '<div class="content"><div class="header">' + customers[i].first_name + " " + 
 //                customers[i].last_name + '</div>' + 
 //                customers[i].company + ", " + 
 //                customers[i].role + "<br>" +
 //                customers[i].phone + "<br>" +
 //                customers[i].email + "<br>"+"<br>" +
 //                customers[i].description + '</div>'
 //     } 
 // -----------------------------------------------------------



// var customer1 = customers[0];
// var customer2 = customers[1];
// var customer3 = customers[2];


// document.getElementById('user1').innerHTML = 
// customers[0].first_name + " " + 
// customers[0].last_name + "<br>" +
// customers[0].company + ", " + 
// customers[0].role + "<br>" +
// customers[0].phone + "<br>" +
// customers[0].email + "<br>" +
// customers[0].description 

// document.getElementById('user2').innerHTML = 
// customers[1].first_name + " " + 
// customers[1].last_name + "<br>" +
// customers[1].company + ", " + 
// customers[1].role + "<br>" +
// customers[1].phone + "<br>" +
// customers[1].email + "<br>" +
// customers[1].description

// document.getElementById('user3').innerHTML = 
// customers[2].first_name + " " + 
// customers[2].last_name + "<br>" +
// customers[2].company + ", " + 
// customers[2].role + "<br>" +
// customers[2].phone + "<br>" +
// customers[2].email + "<br>" +
// customers[2].description 
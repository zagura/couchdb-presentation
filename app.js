var host = "http://127.0.0.1:5984/";
var id = 001;
var db_name = 'projekt_db';
// function create_db(db_name){
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("PUT", host + db_name, true); // true for asynchronous 
//     xmlHttp.send(null);
// }
function show(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200)
            //callback(xmlHttp.responseText);
        	alert(JSON.stringify(JSON.parse(xhttp.responseText), null, 2));
    }
    xhttp.open("GET", host.concat("_all_dbs"), true); // true for asynchronous 
    xhttp.send();
    //alert(xmlHttp.responseText);
}
function create_db(db_name){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200){
            //callback(xhttp.responseText);
        	alert('Database created');
        	//alert(JSON.stringify(JSON.parse(xhttp.responseText), null, 2));
        }
    }
    xhttp.open("PUT", host.concat(db_name), true); // true for asynchronous 
    xhttp.send();
    //alert(xmlHttp.responseText);
}
function delete_db(del_db){
	var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200){
        	alert('Database ' + del_db + ' deleted');
    	}
    }
    xhttp.open("DELETE", host.concat(del_db), true); // true for asynchronous 
    xhttp.send();
}
function insert_doc(db, key, value){
	    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200){
            //callback(xhttp.responseText);
        	alert('Doc inserted');
        	//alert(JSON.stringify(JSON.parse(xhttp.responseText), null, 2));
        }
    }
    var in_doc = {"key":key, "Value": value};
    xhttp.open("POST", host.concat(db), true); // true for asynchronous 
    xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(in_doc));
}
function get_doc(db_n, __id){
	    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200){
        	alert(JSON.stringify(JSON.parse(xhttp.responseText), null, 2));
        }
    }
    var route = host.concat(db_n);
    route.concat("/");
    route.concat(__id);
    xhttp.open("GET", route , true); // true for asynchronous 
    //xhttp.setRequestHeader("Content-Type", "application/json");
	//xhttp.send(JSON.stringify(in_doc));
	xhttp.send()
}
function get_docs(db_name){
	    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() { 
        if (xhttp.readyState == 4 && xhttp.status == 200){
        	alert(JSON.stringify(JSON.parse(xhttp.responseText), null, 2));
        }
    }
    var route = host.concat(db_name);
    route = route.concat("/_all_docs")
    xhttp.open("GET", route , true); // true for asynchronous 
    //xhttp.setRequestHeader("Content-Type", "application/json");
	//xhttp.send(JSON.stringify(in_doc));
	xhttp.send(null)
}

var template = (
    <div>
        <h1>Rendered div</h1>
        <p>Rendered paragraph tag</p>
    </div>
);
var user = {
    userName: "akshay Patil",
    userAge: "24",
    address:{
        userLocation: "Pune",
    }
}

var templatetwo = (
    <div>
        <h1>{(user.userName === "Akshay Patil" && user.userAge <= 10) && <p>Age: {user.userAge}</p> }</h1>
        <h1>{user.address.userLocation}</h1>
    </div>
);


var approot = document.getElementById('render');

ReactDOM.render(templatetwo,approot);
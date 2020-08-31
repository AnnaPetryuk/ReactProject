var express = require('express');
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');
var url = require('url');
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3003;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});

// app.post('/auth', function (req, res) {
// 	const path = './users.json';

// 	jsonReader(path, (err, userList) => {
// 	    if (err) {
// 	        console.log('Error reading file:',err)
// 	        return
// 	    }

// 	    const {login, password} = req.body;
// 	    let isExist = false;
// 		let signInUser;

// 		userList.forEach(function(arrayItem) {
// 			if (arrayItem.login == login && arrayItem.password == password) {
// 				signInUser = arrayItem;
// 				isExist = true;
// 				delete signInUser.login;
// 				delete signInUser.password;
// 			}
// 		});

// 		console.log(signInUser);

// 		if (isExist) {
// 			res
// 			.status(200)
// 	        .send(JSON.stringify(signInUser));
	        
// 		} else {
// 			res
// 			.status(401)
// 			.send('Not found');
// 		}
// 	});
// });

// app.post('/registrate-user', function (req, res) {
// 	const path = './users.json';

// 	jsonReader(path, (err, userList) => {
// 		if (err) {
// 			console.log('Error reading file:',err)
// 			return
// 		}

// 		let user = new User(req.body);
//         userList.push(user);

// 		jsonWriter(path, JSON.stringify(userList), err);
		
// 		res
// 		.status(200)
// 		.send(JSON.stringify(user)); 
// 	})
// });

// app.post('/create-card', function (req, res) {
// 	let card = req.body;
// 	let user = card[card.length-1];
	
// 	card.splice(card.length-1, 1);
	
// 	fs.writeFile(`./cards/${user}.json`, JSON.stringify(card), function (err) {
// 		if (err) throw err;
// 			console.log('File is created successfully.');
// 	}); 
	
// 	res
// 	.status(200)
// 	.send(user); 
// });


// function User({firstName, lastName, login, age, password}) {
// 	this.id = Math.random().toString(36).substr(2, 6);
// 	this.roleName = 'user';
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.login = login;
// 	this.age = age;
// 	this.password = password;
// }

app.get('/get-heroes', function (req, res) {
	const path = './heroes.json';

	jsonReader(path, (err, heroesList) => {
	    if (err) {
	        console.log('Error reading file:',err)
	        return
		}
		
		console.log(heroesList);

		res
		.status(200)
	    .send(heroesList);
	});
});

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    });
}

function jsonWriter(filePath, obj, err) {
	fs.writeFile(filePath, obj, err => {
		if (err) {
		    console.log('Error writing file', err);
		} else {
			console.log('Successfully wrote file');
		}
	})
}
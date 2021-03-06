// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
})
router.get('/:path', (req, res) =>{
	const path = req.params.path

res.json({

	data: path
})

})

router.get('/query', (req, res) =>{
	const name = req.query.name
	const occupation = req.query.occupation

	const data = {


		name : name, 
		occupation: occupation
	}
res.render('profile', data)
	//res.json({

    //       name : name,
     //      occupation : occupation

	//})
})


router.get('/:profile/:username', (req, res) =>{
	const profile = req.params.profile
	const username = req.params.username

res.json({

	data: profile,
	data: username
})

})


module.exports = router

UserController =require('./controllers/users/user-controller');

var routes = function(app) {
    /**
     * Init webservice route.
     * @method InitWebSerivceRoutes
     * */
    function InitWebServiceRoutes(app) {
        app.route('/api/user/register/').get(UserController.register);
    }
    InitWebServiceRoutes(app);
    // application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
module.exports = routes;
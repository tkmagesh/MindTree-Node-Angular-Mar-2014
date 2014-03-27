var tasks = [
	{id : 1, name : "Learn jQuery"},
	{id : 2, name : "Explore Node.js"},
	{id : 3, name : "Master JavaScript"},
];
module.exports = {
	list : function(req,res){
		req.session["loginTime"] = new Date();
		res.render("tasks/index", {title : 'Tasks', tasks : tasks});
	},
	add : function(req,res){
		console.dir(req.session);
		console.log(req.session["loginTime"]);
		var newTaskId = tasks.reduce(function(t1,t2){
			return t1.id > t2.id ? t1.id : t2.id;
		}) + 1;
		var taskName = req.body.taskName;
		var newTask = { id : newTaskId, name : taskName};
		tasks.push(newTask);
		res.end(JSON.stringify(newTask));	
		//res.render("tasks/index", {title : 'Tasks', tasks : tasks});

	}
}
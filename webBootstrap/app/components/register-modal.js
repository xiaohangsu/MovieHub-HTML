export default {
	template:'<div class="modal fade" id="registerModal" role="dialog">\
            <div class="modal-dialog">\
                \
                <!-- Modal content-->\
                <div class="modal-content">\
                    <div class="modal-header" style="padding:35px 50px;">\
                        <button type="button" class="close" data-dismiss="modal">&times;</button>\
                        <h4><span class="glyphicon glyphicon-lock"></span> Register</h4>\
                    </div>\
                    <div class="modal-body" style="padding:40px 50px;">\
                        <form role="form">\
                            <div class="form-group">\
                                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Username</label>\
                                <input type="text" class="form-control" id="usrname" placeholder="Enter email">\
                            </div>\
                            <div class="form-group">\
                                <label for="usrname"><span class="glyphicon glyphicon-user"></span> Email</label>\
                                <input type="email" class="form-control" id="usrname" placeholder="Enter email">\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Password</label>\
                                <input type="text" class="form-control" id="psw" placeholder="Enter password">\
                            </div>\
                            <div class="form-group">\
                                <label for="psw"><span class="glyphicon glyphicon-eye-open"></span> Repeat Password</label>\
                                <input type="text" class="form-control" id="psw" placeholder="Enter password">\
                            </div>\
                            <button type="submit" class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span> Register</button>\
                        </form>\
                    </div>\
                    <div class="modal-footer">\
                        <!--  <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>\
                        <p>Not a member? <a href="#">Sign Up</a></p>\
                        <p>Forgot <a href="#">Password?</a></p> -->\
                    </div>\
                </div>\
                \
            </div>\
        </div>'
    }
var ipfs={
    'content':'<div class="ipfs">\n' +
    '        <div class="container user_register" style="position: relative;width: 40%;text-align: center;margin-top: 10%">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12 col-md-offset-4">\n' +
    '                    <div class="login-panel panel panel-default">\n' +
    '                        <div class="panel-heading">\n' +
    '                            <h3 class="panel-title">远程访问注册</h3>\n' +
    '                        </div>\n' +
    '                        <div class="panel-body">\n' +
    '                            <form>\n' +
    '                                <input type="hidden" value="<?= Yii::$app->getRequest()->getCsrfToken() ?>" name="_csrf" />\n' +
    '                                <fieldset>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <input class="form-control" placeholder="username" id="rusername" name="username" type="username" autofocus>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group">\n' +
    '                                        <input class="form-control" placeholder="Password" id="rpassword" name="password" type="password">\n' +
    '                                    </div>\n' +
    '                                    <input class="btn btn-lg btn-success btn-block register-success" value="注册" />' +
    '                                    <span>已有账号？</span><a href="http://yh-technology.com:81/login/" class="register-log">登录</a>\n' +
    '                                </fieldset>\n' +
    '                            </form>\n' +
    '                            <div style="color:red" data-bind="html:errmsg"></div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'
};
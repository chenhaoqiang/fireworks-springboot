<!DOCTYPE html>
<html>
<head>
    <title>登录界面</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="lib/bootstrap/login.css" />
</head>

<body>
<div class="loginpage">
    <div class="loginpage-bg"></div>
    <div class="container">
        <div class="login">
            <div class="row">
                <div class="title-text col-md-12">
                    <h1 class="h1fontsize">孤帆远影碧空尽,唯见长江天际流</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <form id="form" class="form-horizontal" role="form" onsubmit="return false;">
                        <div class="form-group login-group1">
                            <span class="glyphicon glyphicon-user login-icon"></span> <label
                                class="login-label">帐号</label> <input type="text"
                                                                      class="form-control" name="username"
                                                                      placeholder="请输入帐号">
                        </div>
                        <div class="form-group login-group2">
                            <span class="glyphicon glyphicon-lock login-icon"></span> <label
                                class="login-label">密码</label> <input type="password"
                                                                      class="form-control" name="password"
                                                                      placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <button id="submit-btn" class="btn btn-block btn-primary btn-lg" onclick="login();">登录
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 模态框（Modal） -->
<div class="modal fade" id="modal" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true">×
                </button>
                <h4 class="modal-title" id="myModalLabel">提示</h4>
            </div>
            <div class="modal-body" id="modal-body"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<script src="lib/bootstrap/js/jquery-1.11.2.js"></script>
<script src="lib/bootstrap/js/bootstrap.js"></script>
<script src="lib/login.js"></script>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta charset="utf-8"/>
    <title>管理系统</title>
    <link id="theme" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="lib/css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="lib/css/app.css"/>
    <link rel="stylesheet" type="text/css" href="hzsun/hzsun.css"/>
    <script src="lib/extjs/ext-all-debug.js" type="text/javascript"></script>
    <script src="lib/extjs/ext-locale-zh_CN.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
    <script src="app/util/Comm.js" type="text/javascript"></script>

    <script type="text/javascript">
        comm.add("platformSession", ${Session.platformSession});
        comm.add("softwareVersion", '${softwareVersion}');
        var fireworksTheme = Ext.util.Cookies.get('fireworks-theme');
        if (fireworksTheme) {
            Ext.fly('theme').set({href: 'lib/extjs/themes/' + fireworksTheme + '/ext-theme-' + fireworksTheme + '-all.css'});
        } else {
            Ext.fly('theme').set({href: 'lib/extjs/themes/crisp/ext-theme-crisp-all.css'});
        }
    </script>
</head>
<body>
</body>
</html>
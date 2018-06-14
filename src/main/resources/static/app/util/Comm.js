/** 静态变量声明 */
var comm = Ext.create('Ext.util.MixedCollection');

/** model包名 */
comm.add('modelPackageName', 'com.hzsun.fw.javabean.dto.');

/** 数据字典类型 */
var dictType = {
	TODO_TYPE : 1,
	TODO_STATUS : 2,
	NOTE_TYPE : 3,
	ID_TYPE : 28
};
comm.add("dictType", dictType);

var ExtUtil = {
    getGridSelectedArr : function(gridPanel, idName) {
        var selectedArr = [];
        var records = gridPanel.getSelection();
        for ( var i = 0; i < records.length; i++) {
            selectedArr.push(records[i].get(idName));
        }
        return selectedArr;
    },
    getTreeCheckedArr : function(treePanel) {
        var checkedArr = [];
        var records = treePanel.getChecked();
        for ( var i = 0; i < records.length; i++) {
            if (!records[i].get('root')) {
                checkedArr.push(records[i].get('id'));
            }
        }
        return checkedArr;
    },
    hasPermission : function(moduleCode) {
        return comm.get('platformSession').moduleCodes.indexOf(moduleCode) == -1 ? false
            : true;
    }
};

var FileUtil = {
    download : function(action, elementObj, target) {
        FormUtil.submit('fileUploadForm', action, target, elementObj);
        var form = document.getElementById('fileUploadForm');
        if (form) {
            form.parentNode.removeChild(form);
        }
    }
};

var FormUtil = {
    submit : function(formId, action, target, elementObj) {
        var form = this.getForm(formId, action, target, elementObj);
        if (form) {
            form.submit();
        }
    },
    getForm : function(formId, action, target, elementObj) {
        if (!formId) {
            formId = 'formId';
        }
        if (!action) {
            action = '';
        }
        if (!target) {
            target = '';
        }
        var form = document.createElement('form');
        form.id = formId;
        form.method = 'post';
        form.target = target;
        form.action = action;
        if (elementObj) {
            for ( var p in elementObj) {
                if (p && '' !== p && null != elementObj[p]
                    && undefined !== elementObj[p]) {
                    var element = document.createElement('input');
                    element.setAttribute('type', 'hidden');
                    element.setAttribute('name', p);
                    element.setAttribute('value', elementObj[p]);
                    form.appendChild(element);
                }
            }
        }
        document.body.appendChild(form);
        return form;
    }
};
create table om_system_log
(
	log_id bigint not null comment '来自平台数据最大值表'
		primary key,
	create_time datetime not null,
	log_type int not null comment '对应系统字典表125：服务日志类型。',
	content text not null
)
	engine=InnoDB
;

create table sc_dict
(
	type_num int not null comment '来自系统字典类型表',
	dict_num int not null comment '同一类型的字典编码不能重复。',
	dict_code varchar(16) not null comment '同一类型的字典码不能重复。例如民族码。',
	dict_name varchar(128) not null comment '同一类型的字典名称不能重复',
	parent_dict_num int null comment '来自本表',
	remark varchar(256) null,
	primary key (type_num, dict_num)
)
	engine=InnoDB
;

create table sc_dict_type
(
	type_num int not null comment '不可重复。'
		primary key,
	type_name varchar(128) not null comment '名称不重复；',
	can_modify int not null comment '0-不可维护；1-可维护；
	            不可维护的类型字典只能查看。可维护的字典提供默认数据给使用单位复用。
	            ',
	remark varchar(128) null
)
	engine=InnoDB
;

alter table sc_dict
	add constraint FK_dict_dicttype
foreign key (type_num) references sc_dict_type (type_num)
;

create table sc_module
(
	module_code varchar(9) not null
		primary key,
	parent_code varchar(9) null,
	module_name varchar(128) not null,
	sort_id int not null,
	remark varchar(128) null,
	module_tag varchar(128) null,
	style varchar(32) null
)
	engine=InnoDB
;

create table sc_role
(
	role_id int not null comment '全库唯一'
		primary key,
	role_name varchar(32) not null comment '同一使用单位不允许重复',
	flag int not null comment '0-禁用，1-启用',
	remark varchar(128) null
)
	engine=InnoDB
;

create table sc_role_module
(
	role_id int not null comment '来自角色表',
	module_code varchar(9) not null comment '来自功能模块表',
	primary key (role_id, module_code),
	constraint FK_rolemodule_role
	foreign key (role_id) references sc_role (role_id),
	constraint FK_rolemodule_module
	foreign key (module_code) references sc_module (module_code)
)
	engine=InnoDB
;

create index FK_rolemodule_module
	on sc_role_module (module_code)
;

create table sc_system_config
(
	cfg_code char(8) not null
		primary key,
	cfg_value varchar(512) null,
	remark varchar(512) null
)
	comment '系统配置表' engine=InnoDB
;

create table sc_table_maxnum
(
	table_name varchar(32) not null comment '字符全小写',
	field_name varchar(32) not null comment '字符全小写',
	current_value bigint not null,
	remark varchar(128) null,
	primary key (table_name, field_name)
)
	engine=InnoDB
;

create table sc_upgrade_log
(
	log_id int auto_increment
		primary key,
	upgrade_user varchar(16) not null,
	upgrade_time datetime not null,
	software_version varchar(12) not null,
	upgrade_content varchar(512) not null comment '升级内容，以|分隔'
)
	comment '软件升级日志表' engine=InnoDB
;

create table sc_user
(
	user_id int not null
		primary key,
	user_num varchar(32) not null,
	user_name varchar(32) not null,
	login_password varchar(32) not null comment '3DES加密',
	is_default_password int not null comment '0-非；1-是默认密码。用以判断默认密码是否需要强制改密',
	id_type int null comment '来自系统字典表28：证件类型。',
	id_no varchar(20) null,
	flag int not null,
	phone_no varchar(32) null,
	email varchar(64) null,
	remark varchar(128) null
)
	engine=InnoDB
;

create table sc_user_module_use
(
	user_id int default '0' not null,
	module_code varchar(9) default '' not null,
	use_times int not null comment '最后使用次数',
	last_use_time datetime null comment '最后使用时间',
	primary key (user_id, module_code),
	constraint sc_module_use_sc_user_user_id_fk
	foreign key (user_id) references sc_user (user_id),
	constraint sc_module_use_sc_module_module_code_fk
	foreign key (module_code) references sc_module (module_code)
)
	comment '用户模块使用表' engine=InnoDB
;

create index sc_module_use_sc_module_module_code_fk
	on sc_user_module_use (module_code)
;

create table sc_user_role
(
	user_id int not null,
	role_id int not null,
	primary key (user_id, role_id),
	constraint FK_userrole_user
	foreign key (user_id) references sc_user (user_id),
	constraint FK_userrole_role
	foreign key (role_id) references sc_role (role_id)
)
	engine=InnoDB
;

create index FK_userrole_role
	on sc_user_role (role_id)
;

create table tk_note
(
	note_id int not null
		primary key,
	note_name varchar(64) not null,
	note_type int not null,
	content varchar(512) not null,
	create_time datetime not null,
	create_user varchar(32) not null,
	update_time datetime null,
	update_user varchar(32) null
)
	engine=InnoDB
;

create table tk_note_attachment
(
	rec_id int not null
		primary key,
	note_id int null,
	note_num int not null,
	attachment longblob not null,
	constraint FK_attachment_note
	foreign key (note_id) references tk_note (note_id)
)
	engine=InnoDB
;

create index FK_attachment_note
	on tk_note_attachment (note_id)
;

create table tk_todo
(
	todo_num int not null
		primary key,
	content varchar(512) not null,
	create_time datetime not null,
	create_user varchar(32) not null,
	status int not null,
	todo_type int null comment '数据字典1',
	complete_remark varchar(512) null,
	complete_time datetime null,
	complete_user varchar(32) null
)
	engine=InnoDB
;

create table tk_todo_attachment
(
	rec_id char(10) not null
		primary key,
	todo_num int not null,
	attachment longblob not null,
	constraint FK_attachment_todo
	foreign key (todo_num) references tk_todo (todo_num)
)
	engine=InnoDB
;

create index FK_attachment_todo
	on tk_todo_attachment (todo_num)
;


package com.chq.fireworks.common.constant;

public enum TableMaxNumEnum {

    ROLE("sc_role", "role_id"),
    SYSTEM_LOG("om_system_log", "log_id"),
    USER("sc_user", "user_id"),
    TODO("tk_todo", "todo_num");

    private String tableName;
    private String fieldName;

    public String getTableName() {
        return tableName;
    }

    public String getFieldName() {
        return fieldName;
    }

    private TableMaxNumEnum(String tableName, String fieldName) {
        this.tableName = tableName;
        this.fieldName = fieldName;
    }
}

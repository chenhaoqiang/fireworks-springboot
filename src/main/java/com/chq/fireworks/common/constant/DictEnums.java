package com.chq.fireworks.common.constant;

public class DictEnums {

	/**
	 * 数据字典类型
	 * 
	 * @author chenhaoqiang
	 * @since FW 1.0
	 * @version FW 1.0
	 */
	public enum DictType {
		TODO_TYPE(1),// 待办类型
		TODO_STATUS(2),// 待办状态
		ID_TYPE(28)// 证件类型
		;

		private int value;

		private DictType(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}
	}
	
	public enum TodoStatus {
		DELETE(-1), // 已删除
		UNCOMPLETE(0), // 未完成
		COMPLETED(1)// 已完成
		;

		private int value;

		private TodoStatus(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}
	}

	public enum IdType {
		ID(1), // 身份证
		PASSPORT(2), // 护照
		STUDENT_ID(3), // 学生证
		WORK_ID(4), // 工作证
		OFFICER_ID(5), // 军官证
		OTHER_ID(6), // 其他证件
		TAIWAN_ID(7)// 台胞证
		;

		private int value;

		private IdType(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}
	}
	
}

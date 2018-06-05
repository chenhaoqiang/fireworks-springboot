package com.chq.fireworks.controller;

import org.apache.shiro.SecurityUtils;

import java.io.PrintWriter;

public class BaseController {

	public String getUserNum() {
		return (String) SecurityUtils.getSubject().getPrincipal();
	}

	public void output(PrintWriter pw, String json) {
		pw.write(json);
		pw.flush();
		pw.close();
	}

	public void outputSuccess(PrintWriter pw) {
		pw.write("{success:true,msg:'保存成功'}");
		pw.flush();
		pw.close();
	}
}

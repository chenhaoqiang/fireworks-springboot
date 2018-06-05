package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.Dict;
import com.chq.fireworks.qo.DictQuery;
import com.chq.fireworks.service.DictService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;

@Controller
@RequestMapping("/dict")
public class DictController extends BaseController {

    @Autowired
    private DictService dictService;

    @RequestMapping(value = "/queryDictType", method = RequestMethod.POST)
    public void queryDictType(PrintWriter pw) {
        output(pw, JSON.toJSONString(dictService.queryDictType()));
    }

    @RequestMapping(value = "/queryDict", method = RequestMethod.POST)
    public void queryDict(DictQuery dictQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(dictService.queryDict(dictQuery)));
    }

    @RequestMapping(value = "/queryDictByPage", method = RequestMethod.POST)
    public void queryDictByPage(PageBean pageBean, DictQuery dictQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(dictService.queryDict(dictQuery, pageBean)));
    }

    @RequestMapping(value = "/addDict", method = RequestMethod.POST)
    public void addDict(Dict dict, PrintWriter pw) {
        dictService.addDict(dict);
    }

    @RequestMapping(value = "/updateDict", method = RequestMethod.POST)
    public void updateDict(Dict dict, PrintWriter pw) {
        dictService.updateDict(dict);
    }

    @RequestMapping(value = "/deleteDict", method = RequestMethod.POST)
    public void deleteDict(Integer typeNum, Integer dictNum, PrintWriter pw) {
        dictService.deleteDict(typeNum, dictNum);
    }

}

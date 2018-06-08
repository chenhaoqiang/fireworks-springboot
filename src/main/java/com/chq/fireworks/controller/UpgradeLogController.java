package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.UpgradeLog;
import com.chq.fireworks.qo.NoteQuery;
import com.chq.fireworks.service.LogService;
import com.hzsun.framework.commons.utils.CollectionUtil;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/upgradeLog")
public class UpgradeLogController extends BaseController {

    @Autowired
    private LogService logService;

    @RequestMapping(value = "/queryUpgradeLog", method = RequestMethod.POST)
    public void queryUpgradeLog(NoteQuery noteQuery, PrintWriter pw) {
        List<UpgradeLog> logList = logService.queryUpgradeLog();
        List<Map<String, Object>> retList = new ArrayList<>();
        if (CollectionUtil.isNotEmpty(logList)) {
            for (UpgradeLog log : logList) {
                Map<String, Object> map = new HashMap<>();
                map.put("logId", log.getLogId());
                map.put("softwareVersion", log.getSoftwareVersion());
                String[] upgradeLogs = log.getUpgradeContent().split("\\|");
                map.put("upgradeLogs", upgradeLogs);
                map.put("upgradeTime", new DateTime(log.getUpgradeTime()).toString("yyyy-MM-dd"));
                map.put("upgradeUser", log.getUpgradeUser());
                retList.add(map);
            }
        }
        output(pw, JSON.toJSONString(retList));
    }

}

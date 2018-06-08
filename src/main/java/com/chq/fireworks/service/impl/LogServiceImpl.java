package com.chq.fireworks.service.impl;

import com.chq.fireworks.mapper.UpgradeLogMapper;
import com.chq.fireworks.model.UpgradeLog;
import com.chq.fireworks.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("logService")
public class LogServiceImpl implements LogService {

    @Autowired
    private UpgradeLogMapper upgradeLogMapper;

    @Override
    public List<UpgradeLog> queryUpgradeLog() {
        return upgradeLogMapper.queryUpgradeLog();
    }

    @Override
    public String getSoftwareVersion() {
        return upgradeLogMapper.getSoftwareVersion();
    }
}

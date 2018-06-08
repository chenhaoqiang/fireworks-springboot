package com.chq.fireworks.service;

import com.chq.fireworks.model.UpgradeLog;

import java.util.List;

public interface LogService {

    List<UpgradeLog> queryUpgradeLog();

    String getSoftwareVersion();
}

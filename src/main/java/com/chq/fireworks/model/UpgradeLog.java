package com.chq.fireworks.model;

import java.util.Date;

public class UpgradeLog {
    private Integer logId;

    private String upgradeUser;

    private Date upgradeTime;

    private String softwareVersion;

    private String upgradeContent;

    public Integer getLogId() {
        return logId;
    }

    public void setLogId(Integer logId) {
        this.logId = logId;
    }

    public String getUpgradeUser() {
        return upgradeUser;
    }

    public void setUpgradeUser(String upgradeUser) {
        this.upgradeUser = upgradeUser == null ? null : upgradeUser.trim();
    }

    public Date getUpgradeTime() {
        return upgradeTime;
    }

    public void setUpgradeTime(Date upgradeTime) {
        this.upgradeTime = upgradeTime;
    }

    public String getSoftwareVersion() {
        return softwareVersion;
    }

    public void setSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion == null ? null : softwareVersion.trim();
    }

    public String getUpgradeContent() {
        return upgradeContent;
    }

    public void setUpgradeContent(String upgradeContent) {
        this.upgradeContent = upgradeContent == null ? null : upgradeContent.trim();
    }
}
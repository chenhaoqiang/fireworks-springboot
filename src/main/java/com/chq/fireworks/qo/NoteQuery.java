package com.chq.fireworks.qo;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class NoteQuery implements Serializable {

    private static final long serialVersionUID = -1742785822116446641L;

    private Integer noteType;

    private String noteName;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createDate;

    public Integer getNoteType() {
        return noteType;
    }

    public void setNoteType(Integer noteType) {
        this.noteType = noteType;
    }

    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

}

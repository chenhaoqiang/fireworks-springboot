package com.chq.fireworks.service;

import com.chq.fireworks.model.Note;
import com.chq.fireworks.qo.NoteQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;

public interface NoteService {

    List<Note> queryNote(NoteQuery noteQuery);

    PageInfo<Note> queryNote(NoteQuery noteQuery, PageBean pageBean);

    void addNote(Note note);

    void updateNote(Note note);

    void deleteNote(Integer noteId);

}
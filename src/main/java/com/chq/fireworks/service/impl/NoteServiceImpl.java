package com.chq.fireworks.service.impl;

import com.chq.fireworks.mapper.NoteMapper;
import com.chq.fireworks.model.Note;
import com.chq.fireworks.qo.NoteQuery;
import com.chq.fireworks.service.NoteService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("noteService")
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteMapper noteMapper;

    @Override
    public List<Note> queryNote(NoteQuery noteQuery) {
        return noteMapper.queryNote(noteQuery);
    }

    @Override
    public PageInfo<Note> queryNote(NoteQuery noteQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(noteMapper.queryNote(noteQuery));
    }

    @Override
    public void addNote(Note note) {
        noteMapper.insert(note);
    }

    @Override
    public void updateNote(Note note) {
        noteMapper.updateByPrimaryKeySelective(note);
    }

    @Override
    public void deleteNote(Integer noteId) {
        noteMapper.deleteByPrimaryKey(noteId);
    }

}

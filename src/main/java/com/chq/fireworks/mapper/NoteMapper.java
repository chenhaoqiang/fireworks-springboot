package com.chq.fireworks.mapper;

import com.chq.fireworks.model.Note;
import com.chq.fireworks.qo.NoteQuery;

import java.util.List;

public interface NoteMapper {
    int deleteByPrimaryKey(Integer noteId);

    int insert(Note record);

    int insertSelective(Note record);

    Note selectByPrimaryKey(Integer noteId);

    int updateByPrimaryKeySelective(Note record);

    int updateByPrimaryKey(Note record);

    List<Note> queryNote(NoteQuery noteQuery);
}
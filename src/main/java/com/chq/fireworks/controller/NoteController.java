package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.Note;
import com.chq.fireworks.qo.NoteQuery;
import com.chq.fireworks.service.NoteService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;

@Controller
@RequestMapping("/note")
public class NoteController extends BaseController {

    @Autowired
    private NoteService noteService;

    @RequestMapping(value = "/queryNote", method = RequestMethod.POST)
    public void queryNote(NoteQuery noteQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(noteService.queryNote(noteQuery)));
    }

    @RequestMapping(value = "/queryNoteByPage", method = RequestMethod.POST)
    public void queryNoteByPage(PageBean pageBean, NoteQuery noteQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(noteService.queryNote(noteQuery, pageBean)));
    }

    @RequestMapping(value = "/addNote", method = RequestMethod.POST)
    public void addNote(Note note, PrintWriter pw) {
        note.setCreateUser(getUserNum());
        noteService.addNote(note);
    }

    @RequestMapping(value = "/updateNote", method = RequestMethod.POST)
    public void updateNote(Note note, PrintWriter pw) {
        note.setUpdateUser(getUserNum());
        noteService.updateNote(note);
    }

    @RequestMapping(value = "/deleteNote", method = RequestMethod.POST)
    public void deleteNote(Integer noteId, PrintWriter pw) {
        noteService.deleteNote(noteId);
    }

}

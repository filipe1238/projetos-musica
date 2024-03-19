package com.projetosmusicas.controllers;
import com.projetosmusicas.entities.Music;
import com.projetosmusicas.services.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping(value = "api/v1/musics")
public class MusicController {
    @Autowired
    private MusicService service;
    private static final String MUSIC_DIRECTORY = "C:\\Users\\filip\\IdeaProjects\\projetos-integrados\\frontend\\src\\musics\\";


    @GetMapping("/{id}")
    public Music get(@PathVariable Integer id) {
        return service.findById(id);
    }
    @GetMapping
    public Iterable<Music> list(
            @RequestParam(required = false, name = "filter") String filterStr,
            @RequestParam(required = false, name = "range") String rangeStr,
            @RequestParam(required = false, name="sort") String sortStr
    ) {
        return service.filterBy(filterStr, rangeStr, sortStr);
    }
    @PostMapping
    public Music create(@RequestBody Music music) {
        return service.save(music);
    }
    @PutMapping("/{id}")
    public Music update(@PathVariable Integer id, @RequestBody Music music) {
        return service.save(music);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.deleteById(id);
    }
    @GetMapping("/list-music-files")
    public List<String> listMusicFiles() throws IOException {
        List<String> musicFiles = new ArrayList<>();
        File musicDirectory = new File(MUSIC_DIRECTORY);
        if (musicDirectory.exists() && musicDirectory.isDirectory()) {
            File[] files = musicDirectory.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isFile()) {
                        musicFiles.add(file.getName());
                    }
                }
            }
        }
        return musicFiles;
    }

}

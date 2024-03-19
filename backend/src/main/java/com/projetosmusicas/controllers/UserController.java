package com.projetosmusicas.controllers;

import com.projetosmusicas.entities.UserEntity;
import com.projetosmusicas.services.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping(value = "api/v1/users")
public class UserController {

    private UserService userService;

    @GetMapping("/{id}")
    public UserEntity get(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @GetMapping
    public Iterable<UserEntity> list(@RequestParam(required = false, name = "filter") String filterStr,
                                         @RequestParam(required = false, name = "range") String rangeStr,
                                         @RequestParam(required = false, name = "sort") String sortStr) {
        return userService.filterBy(filterStr, rangeStr, sortStr);
    }

    @PostMapping
    public UserEntity create(@Valid @RequestBody UserEntity user) {
        return userService.save(user);
    }

    @PostMapping("/login")
    public UserEntity login(@Valid @RequestBody UserEntity user) {
        return userService.login(user);
    }


    @PutMapping("/{id}")
    public UserEntity update(@PathVariable Integer id, @Valid @RequestBody UserEntity user) {
        user.setId(id);
        return userService.save(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        userService.deleteById(id);
    }
}

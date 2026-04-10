package com.example.feefo.controller;

import com.example.feefo.service.TitleService;
import java.util.Map;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/title")
public class TitleController {

    private final TitleService titleService;

    public TitleController(TitleService titleService) {
        this.titleService = titleService;
    }

    @GetMapping
    public Map<String, Object> getNormalisedTitle(@RequestParam String name) {
        return titleService.normalise(name);
    }
}

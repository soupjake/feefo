package com.example.feefo.controller;

import com.example.feefo.model.Rating;
import com.example.feefo.repository.RatingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("/rating")
public class RatingController {

    private final RatingRepository ratingRepository;

    public RatingController(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    @GetMapping
    public List<Rating> getRatings() {
        return ratingRepository.findAll();
    }
}
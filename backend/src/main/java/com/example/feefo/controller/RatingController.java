package com.example.feefo.controller;

import com.example.feefo.model.Rating;
import com.example.feefo.model.RatingSummary;
import com.example.feefo.repository.RatingRepository;
import com.example.feefo.service.RatingService;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rating")
public class RatingController {

    private final RatingRepository ratingRepository;
    private final RatingService ratingService;

    public RatingController(RatingRepository ratingRepository, RatingService ratingService) {
        this.ratingRepository = ratingRepository;
        this.ratingService = ratingService;
    }

    @GetMapping
    public List<RatingSummary> getRatings() {
        List<Rating> ratings = ratingRepository.findAll();
        return ratingService.sortRatings(ratings);
    }
}

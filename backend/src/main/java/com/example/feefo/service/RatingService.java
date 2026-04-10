package com.example.feefo.service;

import com.example.feefo.model.Rating;
import com.example.feefo.repository.RatingRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Stream;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;

    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public void seedDatabase() {
        if (ratingRepository.count() == 0) {
            System.out.println("Repository is empty. Seeding initial data via startup...");

            bulkAddRatings(952, 5);
            bulkAddRatings(171, 4);
            bulkAddRatings(55, 3);
            bulkAddRatings(14, 2);
            bulkAddRatings(40, 1);

            System.out.println("Total records seeded: " + ratingRepository.count());
        }
    }

    private void bulkAddRatings(int count, int score) {
        List<Rating> ratingsToSave = new ArrayList<>(count);

        for (int i = 0; i < count; i++) {
            ratingsToSave.add(new Rating(score));
        }

        ratingRepository.saveAll(ratingsToSave);

        System.out.println("Added " + count + " ratings of value " + score + " to the database");
    }
}
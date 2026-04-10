package com.example.feefo.service;

import com.example.feefo.model.Rating;
import com.example.feefo.model.RatingSummary;
import com.example.feefo.repository.RatingRepository;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

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

    public List<RatingSummary> sortRatings(List<Rating> ratings) {
        if (ratings == null || ratings.isEmpty()) {
            return Collections.emptyList();
        }

        int totalRatings = ratings.size();

        return ratings.stream()
            .collect(Collectors.groupingBy(
                Rating::getScore,
                Collectors.counting()
            ))
            .entrySet().stream()
            .map(entry -> {
                long count = entry.getValue();
                double average = (double) count / totalRatings;
                return new RatingSummary(entry.getKey(), count, average);
            })
            .sorted(Comparator.comparingInt(RatingSummary::getScore).reversed())
            .collect(Collectors.toList());
    }
}

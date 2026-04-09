package com.example.feefo;

import com.example.feefo.model.Rating;
import com.example.feefo.repository.RatingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class FeefoApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeefoApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(RatingRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                System.out.println("Repository is empty. Seeding initial data via startup...");

                bulkAddRatings(repository, 952, 5);
                bulkAddRatings(repository, 171, 4);
                bulkAddRatings(repository, 55, 3);
                bulkAddRatings(repository, 14, 2);
                bulkAddRatings(repository, 40, 1);

                System.out.println("Total records seeded: " + repository.count());
            }
        };
    }

    private void bulkAddRatings(RatingRepository repository, int count, int score) {
        List<Rating> ratingsToSave = new ArrayList<>(count);

        for (int i = 0; i < count; i++) {
            ratingsToSave.add(new Rating(score));
        }

        repository.saveAll(ratingsToSave);

        System.out.println("Added " + count + " ratings of value " + score + " to the database");
    }
}
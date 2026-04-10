package com.example.feefo;

import com.example.feefo.service.RatingService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FeefoApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeefoApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(RatingService ratingService) {
        return args -> {
            ratingService.seedDatabase();
        };
    }
}
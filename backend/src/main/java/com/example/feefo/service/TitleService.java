package com.example.feefo.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map; // Added this import

@Service
public class TitleService {

    private final List<String> normalizedTitles = List.of(
        "Architect", 
        "Software engineer", 
        "Quantity surveyor", 
        "Accountant"
    );

    public Map<String, Object> normalise(String input) {
        String bestMatch = input;
        double bestScore = 0.0;

        for (String target : normalizedTitles) {
            double score = calculateScore(input, target);
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = target;
            }
        }

        return Map.of(
            "result", bestMatch,
            "score", bestScore
        );
    }

private double calculateScore(String input, String target) {
    String[] inputWords = input.toLowerCase().split(" ");
    String[] targetWords = target.toLowerCase().split(" ");
    
    double matches = 0;
    for (String targetWord : targetWords) {
        for (String inputWord : inputWords) {
            if (inputWord.equals(targetWord)) {
                matches++;
                break;
            }
        }
    }

    int maxWords = Math.max(inputWords.length, targetWords.length);
    return matches / maxWords;
}
}
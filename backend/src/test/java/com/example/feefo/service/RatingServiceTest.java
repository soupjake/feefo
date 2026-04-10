package com.example.feefo.service;

import com.example.feefo.model.Rating;
import com.example.feefo.model.RatingSummary;
import com.example.feefo.repository.RatingRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat; // The missing assertions
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RatingServiceTest {

    @Mock
    private RatingRepository ratingRepository;

    @InjectMocks
    private RatingService ratingService;

    @Test
    void shouldSeedDataWhenDatabaseIsEmpty() {
        // Given
        when(ratingRepository.count()).thenReturn(0L);

        // When
        ratingService.seedDatabase();

        // Then
        verify(ratingRepository, times(5)).saveAll(anyList());
        verify(ratingRepository, atLeastOnce()).count();
    }

    @Test
    void shouldNotSeedDataWhenDatabaseHasRecords() {
        // Given
        when(ratingRepository.count()).thenReturn(100L);

        // When
        ratingService.seedDatabase();

        // Then
        verify(ratingRepository, never()).saveAll(anyList());
    }

    @Test
    void shouldSummarizeAndSortRatings() {
        // Given
        List<Rating> ratings = List.of(
            new Rating(5),
            new Rating(5),
            new Rating(5),
            new Rating(1)
        );

        // When
        List<RatingSummary> result = ratingService.sortRatings(ratings);

        // Then
        assertThat(result).hasSize(2);

        // Check 5 is first
        RatingSummary fiveStars = result.get(0);
        assertThat(fiveStars.getScore()).isEqualTo(5);
        assertThat(fiveStars.getCount()).isEqualTo(3);
        assertThat(fiveStars.getAverage()).isEqualTo(0.75);

        // Check 1 is last
        RatingSummary oneStar = result.get(1);
        assertThat(oneStar.getScore()).isEqualTo(1);
        assertThat(oneStar.getCount()).isEqualTo(1);
        assertThat(oneStar.getAverage()).isEqualTo(0.25);
    }

    @Test
    void shouldHandleEmptyInput() {
        // Given
        List<Rating> emptyRatings = List.of();

        // When
        List<RatingSummary> result = ratingService.sortRatings(emptyRatings);

        // Then
        assertThat(result).isEmpty();
    }

    @Test
    void shouldMaintainDescendingOrder() {
        // Given
        List<Rating> ratings = List.of(
            new Rating(1), 
            new Rating(3), 
            new Rating(5)
        );

        // When
        List<RatingSummary> result = ratingService.sortRatings(ratings);

        // Then
        assertThat(result)
            .extracting(RatingSummary::getScore)
            .containsExactly(5, 3, 1);
    }
}
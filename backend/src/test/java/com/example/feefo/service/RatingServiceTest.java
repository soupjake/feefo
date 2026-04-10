package com.example.feefo.service;

import com.example.feefo.repository.RatingRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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

        ratingService.seedDatabase();

        // Then
        verify(ratingRepository, never()).saveAll(anyList());
    }
}
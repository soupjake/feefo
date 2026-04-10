package com.example.feefo.service;

import org.junit.jupiter.api.Test;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

class TitleServiceTest {

    private final TitleService titleService = new TitleService();

    @Test
    void shouldMatchSoftwareEngineerHalf() {
        // Given
        String input = "Java engineer";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Software engineer");
        assertThat((Double) response.get("score")).isEqualTo(0.5);
    }

	@Test
    void shouldMatchSoftwareEngineerFull() {
        // Given
        String input = "Software engineer";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Software engineer");
        assertThat((Double) response.get("score")).isEqualTo(1.0);
    }

    @Test
    void shouldMatchAccountantHalf() {
        // Given
        String input = "Chief Accountant";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Accountant");
        assertThat((Double) response.get("score")).isEqualTo(0.5);
    }

	@Test
    void shouldMatchAccountantFull() {
        // Given
        String input = "Accountant";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Accountant");
        assertThat((Double) response.get("score")).isEqualTo(1.0);
    }

    @Test
    void shouldReturnOriginalInputWhenNoMatchFound() {
        // Given
        String input = "Dog Walker";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Dog Walker");
        assertThat((Double) response.get("score")).isEqualTo(0.0);
    }

    @Test
    void shouldBeCaseInsensitive() {
        // Given
        String input = "architect";

        // When
        Map<String, Object> response = titleService.normalise(input);

        // Then
        assertThat(response.get("result")).isEqualTo("Architect");
        assertThat((Double) response.get("score")).isEqualTo(1.0);
    }
}
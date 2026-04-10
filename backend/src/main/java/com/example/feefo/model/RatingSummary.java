package com.example.feefo.model;

import java.util.Objects;

public class RatingSummary {
    private final int score;

    private final long count;

    private final double average;

    public RatingSummary(int score, long count, double average) {
        this.score = score;
        this.count = count;
        this.average = average;
    }

    public int getScore() { return score; }

    public long getCount() { return count; }

    public double getAverage() { return average; }
}

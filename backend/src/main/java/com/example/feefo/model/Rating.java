package com.example.feefo.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID guid;

    private int score;

    public Rating() {}

    public Rating(int score) {
        this.score = score;
    }

    public UUID getGuid() { return guid; }
    public void setGuid(UUID guid) { this.guid = guid; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}
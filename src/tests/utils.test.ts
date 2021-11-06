import React from "react";
import { gameWon } from "../services/utils";

it('should be winning 1', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1],
        [0, 0, 0, 2, 2, 2],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 3, 2)).toBe(true);
});

it('should be winning 2', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 2, 5)).toBe(true);
});

it('should be winning 3', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 1, 2],
        [0, 0, 0, 1, 1, 2],
        [0, 0, 1, 2, 1, 2],
    ];

    expect(gameWon(winningBoard, 6, 2)).toBe(true);
});

it('should be winning 4', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2],
        [0, 0, 1, 2, 1, 1],
        [0, 0, 0, 1, 2, 1],
        [0, 0, 0, 0, 1, 2],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 5, 5)).toBe(true);
});

it('should not be winning 1', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 4, 5)).toBe(false);
});

it('should not be winning 2', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 3, 4)).toBe(false);
});

it('should not be winning 3', () => {
    const winningBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 1],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 0, 0, 1, 2],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
    ];

    expect(gameWon(winningBoard, 2, 3)).toBe(false);
});
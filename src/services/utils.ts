export const gameWon = (board: number[][], col_i: number, row_i: number): boolean => {
    const currentCell = board[col_i][row_i];
    console.log('current cell', currentCell);

    let maxVerticalChain: number = 1;
    let maxHorizontalChain: number = 1;
    let maxUpLeftChain: number = 1;
    let maxUpRightChain: number = 1;

    let limitReachedDown = false;
    let limitReachedLeft = false;
    let limitReachedRight = false;
    let limitReachedUpLeft = false;
    let limitReachedDownRight = false;
    let limitReachedUpRight = false;
    let limitReachedDownLeft = false;
    let limitReached = false;
    
    let increment = 1;
    
    while (
        !limitReached &&
        maxVerticalChain < 4 &&
        maxHorizontalChain < 4 &&
        maxUpLeftChain < 4 &&
        maxUpRightChain < 4 
    ) {
        // Down
        if (!limitReachedDown && row_i + increment <= 5 && board[col_i][row_i + increment] === currentCell) {
            maxVerticalChain++;
        } else {
            limitReachedDown = true;
        }

        // Left
        if (!limitReachedLeft && col_i - increment >= 0 && board[col_i - increment][row_i] === currentCell) {
            maxHorizontalChain ++;
        } else {
            limitReachedLeft = true;
        }

        // Right
        if (!limitReachedRight && col_i + increment <= 6 && board[col_i + increment][row_i] === currentCell) {
            maxHorizontalChain ++;
        } else {
            limitReachedRight = true;
        }

        // Up left
        if (
            !limitReachedUpLeft &&
            col_i - increment >= 0 &&
            row_i - increment >= 0 &&
            board[col_i - increment][row_i - increment] === currentCell
        ) {
            maxUpLeftChain++;
        } else {
            limitReachedUpLeft = true;
        }

        // Down Right
        if (
            !limitReachedDownRight &&
            col_i + increment <= 6 &&
            row_i + increment <= 6 &&
            board[col_i + increment][row_i + increment] === currentCell
        ) {
            maxUpLeftChain++;
        } else {
            limitReachedDownRight = true;
        }

        // Up right
        if (
            !limitReachedUpRight &&
            col_i + increment <= 6 &&
            row_i - increment >= 0 &&
            board[col_i + increment][row_i - increment] === currentCell
        ) {
            maxUpRightChain++;
        } else {
            limitReachedUpRight = true;
        }

        // Down left
        if (
            !limitReachedDownLeft &&
            col_i - increment >= 0 &&
            row_i + increment <= 6 &&
            board[col_i - increment][row_i + increment] === currentCell
        ) {
            maxUpRightChain++;
        } else {
            limitReachedDownLeft = true;
        }

        // Check if limit is reached
        if (
            limitReachedDown &&
            limitReachedLeft &&
            limitReachedRight &&
            limitReachedUpLeft &&
            limitReachedDownRight &&
            limitReachedUpRight &&
            limitReachedDownLeft
        ) {
            limitReached = true;
        }

        // Increment
        increment ++;
    }

    console.log(maxVerticalChain);
    console.log(maxHorizontalChain);
    console.log(maxUpLeftChain);
    console.log(maxUpRightChain);

    if (maxVerticalChain < 4 && maxHorizontalChain < 4 && maxUpLeftChain < 4 && maxUpRightChain < 4) {
        return false;
    } else {
        return true;
    }
}

export const columnFull = (board: number[][], col_i: number): boolean => {
    return board[col_i][0] !== 0;
}
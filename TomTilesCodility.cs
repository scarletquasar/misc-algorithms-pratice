using System.Linq;
using System;

class Tile {
    public string Top { get; set; }
    public string Right { get; set; }
    public string Bottom { get; set; }
    public string Left { get; set; }

    public void Rotate() {
        var tempTop = Top;
        var tempRight = Right;
        var tempBottom = Bottom;
        var tempLeft = Left;

        Top = tempLeft;
        Right = tempTop;
        Bottom = tempRight;
        Left = tempBottom;
    }

    public void RotateReverse() {
        var tempTop = Top;
        var tempRight = Right;
        var tempBottom = Bottom;
        var tempLeft = Left;

        Top = tempRight;
        Right = tempBottom;
        Bottom = tempLeft;
        Left = tempTop;
    }
}

class Solution {
    int rotateAndCheck(
        Tile[] sequence, 
        int rotations = 0, 
        int index = 0, 
        bool shouldReverse = false,
        bool allowReverse = false) {

        if (sequence.Length % 2 != 0 && !allowReverse) {
            Array.Resize(ref sequence, sequence.Length - 1);
            return rotateAndCheck(
                sequence, 
                rotations, 
                index, 
                shouldReverse, 
                true);
        }

        var isPretty = isPrettySequence(sequence);

        if (isPretty && sequence.Length == 2)
            return rotations - 1;

        if (isPretty)
            return rotations;

        if (sequence.Length > index) {
            if (!shouldReverse) {
                sequence[index].Rotate();
                //System.Console.WriteLine("Normal");
                rotations++;           
            }
            if (shouldReverse) {
                sequence[index].RotateReverse();
                //System.Console.WriteLine("Reversed");
                rotations++;
            }

            if (allowReverse) {
                shouldReverse = !shouldReverse;
            }

            // System.Console.WriteLine(sequence.ElementAt(index).Right);
            // System.Console.WriteLine(sequence.ElementAt(index).Left);
            index++;
        }
        else {
            index = 0;

            if (!allowReverse)
                shouldReverse = !shouldReverse;
        }

        return rotateAndCheck(
            sequence, 
            rotations, 
            index, 
            shouldReverse, 
            allowReverse);
    }

    bool isPrettySequence(Tile[] sequence) {
        var result = true;
        var index = 0;
        var length = sequence.Length; 

        while (index < sequence.Length) {
            if (sequence.Length > index + 1) {
                var left = sequence[index + 1].Left;
                var right = sequence[index].Right;

                if (left != right)
                    result = false;
            }

            index += 2;
        }

        return result;
    }

    public int solution(string[] A) {
        var tiles = A.Select(tile => new Tile {
            Top = tile[0].ToString(),
            Right = tile[1].ToString(),
            Bottom = tile[2].ToString(),
            Left = tile[3].ToString()
        });

        return rotateAndCheck(tiles.ToArray());
    }
}

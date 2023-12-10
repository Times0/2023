def main():
    with open("input2.txt", "r") as file:
        lines = file.readlines()

    l1 = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]
    l2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    d = dict(zip(l1, l2))

    total = 0
    for line in lines:
        for i, c in enumerate(line):
            n = len(line)
            f = 0
            if c.isdigit():
                first = c
                break
            for numstr, num in d.items():
                if i + len(numstr) < n and line[i : i + len(numstr)] == numstr:
                    first = str(num)
                    f = 1
                    break
            if f:
                break
        print(f"found first:{first}")

        for i, c in enumerate(line[::-1]):
            print(c)
            f = 0
            n = len(line)
            if c.isdigit():
                last = c
                break
            for numstr, num in d.items():
                if (
                    i + len(numstr) < n
                    and line[::-1][i : i + len(numstr)] == numstr[::-1]
                ):
                    last = str(num)
                    f = 1
                    break
            if f:
                break
        total += int(first + last)

    print(total)


if __name__ == "__main__":
    main()



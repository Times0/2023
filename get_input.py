import requests
import sys
import os


def download_file(url, filename):
    cookies = {
        "session": "53616c7465645f5fec327338db68a93bd6693d14e1760db3de0c9535b3959a427fbe01c86f2942d57d34443f28d0eb923e7c64010e9b592a52e8d2082f33970c"
    }
    response = requests.get(url, cookies=cookies)
    with open(filename, "wb") as file:
        file.write(response.content)


def main(day_number):
    url = f"https://adventofcode.com/2023/day/{day_number}/input"
    filename = f"input_day_{day_number}.txt"

    download_file(url, os.path.join(cwd, day_number, filename))
    print(f"File downloaded successfully as {filename}.")


cwd = os.path.dirname(os.path.abspath(__file__))

if __name__ == "__main__":
    main(sys.argv[1])

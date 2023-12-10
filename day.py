import sys
import os
from get_input import main

if __name__ == "__main__":
    nb = sys.argv[1]
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), nb)
    os.mkdir(path)
    main(nb)

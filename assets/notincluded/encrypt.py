
def main():
    with open("input.txt") as f:
        x = 0
        passwd = ""
        text = f.read()
        out = ""
        for letter in text:
            out += chr(ord(letter)^ord(passwd[x % len(passwd)]))
            x += 1
        with open("output.txt", "w") as w:
            w.write(out)

main()



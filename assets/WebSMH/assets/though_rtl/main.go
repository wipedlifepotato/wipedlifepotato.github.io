package main

import (
	"fmt"
	"os"

	//	"time"
	"web.savemyh/rtl"
)

func main() {
	fmt.Println(rtl.EEProm())
	pipe := rtl.RTLSDR(92800000)
	buf := make([]byte, 128)
	pipe.Read(buf)
	fmt.Println(buf)
	os.WriteFile("/tmp/IQ_samples", buf, 0o755) //
	pipe.Close()
	/*
		// TODO:
		for {
			pipe1 := rtl.RTLFM("wbfm", 92800000)
			buf1 := make([]byte, 1024*8)
			pipe1.Read(buf1)
			pipe1.Close()
			fmt.Println(buf1)
			os.WriteFile("/tmp/IQ_FM", buf1, 0o755)
			time.Sleep(time.Second)
		}
	*/
}

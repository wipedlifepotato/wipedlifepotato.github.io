package rtl

import (
	"bytes"
	"fmt"
	"io"
	"os/exec"
	"strconv"
)

func EEProm() string {
	cmd := exec.Command("rtl_eeprom")
	var out bytes.Buffer
	var stderr bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = &stderr
	err := cmd.Run()
	if err != nil {
		fmt.Println(fmt.Sprint(err) + ": " + stderr.String())
		return ""
	}
	return out.String()
}

func RTLSDR(center_hz uint) *io.PipeReader {
	_hz := strconv.FormatInt(int64(center_hz), 10)
	r, w := io.Pipe()
	go func() {
		fmt.Println("Init pipe")
		var stderr bytes.Buffer
		cmd := exec.Command("rtl_sdr", "-f", _hz, "-s", "204800", "-d", "0", "-")
		cmd.Stderr = &stderr
		cmd.Stdout = w
		cmd.Stdin = r
		fmt.Println("Program start")
		cmd.Start()
	}()
	return r
}

func RTLFM(modulation string, hz uint) *io.PipeReader {
	_hz := strconv.FormatInt(int64(hz), 10)
	r, w := io.Pipe()
	go func() {
		fmt.Println("Init pipe")
		var stderr bytes.Buffer
		fmt.Println(_hz)
		cmd := exec.Command("rtl_fm", "-M", modulation, "-f", _hz, "-")
		cmd.Stderr = &stderr
		cmd.Stdout = w
		cmd.Stdin = r
		fmt.Println("Program start")
		cmd.Start()
	}()
	fmt.Println("Return FM")
	return r
}

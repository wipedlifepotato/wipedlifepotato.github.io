package rtl

import (
	"fmt"
	"os"
	"strconv"

	"hz.tools/rf"
	"hz.tools/sdr"
	"hz.tools/sdr/rtl"
	"hz.tools/sdr/rtltcp"
)

const (
	DEF_SAMPLE_RATE = 3200000
	WIN_SIZE        = 1024
	DEF_IQ_SIZE     = 1024
)

// TODO
type Rtl struct {
	sampleRate uint
	hz         int64
	Sdr        *rtl.Sdr
	SdrC       *rtltcp.Client
	gain       float32
	inited     bool
	ReadCloser sdr.ReadCloser
}

func (r *Rtl) SetSampleRate(sR uint) {
	r.sampleRate = sR
	r.Sdr.SetSampleRate(sR)
}

func (r *Rtl) SetGain(gain float32) {
	if r.Sdr != nil {
		gainStages, _ := r.Sdr.GetGainStages()
		r.Sdr.SetGain(gainStages[0], gain) // ?
	}
	if r.SdrC != nil {
		gainstages, _ := r.SdrC.GetGainStages()
		r.SdrC.SetGain(gainstages[0], gain)
	}
}

func (r *Rtl) Close() {
	r.ReadCloser.Close()
	if r.Sdr != nil {
		r.Sdr.Close()
	}
	if r.SdrC != nil {
		r.SdrC.Close()
	}
	if r.ReadCloser != nil {
		r.ReadCloser.Close()
	}
	r.ReadCloser = nil
	r.Sdr = nil
	r.inited = false
}

func (r *Rtl) ReInitSDR(dev uint, cFreq int64) {
	if r.Sdr != nil {
		r.Close()
		sdr, err := rtl.New(dev, WIN_SIZE)
		if err != nil {
			panic(err)
		}
		r.Sdr = sdr
		err = r.Sdr.SetCenterFrequency(rf.Hz(cFreq)) // (446093000)
		if err != nil {
			fmt.Fprint(os.Stderr, "Can't to set freq of ", cFreq, " hz\n")
			//os.Exit(1)
		}
		r.ReadCloser, err = r.Sdr.StartRx()
		if err != nil {
			fmt.Fprintf(os.Stderr, "[rtl-sdr] Can't to startRx\n")
		}
		r.inited = true
	} else if r.SdrC != nil {
		fmt.Fprintf(os.Stderr, "You have to use ReConnectSDR\n")
	}
}
func (r *Rtl) IQ2Q(mSamples [DEF_IQ_SIZE]complex128) []float64 {
	Q := make([]float64, DEF_IQ_SIZE)
	for i, sample := range mSamples {
		Q[i] = imag(sample) // Q = imagine
	}
	return Q
}
func (r *Rtl) IQ2I(mSamples [DEF_IQ_SIZE]complex128) []float64 {
	I := make([]float64, DEF_IQ_SIZE)
	for i, sample := range mSamples {
		I[i] = real(sample) // I = real
	}
	return I
}
func (r *Rtl) GetIQ() [DEF_IQ_SIZE]complex128 {
	mSamples := make(sdr.SamplesU8, 512) // 3200000) //
	r.ReadCloser.Read(mSamples)
	//fmt.Println(mSamples)
	mSamplesC64 := make(sdr.SamplesC64, 1024) //8129*8
	mSamples.ToC64(mSamplesC64)
	//fmt.Println(mSamplesC64)
	var mSamplesC128 [1024]complex128
	for i := 0; i < len(mSamplesC64); i++ {
		//		fmt.Println(mSamplesC64[i])
		mSamplesC128[i] = complex128(mSamplesC64[i])
	}
	return mSamplesC128
}
func (r *Rtl) ReConnectSDR(host string, port int, cFreq int64, gain float32) {
	r.Close()
	r.ConnectSDR(host, port, cFreq, gain)
}
func (r *Rtl) ConnectSDR(host string, port int, cFreq int64, gain float32) {
	c, e := rtltcp.Dial("tcp", host+":"+strconv.Itoa(port))
	if e != nil {
		panic(e)
	}
	c.SetCenterFrequency(rf.Hz(cFreq))
	if r.sampleRate == 0 {
		r.sampleRate = DEF_SAMPLE_RATE
	}

	r.SetGain(gain)
	r.inited = true
	r.SdrC = c
	r.ReadCloser, e = r.SdrC.StartRx()
	if e != nil {
		panic(e)
	}
}

func (r *Rtl) InitSDR(dev uint, cFreq int64, gain float32) {
	if r.inited {
		fmt.Fprintf(os.Stderr, "[rtl-sdr] Need ReInitSDR\n")
		return
	}
	if r.sampleRate == 0 {
		r.sampleRate = DEF_SAMPLE_RATE
	}
	r.gain = gain
	r.hz = cFreq

	sdr, err := rtl.New(dev, WIN_SIZE)
	if err != nil {
		panic(err)
	}
	r.Sdr = sdr
	err = r.Sdr.SetCenterFrequency(rf.Hz(cFreq)) // (446093000)
	if err != nil {
		fmt.Fprint(os.Stderr, "Can't to set freq of ", cFreq, " hz\n")
		//os.Exit(1)
	}
	r.SetGain(gain)
	r.inited = true
	r.ReadCloser, err = r.Sdr.StartRx()
	if err != nil {
		fmt.Fprintf(os.Stderr, "[rtl-sdr] Can't to startRx\n")
	}
}

package waterfall

import (
	"math/cmplx"
	"os"

	//"slices"

	//"slices"
	"strconv"

	// GONUM PLOT will be deleted in future!

	"gonum.org/v1/plot"
	"gonum.org/v1/plot/plotter"
	"gonum.org/v1/plot/vg"

	// GO NUM WILL BE DELETED

	"fmt"

	"github.com/mjibson/go-dsp/fft"
	"github.com/veandco/go-sdl2/sdl"
	"github.com/veandco/go-sdl2/ttf"
	mRtl "web.savemyh/rtl"
)

// by chagpt3.5
// PlotSpectrum создает график спектра
func PlotSpectrumPNG(amplitudes []complex128, startFrequency, sampleRate float64) {
	// Создаем объект графика
	p := plot.New()
	p.Title.Text = "Frequency Spectrum"
	p.X.Label.Text = "Frequency (Hz)"
	p.Y.Label.Text = "Amplitude"

	// Определяем частотное разрешение
	n := len(amplitudes)
	freqResolution := sampleRate / float64(n)

	// Устанавливаем диапазон оси X
	p.X.Min = startFrequency - sampleRate/2
	p.X.Max = startFrequency + sampleRate/2
	p.Y.Min = 0
	p.Y.Max = 1 // можно изменить в зависимости от ваших данных

	// Подготавливаем данные для графика
	pts := make(plotter.XYs, n)
	for i := range amplitudes {
		r, _ := cmplx.Polar(amplitudes[i])
		pts[i].X = startFrequency - sampleRate/2 + float64(i)*freqResolution
		pts[i].Y = r
	}

	// Создаем линию графика
	line, err := plotter.NewLine(pts)
	if err != nil {
		panic(err)
	}
	p.Add(line)

	// Сохраняем график в файл
	if err := p.Save(10*vg.Inch, 4*vg.Inch, "spectrum.png"); err != nil {
		panic(err)
	}
}

// SDL only for understand model.. will be deleted

type Win struct {
	Window        *sdl.Window
	Width, Height int32
	Running       bool
	Amplitudes    []complex128
	Hz            int64
	IQ            [1024]complex128
	//mainRenderer *sdl.Renderer
}

func (w *Win) QuitSDL() {
	sdl.Quit()
}

func (w *Win) InitSDL() {
	if err := sdl.Init(sdl.INIT_EVERYTHING); err != nil {
		panic(err)
	}
	if err := ttf.Init(); err != nil {
		fmt.Fprintf(os.Stderr, "Failed to initialize TTF: %s\n", err)
		panic(err)
	}
}

func (w *Win) InitWin(winName string, width, height int32) {
	window, err := sdl.CreateWindow(winName, sdl.WINDOWPOS_UNDEFINED, sdl.WINDOWPOS_UNDEFINED, width, height, sdl.WINDOW_SHOWN)
	if err != nil {
		panic(err)
	}
	w.Window = window
	w.Width, w.Height = width, height
}

func (w *Win) DestroyWin() {
	w.Running = false
	if w.Window == nil {
		fmt.Fprintf(os.Stderr, "Windows is nil ignore destroy\n")
		return
	}
	w.Window.Destroy()
}

func (win *Win) RenderText(renderer *sdl.Renderer, text string, x, y int32, fontSize int) error {
	fontPath := "/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc"
	font, err := ttf.OpenFontIndex(fontPath, fontSize, 0)
	if err != nil {
		return fmt.Errorf("Failed to load font: %s", err)
	}
	defer font.Close()

	color := sdl.Color{R: 255, G: 255, B: 255, A: 255}
	surface, err := font.RenderUTF8Blended(text, color)
	if err != nil {
		return fmt.Errorf("Failed to create text surface: %s", err)
	}
	defer surface.Free()

	texture, err := renderer.CreateTextureFromSurface(surface)
	if err != nil {
		return fmt.Errorf("Failed to create text texture: %s", err)
	}
	//TODO: Add Mutex
	defer texture.Destroy()

	w, h := surface.W, surface.H
	dstRect := sdl.Rect{X: x, Y: y, W: w, H: h}

	renderer.Copy(texture, nil, &dstRect)

	return nil
}

type WaterFallColor struct {
	R, G, B uint8
}
type WaterFallPoint struct {
	X, Y  int32
	Color WaterFallColor
}

var points []WaterFallPoint
var pointCounter uint

const MAX_POINTS_COUNTER = 32768

// This function only for understand model. WIll be rewrite with an another
func (w *Win) DrawSpectrumAndWaterfallGoroutine(scaleFactor float64) {
	w.Running = true
	points = make([]WaterFallPoint, 0)
	pointCounter = 0
	renderer, err := sdl.CreateRenderer(w.Window, -1, sdl.RENDERER_ACCELERATED)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to create renderer: %s\n", err)
		os.Exit(2)
	}
	defer renderer.Destroy()

	//scaleFactor := 100.0
	yOffset := 200

	for w.Running {
		renderer.SetDrawColor(0, 0, 0, 128)
		renderer.Clear()
		// Spectrum part
		renderer.SetDrawColor(255, 255, 255, 255)
		previousX := int32(0)
		previousY := int32(yOffset)

		for x := range w.Amplitudes {
			r, _ := cmplx.Polar(w.Amplitudes[x])

			currentX := int32(x)
			currentY := int32(w.Height) - (int32(r*scaleFactor) + int32(yOffset))

			if x > 0 {
				renderer.DrawLine(previousX, previousY, currentX, currentY)
			}
			previousX = currentX
			previousY = currentY
		}
		Hz := strconv.FormatInt(w.Hz, 10)

		err = w.RenderText(renderer, Hz, 1, 1, 32)
		if err != nil {
			panic(err)
		}
		//Waterfall part

		r := mRtl.Rtl{}
		I := fft.FFTReal(r.IQ2I(w.IQ))
		Q := fft.FFTReal(r.IQ2Q(w.IQ))

		delimMagnitude := func(i, q []complex128) ([]float64, []float64) {
			magnitudesI := make([]float64, len(i))
			magnitudesQ := make([]float64, len(q))
			for x := range I {
				magI, _ := cmplx.Polar(I[x])
				magnitudesI = append(magnitudesI, magI)
				magQ, _ := cmplx.Polar(Q[x])
				magnitudesQ = append(magnitudesQ, magQ)
			}
			return magnitudesI, magnitudesQ
		}
		magnitudesI, magnitudesQ := delimMagnitude(I, Q)
		calculateWaterfall := func(inp []float64) {
			pointCounter++
			//minVal := slices.Min(inp)
			//maxVal := slices.Max(inp)
			minVal, maxVal := func(inp []float64) (float64, float64) {
				if len(inp) == 0 {
					return 0.0, 0.0
				}
				min := inp[0]
				max := inp[0]
				for _, v := range inp {
					if min > v {
						min = v
					}
					if max < v {
						max = v
					}
				}
				return min, max
			}(inp)
			for x, v := range inp {
				NC := (v - minVal) / (maxVal - minVal)
				red := uint8(255 * NC)
				blue := uint8(255 * (1 - NC))
				p := WaterFallPoint{}
				p.Color.R = red
				p.Color.B = blue
				p.X = int32((int32(x) % w.Width))
				//TODO: fall fall to down ... to down not static..
				p.Y = 350 //1000 - int32(pointCounter+1) //int32(pointCounter) % (w.Height)
				//fmt.Println(p.X, p.Y)
				if len(points) < int(pointCounter+1) {
					points = append(points, p)
				} else {
					points[pointCounter] = p
				}
				pointCounter++
				if pointCounter > MAX_POINTS_COUNTER {
					pointCounter = 0
				}

				//renderer.SetDrawColor(red, 0, blue, 255)
				//renderer.DrawPoint(int32(x), 150+int32(v*scaleFactor))
			}
		}

		calculateWaterfall(magnitudesI)
		calculateWaterfall(magnitudesQ)
		lineCount := int32(0)
		nPoints := points /*func(inp []WaterFallPoint) (ret []WaterFallPoint) {
			ret = make([]WaterFallPoint, 1)
			for x := len(inp) - 1; x >= 0; x-- {
				ret = append(ret, inp[x])
			}
			return ret
		}(points) //slices.Reverse(points)*/
		for x := range nPoints {
			//fmt.Println(x)
			p := nPoints[x]
			if p.X%w.Height == 0 {
				lineCount++
				if lineCount > w.Height {
					lineCount = 0
				}
			}
			//fmt.Println(p)
			renderer.SetDrawColor(p.Color.R, p.Color.G, p.Color.B, 255)
			renderer.DrawPoint(p.X, p.Y+lineCount)
		}
		//fmt.Println("len of points: ", len(points))

		renderer.Present()
		for event := sdl.PollEvent(); event != nil; event = sdl.PollEvent() {
			switch event.(type) {
			case *sdl.QuitEvent: // NOTE: Please use `*sdl.QuitEvent` for `v0.4.x` (current version).
				println("Quit")
				w.Running = false
				break
			case *sdl.KeyboardEvent:
				keyCode := event.(*sdl.KeyboardEvent).Keysym.Sym
				if keyCode == 1073741903 {
					w.Hz += 10000
				}
				if keyCode == 1073741904 {
					w.Hz -= 10000
				}
				// Modifier keys https://github.com/veandco/go-sdl2-examples/blob/master/examples/keyboard-input/keyboard-input.go#L34
				//fmt.Println(keyCode)
				break
			}

		}

		sdl.Delay(50)
	}
	fmt.Println("Destroy")
}

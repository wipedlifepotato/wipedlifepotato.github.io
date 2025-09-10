VERSION 5.00
Begin VB.Form frmDSP1 
   Caption         =   "DSP1 0...60 dB"
   ClientHeight    =   1335
   ClientLeft      =   45
   ClientTop       =   330
   ClientWidth     =   5640
   LinkTopic       =   "Form1"
   ScaleHeight     =   1335
   ScaleWidth      =   5640
   StartUpPosition =   3  'Windows-Standard
   Begin VB.HScrollBar HScroll1 
      Height          =   375
      Left            =   240
      Max             =   60
      TabIndex        =   2
      Top             =   240
      Width           =   3495
   End
   Begin VB.CommandButton cmdOn 
      Caption         =   "On"
      Height          =   364
      Left            =   240
      TabIndex        =   1
      Top             =   840
      Width           =   1066
   End
   Begin VB.CommandButton cmdOff 
      Caption         =   "Off"
      Height          =   364
      Left            =   2640
      TabIndex        =   0
      Top             =   840
      Width           =   1066
   End
   Begin VB.Label Label1 
      Caption         =   "Label1"
      Height          =   255
      Left            =   3960
      TabIndex        =   3
      Top             =   360
      Width           =   1455
   End
End
Attribute VB_Name = "frmDSP1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'DirectX8 driver for Software Defined Radios (SDR)
'Written by Gerald Youngblood, AC5OG
'Copywrite 2000, 2001, 2002
'This code may be use freely for experimentation by Amateur Radio exerimenters
'but is not licensed for commercial use in any manner

Option Explicit

'Define Constants
Const Fs As Long = 48000  '44100                'Sampling frequency Hz
Const NFFT As Long = 4096                       'Number of FFT bins
Const BLKSIZE As Long = 2048                    'Capture/play block size
Const CAPTURESIZE As Long = 4096                'Capture Buffer size

'Define DirectX Objects
Dim dx As New DirectX8                          'DirectX object
Dim ds As DirectSound8                          'DirectSound object
Dim dspb As DirectSoundPrimaryBuffer8           'Primary buffer object
Dim dsc As DirectSoundCapture8                  'Capture object
Dim dsb As DirectSoundSecondaryBuffer8          'Output Buffer object
Dim dscb As DirectSoundCaptureBuffer8           'Capture Buffer object

'Define Type Definitions
Dim dscbd As DSCBUFFERDESC                      'Capture buffer description
Dim dsbd As DSBUFFERDESC                        'DirectSound buffer description
Dim dspbd As WAVEFORMATEX                       'Primary buffer description
Dim CapCurs As DSCURSORS                        'DirectSound Capture Cursor
Dim PlyCurs As DSCURSORS                        'DirectSound Play Cursor

'Create I/O Sound Buffers
Dim inBuffer(CAPTURESIZE) As Integer            'Demodulator Input Buffer
Dim outBuffer(CAPTURESIZE) As Integer           'Demodulator Output Buffer

'Define pointers and counters
Dim Pass As Long                                'Number of capture passes
Dim InPtr As Long                               'Capture Buffer block pointer
Dim OutPtr As Long                              'Output Buffer block pointer
Dim StartAddr As Long                           'Buffer block starting address
Dim EndAddr As Long                             'Ending buffer block address
Dim CaptureBytes As Long                        'Capture bytes to read

'Define loop counter variables for timing the capture event cycle
Dim TimeStart As Double                         'DirectX avg. loop timer variables
Dim TimeEnd As Double
Dim AvgCtr As Long
Dim AvgTime As Double

'Set up Event variables for the Capture Buffer
Implements DirectXEvent8                        'Allows DirectX Events
Dim hEvent(1) As Long                           'Handle for DirectX Event
Dim EVNT(1) As DSBPOSITIONNOTIFY                'Notify position array
Dim Receiving As Boolean                        'In Receive mode if true
Dim FirstPass As Boolean                        'Denotes first pass from Start


Dim Single1(0 To NFFT - 1) As Single   'FFTin Samples In Buffer
Dim Single2(0 To NFFT - 1) As Single   'FFTin Samples In Buffer
Dim Single3(0 To NFFT - 1) As Single   'FFTout Samples In Buffer
Dim Single4(0 To NFFT - 1) As Single   'FFTout Samples In Buffer

Dim Multiplier

Private Sub HScroll1_Change()
  Multiplier = Int(Exp(HScroll1.Value / 60 * 6.908))
  Label1.Caption = "+" + Str(HScroll1.Value) + " dB   " + Str(Multiplier)
End Sub


Sub DSP()
Dim i, j, n
 If Multiplier < 1 Then Multiplier = 1
 
 For i = 0 To 2047
     Single1(i) = inBuffer(2 * i) / 32768       'Left in
     Single2(i) = inBuffer(2 * i + 1) / 32768   'Right in
 Next i
   
 For i = 0 To 2047
     Single1(i) = Single1(i) + Single2(i)       'L+R
     Single1(i) = Single1(i) * Multiplier       '+ xxx dB
     If Single1(i) > 1 Then Single1(i) = 1      'limit 1
     If Single1(i) < -1 Then Single1(i) = -1    'limit -1
 Next i
 
 For i = 0 To 2047
     outBuffer(2 * i) = Int(Single1(i) * 32000)  'Left out
     outBuffer(2 * i + 1) = outBuffer(2 * i)     '= Right out
 Next i
  
End Sub




'==========================================================
'Set up the DirectSound Objects and the Capture and Play
'Buffer descriptions
'==========================================================
Sub CreateDevices()

    On Local Error Resume Next
    
    Set ds = dx.DirectSoundCreate(vbNullString)           'DirectSound object
    Set dsc = dx.DirectSoundCaptureCreate(vbNullString)   'DirectSound Capture
    
    'Check to se if Sound Card is properly installed
    If Err.Number <> 0 Then
        MsgBox "Unable to start DirectSound. Check proper sound card installation"
        End
    End If
       
    'Set the cooperative level to allow formatting of the Primary Buffer
    ds.SetCooperativeLevel Me.hWnd, DSSCL_PRIORITY
    
    'Set up format for capture buffer
    With dscbd
        With .fxFormat
            .nFormatTag = WAVE_FORMAT_PCM
            .nChannels = 2                          'Stereo (I&Q)
            .lSamplesPerSec = Fs                    'Fs is Global for sample rate
            .nBitsPerSample = 16                    '16 bit samples
            .nBlockAlign = .nBitsPerSample / 8 * .nChannels
            .lAvgBytesPerSec = .lSamplesPerSec * .nBlockAlign
        End With
        .lFlags = DSCBCAPS_DEFAULT
        .lBufferBytes = (dscbd.fxFormat.nBlockAlign * CAPTURESIZE) 'Buffer Size
        CaptureBytes = .lBufferBytes \ 2            'Bytes for 1/2 of capture buffer
    End With
    
    Set dscb = dsc.CreateCaptureBuffer(dscbd)       'Create the capture buffer
    
    ' Set up format for secondary playback buffer
    With dsbd
        .fxFormat = dscbd.fxFormat
        .lBufferBytes = dscbd.lBufferBytes * 2  'Play is 2X Capture Buffer Size
        .lFlags = DSBCAPS_GLOBALFOCUS Or DSBCAPS_GETCURRENTPOSITION2
    End With
            
    dspbd = dsbd.fxFormat                           'Set Primary Buffer format
    dspb.SetFormat dspbd                            'to same as Secondary Buffer
    
    Set dsb = ds.CreateSoundBuffer(dsbd)            'Create the secondary buffer
         
End Sub

'=========================================================
'Set events for capture buffer notification at 0 and 1/2
'=========================================================
Sub SetEvents()

    hEvent(0) = dx.CreateEvent(Me)
    hEvent(1) = dx.CreateEvent(Me)
    
    'Buffer Event 0 sets Write at 50% of buffer
    EVNT(0).hEventNotify = hEvent(0)
    EVNT(0).lOffset = (dscbd.lBufferBytes \ 2) - 1  'First half of capture buffer
    
    'Buffer Event 1 Write at 100% of buffer
    EVNT(1).hEventNotify = hEvent(1)
    EVNT(1).lOffset = dscbd.lBufferBytes - 1        'Second half of capture buffer
    
    dscb.SetNotificationPositions 2, EVNT()  'Set number of notification positions
    
End Sub

'Turn Capture/Playback Off
Private Sub cmdOff_Click()
    Receiving = False                   'Reset Receiving flag
    FirstPass = False                   'Reset FirstPass flag
    dscb.Stop                           'Stop Capture Loop
    dsb.Stop                            'Stop Playback Loop
End Sub

'Turn Capture/Playback On
Private Sub cmdOn_Click()
    dscb.Start DSCBSTART_LOOPING            'Start Capture Looping
    Receiving = True                        'Set flag to receive mode
    FirstPass = True                        'This is the first pass after Start
    OutPtr = 0                              'Starts writing to first buffer
End Sub

Private Sub Command1_Click()
 DSP
End Sub

'Create Devices and Set the DirectX8Events
Private Sub Form_Load()
    CreateDevices                           'Create DirectSound devices
    SetEvents                               'Set up DirectX events
End Sub

'============================================================================
'This event is called when Capture Buffer is at 50% and 100%
'Copies respective block from Capture Buffer to inBuffer.  inBuffer is sent
'to the DSP subroutine for modulation/demodulation.  The DSP routine returns
'its results in outBuffer, which is then written to the Secondary Play
'Buffer.  On startup (FirstPass) we will wait for three capture cycles before
'starting the play buffer.  Before writing to the Secondary Buffer we check
'the lWrite and lPlay cursors to make sure that they will not be overwritten.
'If so we will restart the buffer by setting FirstPass = True.  StartTimer
'and StopTimer display the time between entry and exit of the event so that
'we can evaluate the performance of the DSP routines.
'============================================================================
Private Sub DirectXEvent8_DXCallback(ByVal eventid As Long)

    StartTimer                          'Save loop start time
    
    Select Case eventid                 'Determine which Capture Block is ready
        Case hEvent(0)
            InPtr = 0                   'First half of Capture Buffer
        Case hEvent(1)
            InPtr = 1                   'Second half of Capture Buffer
    End Select
            
    StartAddr = InPtr * CaptureBytes    'Capture buffer starting address
       
    'Read from DirectX circular Capture Buffer to inBuffer
    dscb.ReadBuffer StartAddr, CaptureBytes, inBuffer(0), DSCBLOCK_DEFAULT
    
    DSP
    
    'DSP Modulation/Demodulation - NOTE: THIS IS WHERE THE DSP CODE IS CALLED
'    DSP inBuffer, outBuffer
        
    StartAddr = OutPtr * CaptureBytes   'Play buffer starting address
    EndAddr = OutPtr + CaptureBytes - 1 'Play buffer ending address
        
    With dsb                                    'Reference DirectSoundBuffer
        
            .GetCurrentPosition PlyCurs         'Get current Play position

            'If true the write is overlapping the lWrite cursor due to load
            If PlyCurs.lWrite >= StartAddr _
                And PlyCurs.lWrite <= EndAddr Then

                FirstPass = True                'Restart play buffer
                OutPtr = 0
                StartAddr = 0
                
            End If
            
            'If true the write is overlapping the lPlay cursor due to load
            If PlyCurs.lPlay >= StartAddr _
                And PlyCurs.lPlay <= EndAddr Then

                FirstPass = True                'Restart play buffer
                OutPtr = 0
                StartAddr = 0
                
            End If
                        
        'Write outBuffer to DirectX circular Secondary Buffer
        .WriteBuffer StartAddr, CaptureBytes, outBuffer(0), DSBLOCK_DEFAULT
        
'************************CHANGE inBUFFER BACK TO outBUFFER above
        
        OutPtr = IIf(OutPtr >= 3, 0, OutPtr + 1)    'Counts 0 to 3
                
        If FirstPass = True Then        'On FirstPass wait 4 counts before starting
            Pass = Pass + 1             'the Secondary Play buffer looping at 0
            If Pass = 3 Then            'This puts the Play buffer three Capture cycles
                FirstPass = False       'after the current one
                Pass = 0                'Reset the Pass counter
                .SetCurrentPosition 0   'Set playback position to zero
                .Play DSBPLAY_LOOPING   'Start playback looping
            End If
        End If
        
    End With
    
    StopTimer                           'Display average loop time in immediate window
        
End Sub

'======================================================
'Shut everything down and close application
'======================================================
Public Static Sub StartTimer()
    
    'Save the start time for the DirectX8Event loop
    TimeStart = Timer
    
End Sub

Public Static Sub StopTimer()
    
    'Average the time for the DirectX8Event loop
    
    TimeEnd = Timer                             'Save the stop time

    AvgCtr = IIf(AvgCtr = 19, 0, AvgCtr + 1)    'Average for 20 counts

    If AvgCtr = 0 Then
        AvgTime = AvgTime / 20
        Debug.Print "Average Loop Time: "; Format(AvgTime, "0.000000")
        AvgTime = TimeEnd - TimeStart
    Else
        AvgTime = AvgTime + TimeEnd - TimeStart
    End If
End Sub

'======================================================
'Shut everything down and close application
'======================================================
Private Sub Form_Unload(Cancel As Integer)

    If Receiving = True Then
        dsb.Stop                        'Stop Playback
        dscb.Stop                       'Stop Capture
    End If
        
    Dim i As Integer

    For i = 0 To UBound(hEvent)                 'Kill DirectX Events
        DoEvents
        If hEvent(i) Then dx.DestroyEvent hEvent(i)
    Next

    Set dx = Nothing                            'Kill DirectX objects
    Set ds = Nothing
    Set dsc = Nothing
    Set dsb = Nothing
    Set dscb = Nothing
    
    Unload Me
    
End Sub


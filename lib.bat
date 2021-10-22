call %*
goto :eof

:print_color
	call %* > %TOOLS%\out
	echo off
    for /f "tokens=*" %%s in (%TOOLS%\out) do (
         call :color %%s
    )
    echo on
    del /Q %TOOLS%\out
    goto :eof

:color
    echo [44;93m%*[0m
    goto :eof

:ask
    echo off
    call :color Press any key to continue
    echo on
    pause >nul
    goto :eof

:sep
    echo off
    call :color ---------------------------------------------------------------------------------------
    echo on
    goto :eof

:install
    cd %ROOT%
    set DEST=%~1
    set URL=%~2
    set FOLDER=%~3
    IF EXIST %TOOLS%\%DEST%.zip (
        del /Q %TOOLS%\%DEST%.zip
    )
    powershell -command "& { set-executionpolicy remotesigned -s currentuser; [System.Net.ServicePointManager]::SecurityProtocol = 3072 -bor 768 -bor 192 -bor 48; $client=New-Object System.Net.WebClient; $client.Headers.Add([System.Net.HttpRequestHeader]::Cookie, 'oraclelicense=accept-securebackup-cookie'); $client.DownloadFile('%URL%','%TOOLS%\%DEST%.zip') }"
    rd /S /Q %TOOLS%\..\.%DEST%
    if "%FOLDER%"=="" (
        %ARCH% x -y -o%TOOLS%\..\.%DEST% %TOOLS%\%DEST%.zip
    ) ELSE (
        %ARCH% x -y -o%TOOLS%\.. %TOOLS%\%DEST%.zip
        timeout 1
        rename %TOOLS%\..\%FOLDER% .%DEST%
    )
    cd %ROOT%
    goto :eof
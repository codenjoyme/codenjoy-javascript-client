call 0-settings.bat

echo off
echo        [44;93m+-----------------------------------+[0m
echo        [44;93m!         Installing Node.js        ![0m
echo        [44;93m+-----------------------------------+[0m
echo on

if "%SKIP_NODE_INSTALL%"=="true" ( goto :skip )
if "%INSTALL_LOCALLY%"=="false" ( goto :skip )
if "%INSTALL_LOCALLY%"=="" ( goto :skip )

cd %ROOT%
powershell -command "& { set-executionpolicy remotesigned -s currentuser; [System.Net.ServicePointManager]::SecurityProtocol = 3072 -bor 768 -bor 192 -bor 48; $client=New-Object System.Net.WebClient; $client.Headers.Add([System.Net.HttpRequestHeader]::Cookie, 'oraclelicense=accept-securebackup-cookie'); $client.DownloadFile('%ARCH_NODE%','%TOOLS%\node.zip') }"
rd /S /Q %TOOLS%\..\.node
%ARCH% x -y -o%TOOLS%\.. %TOOLS%\node.zip
rename %TOOLS%\..\%ARCH_NODE_FOLDER% .node
cd %ROOT%

call :ask

goto :eof

:skip
	echo off
	echo        [44;93m  Installation skipped:       [0m
	echo        [44;93m      INSTALL_LOCALLY=%INSTALL_LOCALLY%     [0m
	echo        [44;93m      SKIP_NODE_INSTALL=%SKIP_NODE_INSTALL%        [0m
	echo on
	goto :ask
goto :eof

:ask
    echo off
    echo        [44;93m+---------------------------------+[0m
    echo        [44;93m!    Press any key to continue    ![0m
    echo        [44;93m+---------------------------------+[0m
    echo on
    pause >nul
goto :eof
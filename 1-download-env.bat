call 0-settings.bat

echo off
call lib.bat :color Installing js...
echo on

if "%SKIP_NODE_INSTALL%"=="true" ( goto :skip )
if "%INSTALL_LOCALLY%"=="false" ( goto :skip )
if "%INSTALL_LOCALLY%"=="" ( goto :skip )

IF EXIST %TOOLS%\..\node_modules (
    rd /S /Q %TOOLS%\..\node_modules
)
call lib.bat :install node
call lib.bat :print_color %NPM% -v

call lib.bat :ask

goto :eof

:skip
	echo off
	call lib.bat :color Installation skipped
	call lib.bat :color INSTALL_LOCALLY=%INSTALL_LOCALLY%
	call lib.bat :color SKIP_NODE_INSTALL=%SKIP_NODE_INSTALL%
	echo on
	call lib.bat :ask
    goto :eof
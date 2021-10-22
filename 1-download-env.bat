call 0-settings.bat

echo off
call lib :color Installing js...
echo on

if "%SKIP_NODE_INSTALL%"=="true" ( goto :skip )
if "%INSTALL_LOCALLY%"=="false" ( goto :skip )
if "%INSTALL_LOCALLY%"=="" ( goto :skip )

IF EXIST %TOOLS%\..\node_modules (
    rd /S /Q %TOOLS%\..\node_modules
)
call lib :install node %ARCH_URL% %ARCH_FOLDER%
call lib :print_color %NPM% -v

call lib :ask

goto :eof

:skip
	echo off
	call lib :color Installation skipped
	call lib :color INSTALL_LOCALLY=%INSTALL_LOCALLY%
	call lib :color SKIP_NODE_INSTALL=%SKIP_NODE_INSTALL%
	echo on
	call lib :ask
    goto :eof
if "%JAVASCRIPT_CLIENT_HOME%"=="" (
    call 0-settings.bat
)

echo off
echo [44;93m
echo        +-------------------------------------------------------------------------+
echo        !              Now we are starting javascript client...                   !
echo        +-------------------------------------------------------------------------+
echo [0m
echo on

chcp %CODE_PAGE%
cls

call %NPM% start %GAME_TO_RUN% %BOARD_URL%

call :ask

goto :eof

:ask
    echo Press any key to continue
    pause >nul
goto :eof
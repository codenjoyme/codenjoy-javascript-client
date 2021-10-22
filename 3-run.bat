call 0-settings.bat

echo off
call lib :color Starting js client...
echo on

call %NPM% start %GAME_TO_RUN% %BOARD_URL%

call lib :ask
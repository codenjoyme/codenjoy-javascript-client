echo off
call lib :color Setup variables...
echo on

if "%GAME_TO_RUN%"=="" ( set GAME_TO_RUN=mollymage)
if "%BOARD_URL%"==""   ( set BOARD_URL=http://127.0.0.1:8080/codenjoy-contest/board/player/0?code=000000000000)

set ROOT=%CD%

if "%SKIP_TESTS%"==""  ( set SKIP_TESTS=true)

set CODE_PAGE=65001
chcp %CODE_PAGE%

set TOOLS=%ROOT%\.tools
set ARCH=%TOOLS%\7z\7za.exe

rem Set to true if you want to ignore node installation on the system
if "%INSTALL_LOCALLY%"==""     ( set INSTALL_LOCALLY=true)

if "%INSTALL_LOCALLY%"=="true" ( set NODE_HOME=)

if "%NODE_HOME%"=="" ( set NODE_HOME=%ROOT%\.node)

set NPM=%NODE_HOME%\npm

echo off
call lib :color NODE_HOME=%NODE_HOME%
echo on

set ARCH_URL=https://nodejs.org/dist/v14.17.0/node-v14.17.0-win-x64.zip
set ARCH_FOLDER=node-v14.17.0-win-x64

set JAVASCRIPT_CLIENT_HOME=%ROOT%
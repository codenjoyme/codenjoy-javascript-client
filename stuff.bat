@echo off

call run :init_colors

:check_run_mode
    if "%*"=="" (       
        call :run_executable 
    ) else (
        call :run_library %*
    )
    goto :eof

:run_executable
    rem run stuff.bat as executable script
    call run :color ‘%CL_INFO%‘ ‘This is not executable script. Please use 'run.bat' only.‘
    call run :ask   
    goto :eof

:run_library
    rem run stuff.bat as library
    call %*     
    goto :eof          

:settings
    if "%INSTALL_LOCALLY%"=="true" ( set NODE_HOME=)

    if "%NODE_HOME%"==""   ( set NO_NODE=true)
    if "%NO_NODE%"=="true" ( set NODE_HOME=%ROOT%\.node)
    if "%NO_NODE%"=="true" ( set PATH=%NODE_HOME%\;%PATH%)

    set NPM=%NODE_HOME%\npm

    echo Language environment variables
    call run :color ‘%CL_INFO%‘ ‘PATH=%PATH%‘
    call run :color ‘%CL_INFO%‘ ‘NODE_HOME=%NODE_HOME%‘

    set ARCH_URL=https://nodejs.org/dist/v14.17.0/node-v14.17.0-win-x64.zip
    set ARCH_FOLDER=node-v14.17.0-win-x64
    goto :eof

:install
    if exist %TOOLS%\..\node_modules (
        call run :eval_echo ‘rd /S /Q %TOOLS%\..\node_modules‘
    )
    call run :install node %ARCH_URL% %ARCH_FOLDER%
    goto :eof

:version
    call run :eval_echo_color ‘%NPM% -v‘
    goto :eof

:build
    call run :eval_echo ‘%NPM% install‘
    goto :eof

:test    
    call run :eval_echo ‘%NPM% test‘
    echo.
    goto :eof

:run
    call run :eval_echo ‘%NPM% start %GAME_TO_RUN% %SERVER_URL%‘
    goto :eof
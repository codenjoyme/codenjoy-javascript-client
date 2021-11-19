call 0-settings.bat

echo off
call lib :color Building js client...
echo on

call lib :print_color %NPM% -v

call %NPM% install

call lib :ask
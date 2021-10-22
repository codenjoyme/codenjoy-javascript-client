call 0-settings.bat

echo off
call lib.bat :color Building js client...
echo on

call lib.bat :print_color %NPM% -v
call %NPM% install

call lib.bat :ask
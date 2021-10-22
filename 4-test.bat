call 0-settings.bat

echo off
call lib :color Starting js tests...
echo on

call %NPM% test

call lib :ask
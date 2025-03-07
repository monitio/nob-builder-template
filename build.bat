@echo off

:: Compile the program
echo Compiling nob.c...
clang ./builder/nob.c -o nob
if %errorlevel% neq 0 (
    echo Compilation failed!
    exit /b %errorlevel%
)

:: Move the binary to the builder folder
move /Y nob.exe builder\nob.exe

cls
echo Running ./nob...
timeout /t 1 >nul
cls

:: Run the binary from the builder folder
builder\nob.exe

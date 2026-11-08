@echo off
setlocal
title M Mithun - 3D Celestial Portfolio

echo ===================================================================
echo     M MITHUN - 3D CELESTIAL PORTFOLIO AND TERMINAL SYSTEM
echo     AI and Data Science - Sri Eshwar College of Engineering
echo ===================================================================
echo.

:: Ensure working directory is the folder where this batch script resides
cd /d "%~dp0"

:: Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Check if node_modules exists, if not install dependencies
if not exist "node_modules" (
    echo [INFO] Installing required dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install encountered an error.
        pause
        exit /b %errorlevel%
    )
    echo [INFO] Dependencies installed successfully!
    echo.
)

echo [INFO] Starting Vite development server...
echo [INFO] Opening web browser at http://localhost:3000 ...
echo.

:: Open browser automatically
start http://localhost:3000

:: Start the Vite development server
call npm run dev

pause

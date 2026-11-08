@echo off
setlocal enabledelayedexpansion
title M Mithun — 3D Celestial Portfolio & Terminal System

echo ===================================================================
echo     M MITHUN — 3D CELESTIAL PORTFOLIO & UBUNTU TERMINAL SYSTEM
echo     AI & Data Science | Sri Eshwar College of Engineering
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
    echo [INFO] Installing required dependencies (Three.js, React, Lucide, Tailwind)...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install encountered an error.
        pause
        exit /b %errorlevel%
    )
    echo [INFO] Dependencies installed successfully!
    echo.
)

echo [INFO] Launching 3D Celestial Portfolio on http://localhost:3000 ...
echo [INFO] Opening default web browser...
echo.

:: Wait 2 seconds and open browser
start "" http://localhost:3000

:: Start the Vite development server
call npm run dev

pause

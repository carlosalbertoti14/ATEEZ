@echo off
setlocal

set "outputFile=Nomes_dos_Arquivos.txt"

echo Listando arquivos na pasta atual...
dir /b /a-d > "%outputFile%"

echo.
echo Nomes dos arquivos salvos em "%outputFile%".
pause
#!/bin/bash
ARCH=$(uname -m)

if [[ "$ARCH" = "x86_64" ]];
then
    echo $ARCH
fi